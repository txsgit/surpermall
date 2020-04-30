<template>
  <div id="home">
       <navbar class="home-nav"><div slot="center">购物节</div></navbar>
       <!-- 给子组件属性赋值 -->
      <homeswiper :banners="banners"></homeswiper>
      <!-- recommend组件 -->
      <reccommends :recommends="recommends"></reccommends>
  </div>
</template>

<script>

import navbar from 'components/common/navbar/navbar'
 import {getHomeList} from 'network/home'
import homeswiper from './childComps/homeswiper'
import reccommends from './childComps/homerecommen'

export default {
  name:'',
  data(){
   return {
      banners:[],
      recommends:[]
   }
  },
  components:{
    navbar,
    homeswiper,
    reccommends
  },
  // 组件创建的时候执行
  created:function(){
     getHomeList().then(res=>{
       console.log(res.recommends);
       
         this.banners=res.banners
         this.recommends=res.recommends
     })
  }
 
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffff;
}
</style>
