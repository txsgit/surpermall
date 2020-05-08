<template>

      <Swiper class="swrapper-detail">
         <SwiperItem v-for="(item,index) in topimges" :key="index">
           <a :href="item.link">
             <img :src="item" />
           </a>
         </SwiperItem>
       </Swiper>

    <!-- <Swiper class="swrapper-detail swiper"  :options="swiperOption">
         <SwiperSlide v-for="(item,index) in topimges" :key="index">
             <img :src="item" />
         </SwiperSlide>
         <div class="swiper-pagination" slot="pagination"></div>
       </Swiper> -->

</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
//   import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//   import 'swiper/css/swiper.css'

export default {
  name:'detailswraper',
  props:{
      topimges:{
          type:Array,
          default:function(){
              return []
          }

      }
  },
  data(){
   return {
    //   swiperOption: {
    //       pagination: {
    //         el: '.swiper-pagination'
    //       }
    //     }
   }
  },
  components:{
      Swiper,
      SwiperItem
    //  Swiper,
    //   SwiperSlide
  }
}
</script>

<style scoped>
.swrapper-detail{
    height: 300px;
}
</style>
