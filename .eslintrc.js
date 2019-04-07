module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  settings: {
    'import/core-modules': ['gatsby'],
  },
  globals: {
    graphql: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-danger': 'off',
  },
}
