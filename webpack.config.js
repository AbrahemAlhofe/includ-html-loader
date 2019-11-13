const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/test.js',
  module: {
    rules : [
      { test : /\.(html)$/, use: ['html-loader', './index.js'] }
    ]
  },
  plugins : [ new HtmlWebpackPlugin({ template : 'src/test.html'}) ]
}
