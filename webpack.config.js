const webpack = require("webpack")
const HWP = require("html-webpack-plugin")
const path = require("path")
const Ext = require("extract-text-webpack-plugin")

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                loader:Ext.extract("css-loader")
            },
            {
                test:/\.less$/,
                loader:Ext.extract("css-loader!less-loader")
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=1024&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React  : "react"
        }),
        new HWP({ //自动生成index.html编译后的文件
            template : "index.html", //需要被读取的文件名及路径
            filename : "index.html", //输出后的文件名及路径(以dist为根路径输出)
            inject : true// 是否自动添加引入脚本标签（script link 等等）
        }),
        new Ext("app.css")
    ],
    devServer : {
        contentBase : path.join(__dirname,"dist"),
        port : 3000,
        inline : true,
        publicPath : "/",//服务器配置，让浏览器的path发生变化时，浏览器不会进行页面跳转
        compress : true,
        historyApiFallback : true,
        disableHostCheck : true
    }
}