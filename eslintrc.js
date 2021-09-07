module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es6: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
