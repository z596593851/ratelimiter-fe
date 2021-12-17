
module.exports = {
    publicPath:'./',
    // publicPath: process.env.NODE_ENV === 'production' ? '/yayi/' : '/',
    assetsDir:'static',
    devServer: {
        port: 8010,     // 端口
        proxy:{
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
        overlay: {
            warning: false,
            errors: false
        }
    },
    lintOnSave: false,// 取消 eslint 验证

    // chainWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 清除css，js版本号
    //         config.output.filename('js/[name].js').end();
    //         config.output.chunkFilename('js/[name].js').end();
    //         // 为生产环境修改配置...
    //         config.plugin('extract-css').tap(args => [{
    //             filename: `css/[name].css`,
    //             chunkFilename: `css/[name].css`
    //         }])
    //     }
    // },
};