var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index-template.html',
      inject: 'body'
    })
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint',
      include: path.join(__dirname, 'src')
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
      include: path.join(__dirname, 'src/styles')
    },
    {
      test: /\.ttf$/,
      loader: 'url?limit=100000',
      include: path.join(__dirname, 'src/assets/fonts')
    },
    {
      test: /\.png$/,
      loader: 'file?name=img/[hash:7].[ext]',
      include: path.join(__dirname, 'src/assets')
    }]
  }
};
