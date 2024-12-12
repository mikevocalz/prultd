module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
          'react-compiler': {
            // Passed directly to the React Compiler Babel plugin.
            //compilationMode: 'strict',
            //panicThreshold: 'all_errors',
          },
        },
      ],
      'nativewind/babel',
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'solito/image': 'solito/image/expo',
          },
        },
      ],
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
    ],
  }
}
