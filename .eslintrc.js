module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react-native/no-inline-styles": "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
  env: {
    jasmine: true,
    jest: true,
    "jest/globals": true,
  },
};
