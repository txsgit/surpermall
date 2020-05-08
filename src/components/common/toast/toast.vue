<template>
<div class="toast" v-show="isshow">
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
  name:'toast',
  data(){
   return {
     message:'ssss',
     isshow:false
   }
  },
  methods:{
      show:function(message='这里是文字',duration=2000){
          this.message=message;
          this.isshow=true;
          //延迟消失
          var that=this
          setTimeout(function(){
            //   console.log(that);
              
                that.message='';
                that.isshow=false;
          },duration)
      }
  }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    z-index: 999;

    color: #fff;
    background-color: rgba(0, 0, 0, .75);
}
</style>
