module.exports = {
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'standard',
    //  'eslint:recommended'
  ],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': 'never',
    quotes: [1, 'single'],
    // "max-len": [
    //   "error",
    //   {
    //     code: 200,
    //     // 'ignorePattern': "",
    //     ignoreComments: true,
    //     ignoreTrailingComments: true,
    //     ignoreUrls: true,
    //     ignoreStrings: true,
    //     ignoreTemplateLiterals: true,
    //     ignoreRegExpLiterals: true
    //   }
    // ],
    'no-console': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 1,
      },
    ],
    'react/jsx-uses-vars': [2],
    semi: [2, 'always'],
    'linebreak-style': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-multi-assign': 0,
    'no-lonely-if': 1,
    'no-nested-ternary': 0,
    'wrap-iife': [2, 'inside'],
    'jsx-quotes': [2, 'prefer-single'],
    'generator-star-spacing': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 1,
    'react/no-string-refs': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 2,
    'react/require-default-props': [2, { forbidDefaultForRequired: true }],
    'jsx-a11y/no-static-element-interactions': 0,
    'keyword-spacing': [2, { before: true }],
    eqeqeq: [2, 'always'],
    'space-infix-ops': [2, { int32Hint: false }],
    'spaced-comment': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'block-spacing': [2, 'always'],
    'no-else-return': 2,
  },
}
