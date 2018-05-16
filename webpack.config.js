const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './fe/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'es2015',
          ],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      'fe/src/index.html',
    ]),
    new ExtractTextPlugin('css/styles.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
