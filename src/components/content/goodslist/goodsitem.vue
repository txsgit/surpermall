<template>
   <div class="goods-item" @click="detail(goods.id)">
     <!--@load监听图片加载完成-->
     <!-- <img :src="goods.image" @load="imgload"/> -->
     <!-- 改成图片懒加载 -->
     <img v-lazy="goods.image" @load="imgload"/>
     <div class="goods-info">
         <p>{{goods.title}}</p>
         <span class="price">{{goods.price}}</span>
         <span class="collect">{{goods.collect}}</span>
     </div>
     
   </div>
</template>

<script>
export default {
  name:'goodsitem',
  props:{
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  data(){
   return {

   }
  },
  methods:{
    imgload:function(){
      //监听图片加载
      // console.log("image ...");
      //图片加载成功一次就发送一次
      this.$bus.$emit("imgload")
      
    },
    detail:function(iid){
      //点击跳转详情
      console.log(iid);
      
      this.$router.push("/detail/"+iid)
      
    }
  }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>

