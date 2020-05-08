<template>
   <div class="cart">
     <!-- 顶部导航 -->
       <navbar class="car-nav"><div slot="center">购物车({{carlistlength}})</div></navbar>
       <cartlist class="carlisst"/>
       <butombar/>
   </div>
</template>

<script>
//navbar car顶部导航
import navbar from 'components/common/navbar/navbar'
//使用vuex的getters辅助，直接使用store中定义的getters方法
import {mapGetters} from 'vuex'
//购物车列表
import cartlist from './childComps/cartlist'
import butombar from './childComps/butombar'
export default {
  name:'car',
  components:{
    navbar,
    cartlist,
    butombar
  },
  data(){
   return {

   }
  },
  computed:{
    //计算属性调用store中的gettters方法
     carlength:function(){
       return this.$store.getters.carlistlength
     },
     //计算属性直接使用store中的gettters
    //  ...mapGetters({lengths:'carlistlength'})
    ...mapGetters(['carlistlength'])

  }
}
</script>

<style scoped>
.cart{
  
   height: 100vh;
 
}
.car-nav{
  background-color: var(--color-tint);
  /* 颜色 */
  color: #ffff;
  /* 字体加粗 */
  font-weight: 700;
}
 .carlisst {
    position: absolute;
    top: 44px;
    bottom: 93px;
   width: 100%;
   overflow: hidden; 
  }
</style>
