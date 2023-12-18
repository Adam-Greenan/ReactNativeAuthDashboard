module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: true,
        regenerator: false,
      },
    ],
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.tsx",
          ".android.tsx",
          ".js",
          ".ts",
          ".tsx",
          ".json",
        ],
        alias: {
          src: "./src",
          api: "./src/api",
          assets: "./src/assets",
          adapters: "./src/adapters",
          commands: "./src/commands",
          components: "./src/components",
          config: "./src/config",
          hooks: "./src/hooks",
          images: "./src/images",
          models: "./src/models",
          mockedAPI: "./src/mockedAPI",
          navigation: "./src/navigation",
          screens: "./src/screens",
          services: "./src/services",
          utils: "./src/utils",
          types: ["./src/types"],
          test: ["./test"],
          storybook: ["./storybook"],
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
  env: {
    test: {
      plugins: ["react-native-config-node/transform"],
    },
  },
};
