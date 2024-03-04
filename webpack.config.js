
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    watch: true,
    entry: {
      index: "./src/index.js",
    },
    devtool: "inline-source-map", 
    devServer: {
      static: "./", //changed from dist as dist files were moved to the root directory
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Production",
        template: "./src/index2.html",
      }),
    ],
    output: {
      filename: "[name].bundle.js", 
      path: path.resolve(__dirname),
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
  