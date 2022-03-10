// 生产环境

//可以实现每次打包前先处理掉之前的 dist 目录
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const {
  merge
} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
  ]
})
