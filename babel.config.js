module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    ['module-resolver', {
      'root': ['./src'],
      'alias': {
        'assets': './src/assets',
        'constants': './src/constants',
        'shared': './src/shared',
        'services': './src/services',
        'utils': './src/utils',
        'navigation': './src/navigation',
        'screens': './src/screens',
        'actions': './src/redux/actions',
      }
    }]
  ],
};
