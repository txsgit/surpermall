<template>
   <div class="wrapper" ref="wrapper">
   <div class="content">
     <ul>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
       <li>列表</li>
     </ul>
   </div>

   </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'',
  data(){
   return {
     scroll:{}
   }
  },
  mounted:function(){
       console.log(this.$refs.wrapper);
       
        // this.scroll=new BScroll(document.querySelector('.wrapper'),{})
        //使用组件上ref标签，在js中使用 this.$refs
        this.scroll=new BScroll(this.$refs.wrapper,{
          probeType:3,//启动实时监听
          pullUpLoad:true //启动上啦加载更多
        })

        //监听滚动位置
       this.scroll.on('scroll',function(position){
        //  console.log(position);
         
       })

        //监听上啦加载更多
       this.scroll.on('pullingUp',function(){
         console.log("上啦加载更多");
         this.finishPullUp()
       })
  }
}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: red;
 

  /* overflow: hidden; */
  /* 自动滚动 */
  overflow-y: scroll;
}
</style>
