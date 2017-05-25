/**
 * Created by work on 17/5/18.
 */
var path = require('path');
var webpack = require('webpack');
// var HtmlWebPackPlugin = require('html-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      // 'babel-polyfill',
      // 'whatwg-fetch',
      './src/index.js'
    ]
  },
  debug: true,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    // publicPath: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'react-hot-loader/babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};