var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: '/built',
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
      include: /src/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: /src/
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
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
