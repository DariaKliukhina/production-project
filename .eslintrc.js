module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/naming-convention': 1,
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'i18next/no-literal-string': ['error', {markupOnly: true}]
  },
  globals: {
    __IS_DEV__: true
  }
}
