var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/pages/boys/index.html'),//生成出来的文件和路径，前面会加上output的path
      template: './src/pages/boys/index.html',//指定HTML的模板路径
      inject: true,//是否将js等注入页面，以及指定注入的位置，head或body
      chunks:['boys/index']//需要引入的chunk（模块资源），不配置就会引入所有页面的资源
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/pages/goods/index.html'),//指定生成的HTML的存放路径
      template: './src/pages/goods/index.html',//指定HTML的模板路径
      inject: true,//是否将js等注入页面，以及指定注入的位置，head或body
      chunks:['goods/index']//需要引入的chunk（模块资源），不配置就会引入所有页面的资源
    }),












    new FriendlyErrorsPlugin()
  ]
})
