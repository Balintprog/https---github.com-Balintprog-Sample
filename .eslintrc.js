module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/'],
  env: { browser: true, node: true, es6: true },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'tailwindcss', 'prettier', 'jsx-a11y', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }, { usePrettierrc: true, fileInfoOptions: { withNodeModules: true } }],
    'prefer-const': ['warn', { destructuring: 'all' }],
    'no-unused-vars': 'warn',
    'no-unsafe-optional-chaining': 0,
    'no-undef': 0,
    'no-duplicate-imports': 2,
    eqeqeq: 1,
    'react/display-name': 0,
    '@next/next/no-img-element': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'tailwindcss/no-custom-classname': 0,
    'tailwindcss/classnames-order': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'prefer-rest-params': 0,
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-throw-literal': 'warn',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/quotes': [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/no-this-alias': 1,
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': 0,
      },
    },
  ],
};
