module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 0,
  },
};
