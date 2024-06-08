module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'svelte'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      plugins: ['svelte'],
      extends: ['plugin:svelte/recommended'],
    },
  ],
  rules: {
    'block-scoped-var': 'error',
    camelcase: 'error',
    curly: 'error',
    'func-style': ['error', 'expression'],
    'no-alert': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        reportUsedIgnorePattern: false,
      },
    ],
  },
}
