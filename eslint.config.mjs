import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig(js.configs.recommended, tseslint.configs.recommended, {
    plugins: {
        '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
    },
    settings: {
        env: {
            node: true,
            es2021: true,
        },
    },
    rules: {
        'no-undef': 'off',
        'no-extra-semi': 'off',
    },
})
