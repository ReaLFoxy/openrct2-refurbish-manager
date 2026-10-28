import { toggleAutoRefurbish } from './controller'
import { resumeInProgressRefurbishment } from './refurbish'
import { controlStore } from './state'
import { controlPanel } from './view'

export function startup() {
	// Startup restoration
	if (controlStore.get().autoRefurbish) {
		toggleAutoRefurbish(true)
	}

	resumeInProgressRefurbishment()

	// Register a menu item under the map icon:
	if (typeof ui !== 'undefined') {
		ui.registerMenuItem('Refurbish Manager', () => {
			controlPanel.open()
		})
	}
}
