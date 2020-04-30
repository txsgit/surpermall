<template>
  <div>
       <tabbar>
       <!-- 点击item切换router组件显示 父组件如果传递参数直接卸载元素上不用绑定属性 -->
       <tabbaritem path='/home'>
       <!-- img src使用webpack配置路径前加 ~ 符合 否则不认识 -->
          <img slot="item-icon" src="~assets/img/tabbar/home2.png" />
           <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" />
        <div slot="item-text">首页</div>
       </tabbaritem>
       <tabbaritem path='/category'>
          <img slot="item-icon" src="~assets/img/tabbar/category2.png" />
          <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" />
        <div slot="item-text">分类</div>
       </tabbaritem>
       <tabbaritem path='/cart'>
          <img slot="item-icon" src="~assets/img/tabbar/cart2.png" />
          <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" />
        <div slot="item-text">购物车</div>
       </tabbaritem>
       <tabbaritem path='/profile'>
          <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" />
        <div slot="item-text">我的</div>
       </tabbaritem>
     </tabbar>
  </div>
</template>

<script>

 import tabbar from 'components/common/tabbar/tabbar'

import tabbaritem from 'components/common/tabbar/tabbaritem'

export default {
  name:'maintabbar',
  components:{
       tabbar,
      tabbaritem
  }
}
</script>

<style scoped>

</style>
