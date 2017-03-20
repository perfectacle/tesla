'use strict';
const webpack = require('webpack');
const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {port} = require('./config.json');
const ROOT = './app/src';

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?http://localhost:${port.dev}`,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    resolve(ROOT, 'index-dev')
    // the entry point of our app
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new HtmlWebpackPlugin({
      template: './app/src/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?sourceMap',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: ['last 2 versions', '> 10%', 'ie 9']
              })
            ]
          }
        }
      ]
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: ['last 2 versions', '> 10%', 'ie 9']
              })
            ]
          }
        }
      ]
    }, {
      test: /\.html/,
      use: 'raw-loader'
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }, {
      test: /\.(jp(e)g|gif|png)?$/,
      use: 'file-loader?name=img/[name].[ext]'
    }]
  },
  resolve: {
    modules: [
      resolve('./app/src'),
      resolve('./node_modules')
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: port.dev,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    contentBase: ROOT,
    proxy: {
      '/api/**': 'http://localhost:' + port.server,
    },
    stats: {
      colors: true
    }
  }
};

process.noDeprecation = true;