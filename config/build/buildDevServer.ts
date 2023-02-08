import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(optins: BuildOptions): DevServerConfiguration {
  return {
    port: optins.port,
    open: true,
    historyApiFallback: true,
  };
}
