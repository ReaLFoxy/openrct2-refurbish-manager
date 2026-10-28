/// <reference path="../lib/openrct2.d.ts" />

import { startup } from './startup'

registerPlugin({
	name: 'RefurbishManager',
	version: '1.2.0',
	authors: ['Ellis Clayton', 'Patched'],
	type: 'local',
	licence: 'MIT',
	targetApiVersion: 111,
	main: startup,
})
