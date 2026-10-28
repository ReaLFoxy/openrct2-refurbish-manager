enum NON_REFURBISHABLE_RIDE_TYPES {
	RIDE_TYPE_MAZE = 20,
	RIDE_TYPE_MINI_GOLF = 67,
	RIDE_TYPE_CROOKED_HOUSE = 71,
}

export function getRefurbishableRides(): Ride[] {
	return map.rides.filter(
		(ride) =>
			ride.classification === 'ride' &&
			Object.values(NON_REFURBISHABLE_RIDE_TYPES).indexOf(ride.type) === -1,
	)
}

export function getRefurbishableRide(minAge: number): Ride | null {
	const eligible = map.rides.filter(
		(ride) =>
			ride.classification === 'ride' &&
			Object.values(NON_REFURBISHABLE_RIDE_TYPES).indexOf(ride.type) === -1 &&
			ride.age > minAge,
	)

	if (eligible.length > 0) {
		// Prioritize oldest ride (highest age first)
		eligible.sort((a, b) => b.age - a.age)
		return eligible[0]
	}

	return null
}

export function setRideStatus(
	ride: Ride,
	status: number,
	dryRun: boolean,
): Promise<GameActionResult> {
	const actionType = dryRun ? 'queryAction' : 'executeAction'

	return new Promise((resolve, reject) => {
		context[actionType](
			'ridesetstatus',
			{ ride: ride.id, status },
			handleGameActionResult(resolve, reject),
		)
	})
}

export function tryRefurbish(ride: Ride, dryRun: boolean): Promise<GameActionResult> {
	const actionType = dryRun ? 'queryAction' : 'executeAction'

	return new Promise((resolve, reject) => {
		context[actionType](
			'ridedemolish',
			{ ride: ride.id, modifyType: 1 },
			handleGameActionResult(resolve, reject),
		)
	})
}

function handleGameActionResult(
	onSuccess: (result: GameActionResult) => void,
	onError: (error: GameActionResult) => void,
) {
	return (result: GameActionResult) => {
		if (result.error === 0) {
			onSuccess(result)
		} else {
			onError(result)
		}
	}
}

export function postRideMessage(ride: Ride, message: string) {
	park.postMessage({
		type: 'attraction',
		text: message,
		subject: ride.id,
	})
}

export function close(ride: Ride): Promise<Ride> {
	return setRideStatus(ride, 0, false).then(() => {
		postRideMessage(ride, `${ride.name} has shut down for refurbishment.`)
		return ride
	})
}

export function open(ride: Ride): Promise<Ride> {
	return setRideStatus(ride, 1, false).then(() => ride)
}
