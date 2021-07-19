const {merge} = require('webpack-merge')
const webpack = require("webpack")
const common = require('./webpack.common.js')

const TestPlugin = require("./plugin/index")
module.exports =merge(common,{
    mode:"development",
    devtool: 'cheap-module-source-map',
    plugins: [
        new TestPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换插件
    ]
})
