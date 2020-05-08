<template>
<div>
     <navbar>
         <div slot="left" class="back" @click="back"> 
             <img src="~assets/img/common/back.svg"/>
         </div>
         <div slot="center" class="titles">
             <div v-for="(item,index) in titles" 
             :key="index" 
             :class="{active:index==currentindex}"  
             class="title-item" 
             @click="titleclick(index)">{{item}}</div>
         </div>
     </navbar>
</div>
</template>

<script>
//导入导航模板
import navbar from 'components/common/navbar/navbar'
export default {
  name:'detailnavbar',
  data(){
   return {
     titles:["商品","参数","评论","推荐"],
     currentindex:0
   }
  },
   components:{
      navbar
  },
  methods:{
      titleclick:function(index){
          //点击切换颜色选中
          this.currentindex=index
          //点击发送监听方法，滚动到指定位置
          this.$emit("titleclick",index)
      },
      back:function(){
          //返回上一页
        //   this.$router.go(-1)
        this.$router.back()
      }
  }
}
</script>

<style scoped>
.titles{
    /* 元素均等分 */
    display: flex;  
    font-size: 13px;
}
.title-item{
    flex: 1;
}

.active{
    color: var(--color-high-text);
}

.back img{
    margin-top: 10px;
}

</style>
