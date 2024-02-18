import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  ProgressPlugin,
  type WebpackPluginInstance,
  HotModuleReplacementPlugin,
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { type BuildOptions } from "./types/config";

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
