import Vue from 'vue'
import App from './App.vue'
import router from './router'

// FastClick 解决手机浏览器点击事件时因缩放效果产生的300ms的延迟
//原理: 在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，
// 并把浏览器在300ms之后真正的click事件阻止掉
import FastClick from 'fastclick'

FastClick.attach(document.body);

//图片懒加载插件
import VueLazyload from 'vue-lazyload'
//使用插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  //图片正在加载的时候显示的加载动图
  loading: require('./assets/img/common/lazyload.gif'),
  error: require('./assets/img/common/default.png')

});
//然后将页面 :src改成v-lazy 

//导入封装的插件
import toast from 'components/common/toast/index'
//安装封装的插件
Vue.use(toast)

//导入vuex
import store from './store'

Vue.config.productionTip = false

//定义一个vue实例的数据总线
Vue.prototype.$bus=new Vue()


new Vue({
  router,  //向vue组件注册属性router，在所有vue组件中可以使用this.$router访问
  store,
  render: h => h(App)
 
}).$mount('#app')
