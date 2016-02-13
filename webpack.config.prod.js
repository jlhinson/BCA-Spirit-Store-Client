var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: './dist',
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
      include: /src/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: /src/
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass'),
      include: /src/
    },
    {
      test: /\.(ttf|eot)$/,
      loader: 'url?limit=200000',
      include: /(src|node_modules\/font-awesome)/
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?.+)$/,
      loader: 'url?limit=200000',
      include: /node_modules\/font-awesome/
    },
    {
      test: /\.(png|ico)$/,
      loader: 'file?name=img/[name].[ext]',
      include: /src/
    }]
  }
};
