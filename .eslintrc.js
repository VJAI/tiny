module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
    commonjs: true,
    serviceworker: true,
    amd: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'header', 'node'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-this-alias': 'off',
    'brace-style': ['error', '1tbs'],
    eqeqeq: ['error', 'smart'],
    'prefer-rest-params': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private', 'protected'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ],
    'no-console': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', args: 'after-used' }
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreProperties: true }
    ],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Function: null
        }
      }
    ],
    '@typescript-eslint/no-shadow': ['warn'],
    'arrow-parens': ['error', 'as-needed'],
    'node/no-deprecated-api': ['warn']
  },
  overrides: [
    {
      files: ['test/**/*.ts'],
      rules: {
        'no-empty': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 1,
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off']
      }
    }
  ]
};
