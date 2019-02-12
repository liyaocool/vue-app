const path = require('path')

//添加全局变量文件
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/index.styl'),
            ],
        })
}

module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            //生产环境的配置
        } else {
            //开发环境的配置
        }
    },
}