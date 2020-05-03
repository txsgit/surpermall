<template>
<div class="wrapper" ref="wrapper">
   <div class="content">
      <slot></slot>
   </div>
</div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  name:'scroll',
  props:{
      //定义是否启动监听属性，默认不起用，在需要监听的页面启动
     probetype:{
        type:Number,
        dafault:function(){
           return 0
        }
     },
     //定义上拉加载更多。默认不启用，由需要的父组件启用
     pullUpLoad:{
       type:Boolean,
       default:function(){
          return false
       }
     }
  },
  data(){
   return {
      scroll:null

     
   }
  },
  mounted:function(){
     //如果 =>函数找的this是vue
     var that=this;
     //在组件渲染结束穿件滚动实例
     this.scroll=new BScroll(this.$refs.wrapper,{
          probeType:this.probetype, //启动实时监听
          pullUpLoad:this.pullUpLoad,
          click:true  //使得滚动条内容中的click事件起作用
     })

       //监听滚动位置 ，先启用监听
       this.scroll.on('scroll',function(position){
         //  console.log(position);
          //将监听的位置传到父组件使用
         //  this.position=position;
          //传递方法到父组件
         //  console.log(that);
          //this要改成this
         
          
           that.$emit("scroll",position);
         // that.position=position
         
       })

       //监听上拉加载更多，开启上拉加载更多
        this.scroll.on('pullingUp',()=>{
            
          //this要改成this
           this.$emit("pullingUp");
         
         
       })

  },
  methods:{
     //回到顶部方法
     //time=300是ES6语法，默认300
     scrollto:function(x,y,time=300){
        //回到顶部 x=0 y=0 time回到顶部事件毫秒
      //   console.log(this.scroll);
        //scrollTo回到顶部
         this.scroll.scrollTo(x,y,time)
     },
     finishPullUp:function(){
        //上拉加载更多多次加载
        this.scroll.finishPullUp();
        
     },
      refresh:function(){
        //scroll实例刷新
      //   console.log("scroll refresh");
        
        this.scroll.refresh();
        
     }
    
    
  }
}
</script>

<style scoped>

</style>
