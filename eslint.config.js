// @ts-check
import eslintConfig from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import globals from 'globals'

/**
 * ESLint Config for TypeScript
 * @type {import('eslint').Linter.FlatConfig}
 */
const tsEslintConfig = {
  files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
  },
  languageOptions: {
    parser: tsEslintParser,
  },
  rules: {
    ...tsEslintPlugin.configs['eslint-recommended'].overrides[0].rules,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
}

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    ignores: ['*.d.ts', '*.js', '*.cjs'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  eslintConfig.configs.recommended,
  tsEslintConfig,
]
