module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
  },
};