<template>
    <div class="navbar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
     
    </div>
</template>

<script>
export default {
  name:'navbar',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
  .navbar{
      display: flex;
      height: 44px;
      line-height: 44px;
      text-align: center;
     /**阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }

  .left .right{
      width: 46px;
  }
  .center{
      flex: 1;
  }

</style>
