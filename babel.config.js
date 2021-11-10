module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],

    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
};

// "plugins": [
//   ["babel-plugin-root-import", {
//   "rootPathPrefix": "~",
//   "rootPathSuffix": "src"
// }]
// ]
