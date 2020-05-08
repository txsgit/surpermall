<template>
<div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <grid-view>
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
 import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from 'components/content/goodslist/goodsitem'
  
export default {
  name:'detailrecommendinfo',
  props:{
      recommendList:{
          type:Array,
          default:function(){
              return []
          }
      }
  },
    components: {
		  GridView,
      GoodsListItem
    },
  data(){
   return {

   }
  }
}
</script>
 .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
<style scoped>

</style>
