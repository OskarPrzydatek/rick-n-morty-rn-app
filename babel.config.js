module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.ios.tsx',
          '.android.js',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@stacks': './src/stacks',
        },
      },
    ],
  ],
};
