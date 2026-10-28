import { store, type WritableStore } from 'openrct2-flexui'

const CONTROL_STATE_NAMESPACE = 'refurbishManager.values'
export const controlStore = loadControlStore()

export type Status = 'closed' | 'empty' | 'refurbished' | 'instant' | 'realistic' | null

export type Refurbishment = {
	ride: number
	status: Status
}

interface PersistableState {
	autoRefurbish: boolean
	instantRefurbish: boolean
	refurbishAge: number
	rideInProgress: Refurbishment | null
	/** Tens of cents (100 = $10.00, 0 = $0.00) */
	minCash: number
}

export interface ControlState extends PersistableState {
	waiter: IDisposable | null
	rides: Ride[]
	selectedRideIndex: number
	selectedRide?: Ride | null
}

/** Create a store, loading in persisted state from save */
function loadControlStore(): WritableStore<ControlState> {
	const saved = context.getParkStorage().get<ControlState>(CONTROL_STATE_NAMESPACE) || {}
	// Migrate legacy bug: minCash was 1,000,000 ($100,000)
	if (saved.minCash !== undefined && saved.minCash >= 1000000) {
		saved.minCash = 0
	}
	if (saved.rideInProgress) {
		saved.rideInProgress = null
	}

	return store({
		autoRefurbish: false,
		instantRefurbish: false,
		rideInProgress: null,
		refurbishAge: 18,
		waiter: null,
		rides: [],
		selectedRideIndex: 0,
		minCash: 0,
		...saved,
	})
}

export function setVolatileState(newData: Partial<ControlState>) {
	const newState = {
		...controlStore.get(),
		...newData,
	}

	controlStore.set(newState)
}

/** Update store & persist to park (save file) */
export function setAndPersistState(newData: Partial<ControlState>) {
	const newState = {
		...controlStore.get(),
		...newData,
	}

	controlStore.set(newState)

	const persistableState: PersistableState = {
		autoRefurbish: newState.autoRefurbish,
		instantRefurbish: newState.instantRefurbish,
		refurbishAge: newState.refurbishAge,
		rideInProgress: newState.rideInProgress,
		minCash: newState.minCash,
	}

	context.getParkStorage().set(CONTROL_STATE_NAMESPACE, persistableState)
}
