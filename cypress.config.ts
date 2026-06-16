import { defineConfig } from 'cypress'

export default defineConfig({
	chromeWebSecurity: false,
	experimentalMemoryManagement: true,
	experimentalWebKitSupport: true,
	trashAssetsBeforeRuns: true,
	video: false,
	allowCypressEnv: false,
	experimentalRunAllSpecs: true,
	defaultCommandTimeout: 30000,
	pageLoadTimeout: 30000,
	e2e: {
		baseUrl: 'https://av-qa-recruitment.netlify.app',
		experimentalOriginDependencies: true,
		setupNodeEvents(on, config) {
			return config
		},
	},
})
