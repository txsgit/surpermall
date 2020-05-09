<template>

<div id="detail">
  
  <!-- 详情顶部导航 -->
    <detailnavbar class="detail-nav" @titleclick="titleclick" ref="detailnav"/>
    
    <scroll class="content" :probetype="3" ref="scroll"  @scroll="contentscroll">
      <!-- 详情轮播图 -->
       <detailswraper :topimges="topimages"/>
       <!-- 商品基本信息 -->
       <detailbase :goods="goods"/>
      
       <!-- 商品店铺信息 -->
        <detailshopinfo :shop="shop"/>
        <!-- 商品详细信息 -->
        <detailgoodinfo :detailinfo="detailinfo"/>
        <!-- 商品参数信息 -->
        <detailparamsinfo ref="params"  :paramInfo="goodsparaminfo"/>
        <!-- 商品评论信息 -->
        <detailcommentsinfo ref="comment" :commentInfo="commentInfo"/>
        <!-- 商品推荐 -->
        <detailrecommendinfo ref="recommend" :recommendList="recommendlist"/>
    </scroll>
   <!-- 底部工具栏 监听添加购物车-->
   <detailbottombar @addToCart="addToCart"/>
    <!-- 回到顶部 组件上监听事件必须使用.native-->
   <backtop @click.native="backtop" v-show="isshowtop"/>
</div>
</template>

<script>
import detailnavbar from './childComps/detailnavbar'
import detailswraper from './childComps/detailswraper'

import detailbase from './childComps/detailbase'
import detailshopinfo from './childComps/detailshopinfo'
import detailgoodinfo from './childComps/detailgoodinfo'
import detailparamsinfo from './childComps/detailparamsinfo'
import detailcommentsinfo  from './childComps/detailcommentsinfo'
import detailrecommendinfo  from './childComps/detailrecommendinfo'
import detailbottombar from './childComps/detailbottombar'
//防抖函数
import {debounce} from 'common/utils'

//滚动插件
import scroll from 'components/common/scroll/scroll'

import  {getdetail,Goods,Shop,GoodsParam,getrecommend} from 'network/detail'


//导入汇入js
import {backtopmixin} from 'common/mixin.js'

export default {
  name:'detail',
  data(){
   return {
     iid:'',
     topimages:[],
     goods:{},  //对象不能为空
     shop:{},
     detailinfo:{},
     goodsparaminfo:{},
     commentInfo:{},
     recommendlist:[],
     //定义标题滚动位置的y数组
     titletopY:[],   
    //定义获取offsettop防抖函数
    titleRedence:null,
    navcurrentindex:0,
    //是否显示回到顶部按钮
    // isshowtop:false

   }
  },
  mixins:[backtopmixin],
  components:{
      detailnavbar,
      detailswraper,
      detailbase,
      detailshopinfo,
      scroll,
      detailgoodinfo,
      detailparamsinfo,
      detailcommentsinfo,
      detailrecommendinfo,
      detailbottombar
      // backtop
  },
  created:function(){

   // 调用详情方法
   this.getdetail()

    //调用方法，获取推荐列表
     this.getrecommends()
  },
  mounted:function(){

    this.scrollrefresh=debounce(this.$refs.scroll.refresh,50)
    //定义获取各个元素的offfsetyop方法的防抖函数
    this.titleRedence=debounce(()=>{
      this.titletopY=[0]
      this.titletopY.push(this.$refs.params.$el.offsetTop)
       this.titletopY.push(this.$refs.comment.$el.offsetTop)
        this.titletopY.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.titletopY);
        
    },50)

     //监听详情推荐图片加载完发送方法
      this.$bus.$on('imgload',()=>{
        // console.log("imagload");
        
       this.scrollrefresh();
       this.titleRedence();

      })

  },
   destroyed:function(){
   //组件销毁，取消监听
   this.$bus.$off('imgload');
  },
  methods:{
    //添加购物车
    addToCart:function(){
      //将商品的部分信息添加到购物车
      //定义一个添加购物车的商品对象
      var product={}
      product.iid=this.iid
      product.img=this.topimages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.nowPrice
      // console.log(product);
      //向vuex添加购物车
      // console.log(this.$store);
      
      // this.$store.commit("addcar",product)
      // 异步调用vuex中的actions方法，用来调用mutations
      this.$store.dispatch("anyaddcars",product).then(res=>{
        //在这显示添加购物车成功
      
        
        //调用封装组件
        this.$toast.show(res,2000)
        
        
      })

    },
    //  backtop:function(){
    //   //点击回到顶部
    //   //this.$refs.scroll获取scroll组件对象，并调用组件方法scrollto
    //   //this.$refs在组件渲染完使用，目前只能在方法中使用
    //   // console.log(this.$refs.scroll);
      
    //   this.$refs.scroll.scrollto(0,0)
    // },
      //监听滚动位置
    contentscroll:function(position){

       //滚动计算是否显示回到顶部按钮
       this.listenbacktop(position)

      //当滚动到一个位置，改变顶部导航的选中效果
      var y=-position.y 
      //y值与this.titletopY数组中元素比较
      // y值在0 到 titletopY[1],之间index=0
      // y值在titletopY[1] 到 titletopY[2],之间index=1
      // y值在titletopY[2] 到 titletopY[3],之间index=2
      // y值大于 titletopY[3],之间index=3
      //遍历数组
      // for(var i in this.titletopY)
      // {
      //  //this.titletopY[i+1] 得到的值是undefined其中i+1是string类型
         
      //    if( i < this.titletopY.length-1 && this.titletopY[i] <= y < this.titletopY[i+1])
      //    {
      //        this.$refs.detailnav.currentindex=i;
      //        console.log(this.$refs.detailnav);
             
      //    }else if( this.titletopY[i] <= y)
      //    {
      //       this.$refs.detailnav.currentindex=i;
      //    }
        
      // }

      for(var i=0 ; i < this.titletopY.length; i++)
      {
            // console.log(typeof(i+1)); 这样得到的i是number类型
            // console.log(this.titletopY[i+1]);
            //this.navcurrentindex !==i条件，防止执行过于频繁
        // if(this.navcurrentindex !=i &&
        // ( (i < this.titletopY.length-1 && y>= this.titletopY[i] && y< this.titletopY[i+1])
        //  || (i==this.titletopY.length-1 && y >= this.titletopY[i])))
        //  {
        //      console.log(i);
        //      this.navcurrentindex=i;
        //      this.$refs.detailnav.currentindex=i;
        //     //  console.log(this.$refs.detailnav);
             
        //  }
      //if-else用法
      if(this.navcurrentindex !=i && y>=this.titletopY[i] && y<this.titletopY[i+1] )      
       {
        // console.log(i);
        // console.log(y);
         this.navcurrentindex=i;
          this.$refs.detailnav.currentindex=i;
       }else if(i==this.titletopY.length-1 && y>=this.titletopY[i])
       {
         //执行到最后一层
          this.$refs.detailnav.currentindex=i;
       }     
      }
    },
    titleclick:function(index){
       //监听点击,滚动到对应的元素，offsettop

       this.$refs.scroll.scrollto(0,-this.titletopY[index],200)
    },
    getdetail:function(){
        //组件创建时保存传入的iid
    this.iid=this.$route.params.iid
    //请求网络获取数据
    getdetail(this.iid).then(res =>{
      this.topimages=res.topImages
  
      var data=res.data;
      // console.log(data);
      
      //创建Goods对象并赋值
      // console.log(data.result);
      
      this.goods=new Goods(data.result.itemInfo,data.result.columns,data.result.shopInfo.services);
     
      //获取店铺详情
      this.shop=new Shop(data.result.shopInfo);
      //获取商品信息
      this.detailinfo=data.result.detailInfo

      //获取商品参数
      this.goodsparaminfo=new GoodsParam(data.result.itemParams.info,data.result.itemParams.rule);
       // 2.7.保存评论信息
      if (data.result.rate.list) {
        this.commentInfo = data.result.rate.list[0];
      }
    })

    },
    getrecommends:function(){
        getrecommend().then(res =>{
          // console.log(res.data);
          var recommends=res.data.data.list;
           this.recommendlist=recommends.map(function(n){
            //  console.log(n);
             n.id=n.item_id
           return n;

        })
           
        })
    }
  }
}
</script>

<style scoped>
 #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

/* 固定顶部nav */
  .detail-nav{
      position: relative;
      z-index: 9;
      background-color: #fff;
  }

   .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden; 
  }

 


</style>
