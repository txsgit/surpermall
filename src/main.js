import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
