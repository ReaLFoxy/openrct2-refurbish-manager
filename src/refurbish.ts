import {
	close,
	getRefurbishableRide,
	open,
	postRideMessage,
	setRideStatus,
	tryRefurbish,
} from './rides'
import type { Refurbishment } from './state'
import { controlStore, setAndPersistState } from './state'

export function pollForRefurbishableRides() {
	return context.subscribe('interval.day', processRides)
}

export function resumeInProgressRefurbishment() {
	const rideInProgress = controlStore.get().rideInProgress
	if (rideInProgress && rideInProgress.ride !== undefined) {
		const ride = map.getRide(rideInProgress.ride)
		if (ride) {
			startRefurbishment(ride)
		} else {
			setAndPersistState({ rideInProgress: null })
		}
	}
}

export function startRefurbishment(ride: Ride): void {
	if (!ride) return
	const isInstant = controlStore.get().instantRefurbish
	setAndPersistState({
		rideInProgress: { ride: ride.id, status: isInstant ? 'instant' : 'realistic' },
	})

	const p = isInstant ? executeInstantRefurbish(ride) : executeRealisticRefurbish(ride)
	p.catch(reportRefurbishError(ride))
}

function executeInstantRefurbish(ride: Ride): Promise<Ride> {
	return new Promise((resolve, reject) => {
		if (!ride) {
			setAndPersistState({ rideInProgress: null })
			return reject(new Error('Ride not found'))
		}

		// Double close: 1st closes queue, 2nd forces vehicle reset and passenger exit
		setRideStatus(ride, 0, false)
			.then(() => setRideStatus(ride, 0, false))
			.then(() => {
				let retries = 0
				const attemptRenew = () => {
					retries++
					const currentRide = map.getRide(ride.id)
					if (!currentRide) {
						setAndPersistState({ rideInProgress: null })
						return reject(new Error('Ride was deleted during refurbishment'))
					}

					tryRefurbish(currentRide, false)
						.then(() => {
							postRideMessage(currentRide, `${currentRide.name} has been refurbished!`)
							return open(currentRide)
						})
						.then(() => {
							setAndPersistState({ rideInProgress: null })
							resolve(currentRide)
						})
						.catch((err) => {
							if (retries < 5) {
								const sub = context.subscribe('interval.day', () => {
									sub.dispose()
									setRideStatus(ride, 0, false)
										.then(attemptRenew)
										.catch(attemptRenew)
								})
							} else {
								open(ride).catch(() => {})
								setAndPersistState({ rideInProgress: null })
								reject(err)
							}
						})
				}
				attemptRenew()
			})
			.catch((err) => {
				open(ride).catch(() => {})
				setAndPersistState({ rideInProgress: null })
				reject(err)
			})
	})
}

function executeRealisticRefurbish(ride: Ride): Promise<Ride> {
	return new Promise((resolve, reject) => {
		if (!ride) {
			setAndPersistState({ rideInProgress: null })
			return reject(new Error('Ride not found'))
		}

		// Single close: new guests cannot enter queue, existing riders finish lap naturally
		close(ride)
			.then(() => {
				let daysWaited = 0
				const maxWaitDays = 30 // Failsafe timeout

				const waiter = context.subscribe('interval.day', () => {
					daysWaited++
					const currentRide = map.getRide(ride.id)
					if (!currentRide) {
						waiter.dispose()
						setAndPersistState({ rideInProgress: null })
						return reject(new Error('Ride was deleted during refurbishment'))
					}

					// Query if ride can be refurbished (succeeds only when empty & docked)
					tryRefurbish(currentRide, true)
						.then(() => {
							waiter.dispose()
							// Now empty! Execute actual refurbishment
							return tryRefurbish(currentRide, false)
								.then(() => {
									postRideMessage(currentRide, `${currentRide.name} has been refurbished!`)
									return open(currentRide)
								})
								.then(() => {
									setAndPersistState({ rideInProgress: null })
									resolve(currentRide)
								})
								.catch((err) => {
									open(currentRide).catch(() => {})
									setAndPersistState({ rideInProgress: null })
									reject(err)
								})
						})
						.catch(() => {
							// Query failed: still occupied. Check timeout
							if (daysWaited >= maxWaitDays) {
								waiter.dispose()
								open(currentRide).catch(() => {})
								setAndPersistState({ rideInProgress: null })
								reject(new Error(`Refurbishment timed out (ride took over ${maxWaitDays} days to empty)`))
							}
						})
				})
			})
			.catch((err) => {
				open(ride).catch(() => {})
				setAndPersistState({ rideInProgress: null })
				reject(err)
			})
	})
}

function processRides() {
	const { rideInProgress, refurbishAge, minCash } = controlStore.get()
	if (rideInProgress || park.cash < minCash) {
		return
	}

	const ride = getRefurbishableRide(refurbishAge)
	if (!ride) {
		return
	}

	startRefurbishment(ride)
}

function reportRefurbishError(ride: Ride) {
	return (e: Error | GameActionResult | any) => {
		const name = ride?.name ?? 'Ride'
		const errMsg = e?.errorMessage || e?.message || String(e)
		console.log(`Error refurbishing ${name}: ${errMsg}`)
		if (ride) {
			postRideMessage(
				ride,
				`Error refurbishing ${name}: ${errMsg}`,
			)
			open(ride).catch(() => {})
		}
		setAndPersistState({ rideInProgress: null })
	}
}
