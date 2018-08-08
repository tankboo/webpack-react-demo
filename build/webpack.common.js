const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "js/[name].[hash:6].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"), //根目录
      verbose: true //开启在控制台输出信息
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new ExtractTextPlugin("css/[name].[hash:6].css")
  ]
};
