// 使用vue的mixins混入methods components
//回到顶部按钮
import backtop from 'components/content/backtop/backtop'
//抽取回到顶部组件
export var backtopmixin={
    //抽取属性
    data:function(){
        return {
         //是否显示回到顶部按钮
          isshowtop:false
        }
    },
    //抽取组件
    components:{
        backtop
    },
    //抽取方法
    methods:{
        backtop:function(){
         //点击回到顶部
         //this.$refs.scroll获取scroll组件对象，并调用组件方法scrollto
         //this.$refs在组件渲染完使用，目前只能在方法中使用
         // console.log(this.$refs.scroll);
         
         this.$refs.scroll.scrollto(0,0)
       },
       listenbacktop:function(position){
        this.isshowtop=(-position.y)>100
       }
    }
}