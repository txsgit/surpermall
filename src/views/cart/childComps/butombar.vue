<template>
 <div class="bottom-menu">
    <checkbutton class="select-all" @checkedclick="allselect"  :ischecked="allchecked"></checkbutton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalprice}}</span>
    <span class="buy-product">去计算({{checkcount}})</span>
  </div>
</template>

<script>
import checkbutton from './checkbutton'
export default {
  name:'butombar',
    components:{
      checkbutton
  },
  computed:{
      totalprice:function(){
        
        // console.log(this.$store.getters.carlist);
        //过滤被选中的checked=true
       var tatolprice=this.$store.getters.carlist.filter(item =>{
           return item.checked==true
       }).reduce(function(prevalue,n){
           //然后汇总总数,并保留2位小数
   return prevalue+n.price*n.count;
     },0).toFixed(2)
        return tatolprice
      },
      checkcount:function(){
          return this.$store.getters.checkedcarlength
      },
      allchecked:function(){
          //列表中checked有false不选中的返回true
          //当列表为空也false
          if(this.$store.getters.carlist.length==0)
          {
           return false
          }
          
          return this.$store.getters.carlist.filter(item =>{
           return item.checked==false
       }).length >0?false:true
      }
  },
  methods:{
      allselect:function(){
          //全选按钮点击
          //其中有全选和不全选的
          if(this.allchecked)//全选中
          {
            //点击全选按钮改成不选中
            this.$store.getters.carlist.map(item=>{
             return item.checked=false
          })
          }else{
              //不全选中
               //点击全选按钮改成选中
            this.$store.getters.carlist.map(item=>{
             return item.checked=true
          })
          }
         
          
      }
  }
}
</script>

<style scoped>
.bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>

