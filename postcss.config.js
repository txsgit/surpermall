// 将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.

module.exports = {
    plugins: {
     
      'postcss-px-to-viewport': {
        viewportWidth: 375,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是根据iphone5宽度375
        viewportHeight: 667,    // 视窗的高度，根据750设备的宽度来指定，一般是根据iphone5高度1334，也可以不配置
        unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: [],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false,       // 允许在媒体查询中转换`px`
        exclude: /(\/|\\)(node_modules)(\/|\\)/     //忽略文件文件或文件夹下的样式
      }
    }
  }