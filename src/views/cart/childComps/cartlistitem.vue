<template>
<div id="shop-item">
    <div class="item-selector">
        <!-- 从数据对象中获取是否选中属性 -->
      <checkbutton :ischecked="itemInfo.checked" @checkedclick="checkedclick" ></checkbutton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
//导入checkbutton组件
import checkbutton from './checkbutton'
export default {
  name:'cartlistitem',
   props: {
      itemInfo: Object
    },
  data(){
   return {

   }
  },
  components:{
      checkbutton
  },
  methods:{
      checkedclick:function(){
         
          //改变当前item商品的选中状态
          this.itemInfo.checked=!this.itemInfo.checked
         
          
      }
  }
}
</script>

<style scoped>
#shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
