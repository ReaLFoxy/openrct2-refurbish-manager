import {
	box,
	button,
	checkbox,
	compute,
	dropdown,
	horizontal,
	label,
	spinner,
	vertical,
	window,
} from 'openrct2-flexui'

import {
	getRefurbishableRideNames,
	getSelectedRideIndex,
	isRideInProgress,
	refurbishImmediately,
	setMinCash,
	setRefurbishAge,
	setRideIndex,
	toggleAutoRefurbish,
	toggleInstantRefurbish,
} from './controller'
import { getRefurbishableRides } from './rides'
import { controlStore, setVolatileState } from './state'

export const controlPanel = window({
	title: 'Refurbish Manager (v1.2.0)',
	width: { value: 230, min: 230, max: 230 },
	height: { value: 210, min: 210, max: 210 },
	onOpen: () => {
		const rides = getRefurbishableRides()
		const curIdx = controlStore.get().selectedRideIndex
		const newIdx = curIdx >= 0 && curIdx < rides.length ? curIdx : (rides.length > 0 ? 0 : -1)
		setVolatileState({
			rides,
			selectedRideIndex: newIdx,
			selectedRide: newIdx >= 0 ? rides[newIdx] : null,
		})
	},
	content: [
		box({
			text: 'Auto refurbishment',
			content: vertical({
				content: [
					checkbox({
						text: 'Enabled',
						isChecked: controlStore.get().autoRefurbish,
						onChange: toggleAutoRefurbish,
					}),
					checkbox({
						text: 'Instant refurbish (Force empty)',
						tooltip: 'Checked: forces riders to exit and refurbishes immediately.\nUnchecked: realistic mode (waits for all current riders to naturally finish and exit).',
						isChecked: controlStore.get().instantRefurbish,
						onChange: toggleInstantRefurbish,
					}),
					horizontal({
						content: [
							label({
								text: 'Min. ride age (months)',
								width: '68%',
							}),
							spinner({
								minimum: 1,
								value: controlStore.get().refurbishAge,
								onChange: setRefurbishAge,
							}),
						],
					}),
					horizontal({
						content: [
							label({
								text: 'Min. cash',
								width: '38%',
							}),
							spinner({
								minimum: 0,
								step: 10000,
								value: controlStore.get().minCash,
								format: (cash) => context.formatString('{CURRENCY}', cash),
								onChange: setMinCash,
							}),
						],
					}),
				],
			}),
		}),
		box({
			text: 'Manual refurbishment',
			content: vertical({
				content: [
					dropdown({
						items: compute(controlStore, getRefurbishableRideNames),
						selectedIndex: compute(controlStore, getSelectedRideIndex),
						onChange: setRideIndex,
					}),
					button({
						text: 'Refurbish now',
						height: '28px',
						disabled: compute(controlStore, isRideInProgress),
						onClick: refurbishImmediately,
					}),
				],
			}),
		}),
	],
})
