const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/data_add_serial_number/'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = '菜單新增 serial_number'
        return args
      })
    config.plugin('polyfills').use(NodePolyfillPlugin)
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    proxy: {}
  }
})
