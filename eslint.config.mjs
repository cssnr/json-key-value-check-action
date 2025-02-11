import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
// import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
// import prettier from 'eslint-plugin-prettier'

const compat = new FlatCompat({
    baseDirectory: '.',
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        ignores: ['**/dist', '**/node_modules'],
    },
    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
        // 'plugin:prettier/recommended'
    ),
    {
        plugins: {
            import: fixupPluginRules(_import),
            // prettier,
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]
