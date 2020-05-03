import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//定义一个vue实例的数据总线
Vue.prototype.$bus=new Vue()


new Vue({
  router,  //向vue组件注册属性router，在所有vue组件中可以使用this.$router访问
  render: h => h(App)
 
}).$mount('#app')
