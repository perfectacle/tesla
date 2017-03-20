'use strict';
const webpack = require('webpack');
const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.json');
const ROOT = './app/src';
const DIST = './app/dist';

module.exports = {
  entry: {
    app: ROOT + '/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: DIST,
    publicPath: '/'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // 터미널 창에 출력되는 게 보기 귀찮아서 추가.
        unused: true // tree shaking
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // 아래 부분이 핵심
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
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
      loaders: ['style-loader', 'css-loader',
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
      loaders: ['style-loader', 'css-loader', 'sass-loader',
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
      resolve('./app'),
      resolve('./node_modules')
    ]
  },
};

process.noDeprecation = true;