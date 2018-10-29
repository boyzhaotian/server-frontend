// // vue.config.js 配置说明
// // 这里只列一部分，具体配置惨考文档啊
module.exports = {
    devServer: {
        // port: 8080, // 端口号
//         host: '0.0.0.0',
//         https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            '/api/': {
                target: 'http://localhost:3000/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}