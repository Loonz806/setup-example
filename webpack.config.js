const path = require("path");
// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    open: true,
    // contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  builtins: {
    html: [
      {
        template: "./src/index.html",
        filename: "index.html",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: "jsx",
      },
      {
        test: /\.ts$/,
        type: "tsx",
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ["sass-loader"],
        type: "css",
      },
    ],
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   template: "src/index.html",
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(),
  ],
};
