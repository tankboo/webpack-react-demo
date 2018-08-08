const path = require('path')
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.dev.js");
const options = {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    compress: true, // 一切服务都启用 gzip 压缩
    host: 'localhost',
    historyApiFallback: true, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    proxy: {
        '/api': 'http://localhost:3000'  //代理
    }
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', ()=>{
    console.log("dev server listening on port 5000")
})

