<template>
<div>
 <Swiper>
         <SwiperItem v-for="(item,index) in banners" :key="index">
           <a :href="item.link">
             <img :src="item.image"/>
           </a>
         </SwiperItem>
       </Swiper>
</div>
</template>

<script>
 import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name:'homeswiper',
  props:{
      banners:{
          type:Array,
          default:function(){ //数组类型默认值是工厂方法返回
              return []
          }
      }
  },
  data(){
   return {
    
   }
  },
   components:{
    Swiper,
    SwiperItem
  },
}
</script>

<style scoped>

</style>
