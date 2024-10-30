//bundle all of our javascript code and makes a bundle and server one file into the browser

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", //entry file
  output: {  //output file
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: { 
    minimize: true, //making our javascript small to make it faster
  },
  plugins: [ // use for optimization
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};