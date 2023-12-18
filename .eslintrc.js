module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-native/no-inline-styles": "off",
    "react-native/no-unused-styles": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["src/graphql/**", "src/API.ts"],
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "eslint-comments/no-unused-disable": "off",
      },
    },
  ],

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
