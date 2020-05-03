<template>
   <div class="goods">
       <goodsitem v-for="(item,index) in goodslist" :key="index" :goods="item"/>
   </div>
</template>

<script>
import goodsitem from './goodsitem'
export default {
  name:'goods',
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      goodsitem
  },
  data(){
   return {

   }
  }
}
</script>


<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
