import path from "path";
import { BuildPath } from "../build/types/config";
import { Configuration } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPath = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", "tsx");
  config.module.rules.push(buildCssLoader(true));

  return config;
};
