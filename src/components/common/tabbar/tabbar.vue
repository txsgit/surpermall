<template>
    <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'tabbar'
 
}
</script>

<style >

#tabbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /**阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}


</style>