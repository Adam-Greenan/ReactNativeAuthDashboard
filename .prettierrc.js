module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "auto",
  overrides: [
    {
      files: ".prettierrc.js",
      options: { parser: "babel" },
    },
  ],
};
