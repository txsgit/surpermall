<template>
   <div class="tabcontrol">
      <div v-for="(item,index) in titles"
       :key="index" 
       class="tab-item" :class="{active:currentIndex==index}"
       @click="tabclick(index)">
         <span>{{item}}</span>
      </div>
   </div>
</template>

<script>
export default {
  name:'tabcntrol',
  props:{
      titles:{
          type:Array,
          default:function(){
              return []
          }
      }
  },
  data(){
   return {
    currentIndex:0
   }
  },
  methods:{
      tabclick:function(index){
         this.currentIndex=index
         //向父组件home传递点击事件
         this.$emit("tabclick",index)
      }
  }
}
</script>

<style scoped>
.tabcontrol{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
}

.tab-item{
    flex: 1;
}
.tab-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
     /* color:red */
   
}
.active span{
 border-bottom: 3px solid var(--color-high-text);
}
</style>
