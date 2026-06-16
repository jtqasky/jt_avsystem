import { defineConfig } from 'eslint/config'
import pluginCypress from 'eslint-plugin-cypress'

export default defineConfig([
	{
		files: ['cypress/**/*.ts'],
		extends: [pluginCypress.configs.globals],
	},
])
