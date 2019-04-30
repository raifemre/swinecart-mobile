module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    // ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ],
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
};
