const path = require('path'); // biblioteca do node.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.0'),
      PORT: JSON.stringify('8080'),
    }),
  ]
}