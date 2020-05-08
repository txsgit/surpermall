<template>
 <scroll class="content">
    <div class="cartlist">
       <cartlistitem v-for="(item,index) in carlist" :key="index" :itemInfo="item"/>
    </div>
</scroll>
</template>

<script>
//获取vuex中的cartlist
import {mapGetters} from 'vuex'

//滚动插件
import scroll from 'components/common/scroll/scroll'

import cartlistitem from './cartlistitem'

export default {
  name:'cartlist',
  components:{
      scroll,
      cartlistitem
  },
  data(){
   return {

   }
  },
  computed:{
      ...mapGetters(['carlist'])
  }
}
</script>

<style scoped>

</style>
