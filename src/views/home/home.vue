<template>
  <div id="home">
       <navbar class="home-nav"><div slot="center">购物节</div></navbar>
      
        <tabcntrol class="tab-control" v-show="isfixtabcontroll" ref="tabcontrol1"  :titles="['流行','新款','精选']" @tabclick="tabclick"/>
       <!-- 滚动条包裹内容 必须设置高度   使用this.$refs获取组件对象，-->
       <!--  probetyp定义BScroll实时监听属性-->
       <!-- pullUpLoad启用上拉加载更多 -->
       <scroll class="content" ref="scroll"
        :probetype="3"
         :pullUpLoad="true"
          @scroll="contentscroll"
          @pullingUp="pullingUp">
          <!-- 给子组件属性赋值 -->
            <homeswiper :banners="banners" @homeswrapperimgload="homeswrapperimgload"></homeswiper>
            <!-- recommend组件 -->
            <recommends :recommends="recommends"></recommends>
            <!-- 本周推荐，只是一张图片 -->
            <homefeature/> 
            <!-- 流行、新款、精选 -->
            <!-- @tabclick接受子组件传递的方法 -->
            <tabcntrol  ref="tabcontrol2"  :titles="['流行','新款','精选']" @tabclick="tabclick"/>
            <!-- 展示商品 -->
              <goodslist :goodslist="showgoods"/>
            

       </scroll>
        <!-- 回到顶部 组件上监听事件必须使用.native-->
        <backtop @click.native="backtop" v-show="isshowtop"/>
  </div>
</template>

<script>
//navbar home顶部导航
import navbar from 'components/common/navbar/navbar'
//滚动插件
import scroll from 'components/common/scroll/scroll'

//homen中间流行、新款、精选选项
import tabcntrol from 'components/content/tabcontrol/tabcontrol'
//流行、新款、精选选项商品列表
import goodslist from 'components/content/goodslist/goods'
//回到顶部按钮
import backtop from 'components/content/backtop/backtop'
 
 //home上部的轮播滚动
import homeswiper from './childComps/homeswiper'
//home推荐列表
import recommends from './childComps/homerecommen'
//home中间特色图片
import homefeature from './childComps/homefeature'

import {getHomeList,getHomeGoods} from 'network/home'

import {debounce} from 'common/utils'

export default {
  name:'',
  data(){
   return {
      banners:[],
      recommends:[],
      //定义流行、新款、精选数据结构key-value
      goods:{
         'pop':{page:0,list:[]},
         'news':{page:0,list:[]},
         'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isshowtop:false,
      getgoodsRedounce:null,
      scrollrefresh:null,
      taboffsettop:0,
      isfixtabcontroll:false,
      savey:0
   }
  },
  components:{
    navbar,
    scroll,
    tabcntrol,
    goodslist,
    backtop,
    homeswiper,
    recommends,
    homefeature
  },
  computed:{
    //计算属性
       showgoods(){
         return this.goods[this.currentType].list
       }
  },
  // 组件创建的时候执行
  created:function(){
    //组件创建获取
    //调用methods方法
     this.getHomeList()

     //给data数据复制
     this.getHomeGoods("pop")
      this.getHomeGoods("news")
       this.getHomeGoods("sell")

     
       
  },
  mounted:function(){

   //返回一个防抖函数,返回debounce 中的return的function函数
   //返回的函数中有个timer定时器
    this.scrollrefresh=debounce(this.$refs.scroll.refresh,50)
      //在组件加载完
      this.$bus.$on('imgload',()=>{
        // console.log("imagload");
        
        // console.log(this.$refs.scroll);
        // this.$refs.scroll.scroll.refresh()
        //调用防抖函数
        this.scrollrefresh();

      })


      //下拉加载更多防抖动
      this.getgoodsRedounce=debounce(this.getHomeGoods,200)

      //在加载完成获取tabcontroll的offsettop
    
   
     
  },
  // 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
  activated:function(){
    // 被 keep-alive 缓存的组件激活时调用。
    // console.log("activated");
    //防止出问题刷新一下scroll
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollto(0,this.savey,0)
  },
  deactivated:function(){
    //组件离开
    //  console.log("deactivated");
     //离开时获取scroll滚动的y值
    //  console.log(this.$refs.scroll.scroll.y);
     
    this.savey=this.$refs.scroll.scroll.y
  },
  destroyed:function(){
   //组件销毁，取消监听
   this.$bus.$off('imgload');
  },
  methods:{
   
    /***
     * 事件监听方法
     */
    tabclick:function(index){
        switch(index){
          case 0:
            this.currentType='pop';
            break;

          case 1:
          this.currentType='news';
            break;

          case 2:
          this.currentType='sell';
          
        }
        this.$refs.tabcontrol1.currentIndex=index
        this.$refs.tabcontrol2.currentIndex=index
    },
    backtop:function(){
      //点击回到顶部
      //this.$refs.scroll获取scroll组件对象，并调用组件方法scrollto
      //this.$refs在组件渲染完使用，目前只能在方法中使用
      // console.log(this.$refs.scroll);
      
      this.$refs.scroll.scrollto(0,0)
    },
    //监听滚动位置
    contentscroll:function(position){
      // console.log(position);
      
     this.isshowtop=(-position.y)>100

     //监听滚动，判断tabcontroll位置，只要滚动超过tabcontroll 的offsettop就吸顶显示
    //  console.log(-position.y);
     
     this.isfixtabcontroll=(-position.y) > this.taboffsettop
      
    },
    //监听上拉加载更多
    pullingUp:function(){
      // console.log("加载更多");
      
      //上拉加载更多goods
      // this.getHomeGoods(this.currentType)
      this.getgoodsRedounce(this.currentType)
      
        //解决bscroll的异步加载bug,需要重新刷新bscroll
         this.scrollrefresh()
    },
    homeswrapperimgload:function(){
      //图片加载完成计算高度
      //  console.log(this.$refs.tabcontrol);
    //$el获取组件元素
    //这个获取的offsettop不准确，因为首页有图片没有加载完就获取了
    //需要在图片加载完获取高度
    //  console.log( this.$refs.tabcontrol2.$el.offsetTop);
     this.taboffsettop=this.$refs.tabcontrol2.$el.offsetTop
    },
   /**
     * 网络请求方法
     */
    getHomeList:function(){
      //调用home.js网络请求
        getHomeList().then(res=>{
      //  console.log(res.recommends);
       
         this.banners=res.banners
         this.recommends=res.recommends
     })
    },
   
    getHomeGoods:function(type){

       //添加防抖
      //  console.log(type);
       
         //获取data中goods对象中page
        var page=this.goods[type].page+1;
          // console.log("page1:"+page);
        //调用home.js网络请求
            getHomeGoods(type,page).then(res=>{
            //ES6语法，往数组中添加数组
            // console.log(res);
            
             //防止下拉太快请求导致push重复数据
            //  if(page !=this.goods[type].page)
            //  {
            //   //  console.log("page2:"+page);
               
            //    this.goods[type].list.push(...res.list)
              
            //  }
              this.goods[type].list.push(...res.list)
             this.goods[type].page=page;
              //继续加载
            this.$refs.scroll.finishPullUp()
          })
        
       
    }
  }
 
}
</script>

<style scoped>
/* scoped作用域只对当前组件css起作用 */
#home{
  padding-top:44px;
   /* vh viewport heigth窗口高度 */
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #ffff;

  /* 解决顶部导航固定问题 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  /*  该属性没有达到top时是滚动，达到后改成flex */
  /* 由于better-scroll插件，该属性不起作用 */
  /* position: sticky;   */
  /* top:44px;   
  z-index: 9; */
  position: relative;
  z-index: 9;
}

/* 滚动条内容高度 */
.content{
  /* 隐藏原始滚动鼠标滚动 */
   overflow: hidden; 

   position: absolute;
   top:44px;
   bottom:49px;
   left: 0;
   right: 0;
}
</style>
