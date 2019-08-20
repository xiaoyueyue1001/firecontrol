module.exports = {
    devServer: {
        open: true,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        proxy: {
            '/firecontrol': {//代理api
                target: "http://localhost:8080",//服务器api地址
                changeOrigin: true,//是否跨域
                ws: true, // proxy websockets
                pathRewrite: {//重写路径
                    "^/firecontrol": "/"
                }
            }
        }
    }
}