import { defineConfig } from 'eslint/config'
import pluginCypress from 'eslint-plugin-cypress'
import parser from '@typescript-eslint/parser'

export default defineConfig([
	{
		files: ['cypress/**/*.ts'],
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './cypress/tsconfig.json',
			},
		},
		extends: [pluginCypress.configs.globals],
	},
])
