module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'ember-suave'
  ],
  // add your custom rules here
  rules: {
    'indent': [2, 2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'padding-line-between-statements': [ 1,
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: 'block', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'block' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        { blankLine: 'always', prev: ['case', 'default'], next: '*' }
    ],
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    '@typescript-eslint/no-explicit-any': 0,
    'space-before-blocks': [2],
    'object-curly-spacing': [2, 'always'],
    'arrow-spacing': [2],
    'padded-blocks': [2, { "blocks": "never" }],
    'no-trailing-spaces': [2, { "ignoreComments": true }],
    'computed-property-spacing': [2],
    'comma-style': [2],
    'comma-spacing': [2],
    'func-call-spacing': [2],
    'key-spacing': [2],
    'object-curly-newline': [2, {
        "ObjectExpression": "always",
        "ObjectPattern": "never",
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    'ember-suave/lines-between-object-properties': ['error', 'always', { exceptAfterSingleLine: true }],
  }
}
