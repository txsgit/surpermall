import Vue from 'vue'
import Router from 'vue-router'

//安装路由
Vue.use(Router)

//懒加载路由组件
var Home=()=> import ('views/home/home')
var Category=()=> import ('views/category/category')
var Cart=()=> import ('views/cart/cart')
var Profile=()=> import ('views/profile/profile')

//定义路由规则,并在实例中使用
var routes=[
    {
        path:'',
        redirect:'/home'  //实现自动重定向，项目打开展示home组件
    },
    {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/cart',
        component:Cart
      },
      {
        path:'/profile',
        component:Profile
      }
]

//创建路由实例 使用history模式
var router =new Router({
    routes,
    mode:'history'
})

export default router