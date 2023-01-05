const Timestamp = new Date().getTime()
module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '梧桐鸿鹄小组作业3' //这个是网站标题
            return args
        })
    },
    css: {
        loaderOptions: {
            // 你的基础样式 因为没有我就注释了
            // sass: {
            //     data: `
            // 		@import "@/assets/style/base.scss";
            // 	`,
            // },

            //这只主题样式，修改此文件后需要重新启动，
            less: {
                lessOptions: {
                    modifyVars: {
                      //这是配置css主题色
                      'primary-color': '#007AFF', 
                    },
                    javascriptEnabled: true,
                },
            },
        },
        // 每次打包后生成的css携带时间戳
        extract: {
            filename: `css/[name].${Timestamp}.css`,
            chunkFilename: `css/[name].${Timestamp}.css`,
        },
    },
    productionSourceMap: false,
    //打包后相对目录
    publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
    configureWebpack: {
        //每次打包后生成的js携带时间戳
        output: {
            filename: `[name].${Timestamp}.js`,
            chunkFilename: `[name].${Timestamp}.js`,
        },
    },
}