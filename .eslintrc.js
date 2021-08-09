module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  extends: ['plugin:react/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    /* Sort inputs & exports. */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    react: { version: 'detect' },
  },
}
