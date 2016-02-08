var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index-template.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('style.css')
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
      loader: ExtractTextPlugin.extract('css!sass'),
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
