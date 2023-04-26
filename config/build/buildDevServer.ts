import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function buildDevServer (optins: BuildOptions): DevServerConfiguration {
  return {
    port: optins.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
