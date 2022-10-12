module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx"
        ],
        alias: {
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@screen": "./src/screen",
          "@theme": "./src/theme"
        }
      }
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],     //removing consoles.log from app during release (production) versions
    },
  },
};
