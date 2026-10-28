import { pollForRefurbishableRides, startRefurbishment } from './refurbish'
import {
	type ControlState,
	controlStore,
	setAndPersistState,
	setVolatileState,
} from './state'

export function toggleAutoRefurbish(checked: boolean): void {
	const oldWaiter = controlStore.get().waiter
	if (oldWaiter) {
		oldWaiter.dispose()
	}

	if (checked) {
		const waiter = pollForRefurbishableRides()

		setAndPersistState({
			autoRefurbish: true,
			waiter,
		})
	} else {
		setAndPersistState({
			autoRefurbish: false,
			waiter: null,
		})
	}
}

export function toggleInstantRefurbish(checked: boolean): void {
	setAndPersistState({
		instantRefurbish: checked,
	})
}

export function setRefurbishAge(refurbishAge: number): void {
	setAndPersistState({
		refurbishAge,
	})
}

export function getRefurbishableRideNames({ rides }: ControlState): string[] {
	return rides.map(({ name }) => name)
}

export function getSelectedRideIndex({ selectedRideIndex }: ControlState) {
	return selectedRideIndex
}

export function setRideIndex(i: number) {
	const rides = controlStore.get().rides
	setVolatileState({
		selectedRideIndex: i,
		selectedRide: (i >= 0 && i < rides.length) ? rides[i] : null,
	})
}

export function refurbishImmediately(): void {
	const st = controlStore.get()
	let ride = st.selectedRide
	if (!ride && st.rides && st.rides.length > 0) {
		ride = st.rides[0]
	}
	if (ride && !st.rideInProgress) {
		startRefurbishment(ride)
	}
}

export function isRideInProgress({ rideInProgress }: ControlState) {
	return !!rideInProgress
}

export function setMinCash(minCash: number): void {
	setAndPersistState({
		minCash,
	})
}
