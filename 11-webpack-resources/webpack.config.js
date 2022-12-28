const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
    new HtmlWebpackPlugin({
      title: "Recursos do Webpack",
    }),
  ],
  optimization: {
    runtimeChunk: true,
  },
};
