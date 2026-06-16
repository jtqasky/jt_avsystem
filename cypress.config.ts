import { defineConfig } from 'cypress'

export default defineConfig({
	chromeWebSecurity: false,
	experimentalMemoryManagement: true,
	experimentalWebKitSupport: true,
	trashAssetsBeforeRuns: true,
	video: false,
	allowCypressEnv: false,
	e2e: {
		baseUrl: 'https://av-qa-recruitment.netlify.app',
		experimentalRunAllSpecs: true,
		experimentalOriginDependencies: true,
		defaultCommandTimeout: 30000,
		pageLoadTimeout: 30000,
		setupNodeEvents(on, config) {
			return config
		},
	},
})
