import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist/', 'node_modules/', '.astro/']),
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  },
  {
    files: ['**/*.astro'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintPluginAstro.configs.recommended,
      eslintPluginPrettier,
      prettierConfig
    ],
    rules: {
      'prettier/prettier': ['error', { trailingComma: 'none' }]
    }
  }
])
