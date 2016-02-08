var koa = require('koa');
var serve = require('koa-static');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = koa();
var compiler = webpack(config);

app.use(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('koa-webpack-hot-middleware')(compiler));

app.use(serve('./src/'));

app.listen(3000);

console.log('Listening at http://localhost:3000');
