import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";
import { DEFAULT_MODE, DEFAULT_PORT } from "./config/build/consts";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || DEFAULT_MODE;
  const isDev = mode === DEFAULT_MODE;
  const port = env.port || DEFAULT_PORT;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
