const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "./src/assets/js/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "main.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ["es2015"]
      }
    }, {
      test: /\.html$/,
      loader: "raw-loader"
    }]
  },
  plugins: [
    new ExtractTextPlugin("../css/[name].css"),
    new CopyPlugin([
      { from: "src/html", to: "../" },
      { from: "src/assets/img", to: "../img" }
      // Any other files you'd like to copy from src to dist can be specified
      // here. :)
    ])
  ],
  postcss: [
    require('autoprefixer')({browsers: '> 1%'})
  ]
};
