'use strict';
const express =  require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./config.json');

const app = express();
const port = config.port.server;
const devPort = config.port.dev;
const isDev = process.env.NODE_ENV === 'development';

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// print the request log on console
app.use(morgan('dev'));

// define root path
global.ROOT = __dirname;

if(isDev) {
  // dev-server config
  const Webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('./webpack.dev.config');
  const compiler = Webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);

  // dev-server open
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

// server-open
app.use('/', express.static(`${__dirname}/app/${isDev ? 'src' : 'dist'}`));
app.listen(port, () => {
  console.log('Express listening on port', port);
});

// server router
app.use('/api', require('./routes/api'));

// client router
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/app/${isDev ? 'src' : 'dist'}/`);
});