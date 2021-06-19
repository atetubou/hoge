// https://webpack.js.org/configuration/configuration-languages/#typescript

import * as path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import * as HtmlWebpackPlugin from "html-webpack-plugin";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-474628163
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",

  // https://webpack.js.org/configuration/dev-server
  devServer: {
    index: "index.html",
    writeToDisk: true,
    open: true,
    proxy: {
      "/api": "http://localhost:8081",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

export default config;
