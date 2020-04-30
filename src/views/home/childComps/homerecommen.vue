<template>
   <div class="recommend">
     <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
         <img :src="item.image"/>
         <div>{{item.title}}</div>
         </a>
     </div>
   </div>
</template>

<script>
export default {
  name:'homerecommen',
  //获取父组件数据
  props:{
      recommends:{
          type:Array,
          default:function(){
              return []
          }
      }

  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>
