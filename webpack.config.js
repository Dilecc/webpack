const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { title } = require("process");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  mode: "development",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(xml)$/,
        use: ["xml-loader"],
      },
      {
        test: /\.(csv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
