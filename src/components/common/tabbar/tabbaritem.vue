<template>
      <div class="tab-bar-item" @click="changepath()">
        <!-- 设置判断是否改变图标颜色 -->
        <div v-if="!isActive">
        <slot name="item-icon"></slot>
        </div>
         <div v-else>
        <slot name="item-icon-active"></slot>
         </div>
         <div :class="{isActive:isActive}">
        <slot name="item-text"></slot>
       </div>
        </div>
</template>

<script>


export default {
  name: 'tabbaritem',
  data:function (){
    return {
      // isActive:true
    }
  },
  //动态改变属性
  computed:{
      isActive:function(){
        //使用计算属性决定isActive是否是true,
        //当用户点击路由路径时和子组件获取父组件点击路径相同为true
        return this.$route.path.indexOf(this.path) !=-1
      }
  },
  //子组件获取父组件点击的是哪个路由，并传递参数
  props:{
    path:{
      type:String
    }
  },
  methods:{
    changepath:function()
    {
      this.$router.replace(this.path)
    }
  }
 
}
</script>
<style >

.tab-bar-item{
  flex: 1; 
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
 height: 28px;
 width: 28px;
 margin-top: 3px;
 vertical-align: middle;
 /* margin-bottom: 2px; */
}
.isActive{
  color: red;
}
</style>