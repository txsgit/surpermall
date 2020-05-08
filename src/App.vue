<template>
  <div id="app">
     <keep-alive exclude="detail" >
       <!--:key 页面跳转url不变只改参数时需要加上刷新页面  -->
     <router-view :key="$route.fullPath"/>
     </keep-alive>
     <maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/main-tabbar'

export default {
  name: 'App',
  components:{
    maintabbar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
