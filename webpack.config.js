
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    watch: true,
    entry: {
      index: "./src/index.js",
    },
    devtool: "inline-source-map", 
    devServer: {
      static: "./dist", 
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Development",
        template: "./src/index2.html",
      }),
    ],
    output: {
      filename: "[name].bundle.js", 
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    optimization: {
      runtimeChunk: "single",
    },
  };
  