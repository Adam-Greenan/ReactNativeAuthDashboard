module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/test",
    ".templates",
    "<rootDir>/test/mocks",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-navigation|@react-native-*|@react-navigation|@sentry))",
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/test/mocks/react-native-svg.ts",
  },
  modulePaths: ["<rootDir>", "./src"],
  moduleDirectories: ["node_modules"],
  setupFiles: [
    "./test/jest-setup.ts",
    "./test/mock.setup.ts",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  snapshotResolver: "./test/snapshot.resolver.ts",
  coverageReporters: ["text"],
  coveragePathIgnorePatterns: ["<rootDir>/test"],
};
