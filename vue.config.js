// vue.config.js
module.exports = {
    configureWebpack: {
   //别名配置
       resolve:{
           alias:{
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views'
           }
       }
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8081',
            // ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''//重写接口,后面可以使重写的新路径，一般不做更改
          }
          }
        }
      }
  }