module.exports = {
  mode: 'development',
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    'main/main': './src/js/main/main.js',
    'renderer/app': './src/js/renderer/index.js'  
  },
  output: {
    filename: './[name].js'
  },
  devtool: 'source-map'
};