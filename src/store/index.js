import Vue from 'vue'
import Vuex from 'vuex'


//安装插件
Vue.use(Vuex)

//创建vuex实例
var store=new Vuex.Store({
    //属性
    state:{
       //定义购物车list
       carlist:[]
    },
    //方法，可以修改属性值
    mutations:{
        //操作state添加购物车
       addcar:function(state,payload)
       {
           //给购物车商品添加默认选中属性
        payload.checked=true;
           //防止重复添加,重复添加只记录个数
        //    debugger   可以使用这个调试代码 chrome按F10
         //最简单逻辑
         var oldproduct=state.carlist.find(function(item){
            return item.iid==payload.iid
         })
         if(oldproduct)
            {
                oldproduct.count+=1
            }else
            {
                payload.count=1
                state.carlist.push(payload)
            }

           // 判断是否为空
        //    if(state.carlist.length==0)
        //    {
        //     payload.count=1
           
        //     state.carlist.push(payload)
        //    }else
        //    {
        //        var count=0;//判断是否有相同的
        //        //不为空
        //     for(var i in state.carlist)
        //     {
        //       console.log(111);
        //       if(payload.iid == state.carlist[i].iid)
        //       {
        //           console.log(2222);
                  
        //           state.carlist[i].count+=1
        //           count++
        //           break;
        //       }
             
        //       }   

        //       if(count==0)
        //       {
        //           //说明数组中没有相同的就添加
        //         payload.count=1
           
        //         state.carlist.push(payload)
        //       }

        //    }
         

            //老师的逻辑
            // var oldproduct=null
            // for(var item of state.carlist)
            // {
            //     if(payload.iid == item.iid)
            //      {
            //         oldproduct=item
            //      }
            // }
            // if(oldproduct)
            // {
            //     oldproduct.count+=1
            // }else
            // {
            //     payload.count=1
            //     state.carlist.push(payload)
            // }


            
          }
       
          
       
    },
    getters:{
        //计算属性
        carlistlength:function(state){
            return state.carlist.length
        },
        carlist:function(state){
            return state.carlist
        },
        checkedcarlength:function(state){
            return state.carlist.filter(item => item.checked==true).length
        }
        
    },
    actions:{ //异步调用mutation方法修改state属性
      anyaddcars:function(context,payload){
        return new Promise(function(resolve,reject){
            context.commit("addcar",payload)
            resolve("添加购物车成功！");
        })
      }
    }
})

//导出
export default store