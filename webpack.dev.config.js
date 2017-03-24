'use strict';
const webpack = require('webpack');
const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3001;
const ROOT = './app/src';

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?http://localhost:${PORT}`,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    resolve(ROOT, 'index')
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
      test: /favicon.ico$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.(jpg|gif|png|svg|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=media/[name].[ext]'
    }]
  },
  resolve: {
    modules: [
      resolve(ROOT),
      resolve('./node_modules')
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: PORT,
    contentBase: ROOT,
    stats: {
      colors: true
    }
  }
};

process.noDeprecation = true;