// @ts-check
import eslintConfig from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import globals from 'globals'

/**
 * Set the default FlatConfig.languageOptions to 'node' and 'browser'.
 * @type {NonNullable<import('eslint').Linter.FlatConfig['languageOptions']>}
 */
export const envConfig = {
  globals: {
    ...globals.node,
    ...globals.browser,
  },
}

/**
 * ESLint Config for TypeScript
 * @type {import('eslint').Linter.FlatConfig}
 */
export const tsEslintConfig = {
  files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
  },
  languageOptions: {
    parser: tsEslintParser,
  },
  rules: {
    ...tsEslintPlugin.configs['eslint-recommended'].overrides[0].rules,
    ...tsEslintPlugin.configs.stylistic.rules,
    /**
     * This rules is set up to use the same rules as '@typescript-eslint/recommended' in v5.
     * https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/#updated-configuration-rules
     */
    // This rules removed from recommended in v6.
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    // This rules added recommended in v6.
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    // This rule moved from recommended to stylistic in v6.
    // Turn off the rules added by "stylistic" once so that they do not affect the roadmap. Turn it on if necessary.
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',

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
      ...envConfig.globals,
    },
  },
  eslintConfig.configs.recommended,
  tsEslintConfig,
]
