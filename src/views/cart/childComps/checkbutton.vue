<template>
<div>
      <div class="icon-selector" :class="{'selector-active': ischecked}" @click="checkedclick" >
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name:'checkbutton',
  props:{
     //控制选中样式属性
     ischecked:{
         type:Boolean,
         default:function(){
             return false
         }
     }
     
  },
  methods:{
      checkedclick:function(){
        //   this.checked=!this.checked
        
        this.$emit("checkedclick")
        // console.log(this.ischecked);
        
      }
  }
}
</script>

<style scoped>
.icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
