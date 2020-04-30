//封装网络请求，使用axios作为网络请求，如果以后要更换网络请求工具只需要改这个文件

import Axios from "axios";

//config函数是配置文件,success是请求成功回调函数，failure请求失败回调函数
// export function request(config,success,failure)
// {
//     //可以创建多个实例
//     var instance1=Axios.create({
//         baseURL:'/api'
//     })

//     instance1(config)
//     .then(function(res){success(res)})
//     .catch(function(err){failure(err)})
// }

//使用promise网络封装
export function request(config)
{
    //创建多个实例
    var instance1= new Promise((resolve,reject) =>{
        //可以创建多个实例
   var instance1=Axios.create({
       baseURL:'/api'
   })

   //axios请求拦截

   //全局拦截
//    Axios.interceptors.request.use()

  //当前实例拦截
  instance1.interceptors.request.use(function(conf){
      //请求成功拦截，可以获取请求的配置信息
      //1、主要对请求config配置信息参数不符合服务器要求
      //2、每次发送网络请求都要显示一个网络请求图标，请求成功图标消失
      //3、某些网络请求必须带一些特殊信息,比如登录的token
    //   console.log(conf);
      return conf;//一定要返回
  },function(errs){
      //请求失败拦截
      console.log(errs);
      
  })
  //响应拦截
  instance1.interceptors.response.use(function(resl){

    //响应成功返回信息
    console.log(resl);
    //可以返回data数据给请求
    
    return resl.data;
  },function(erre){
     //响应失败
    //  console.log(erre);
     
  })

   instance1(config)
   .then(function(res){
       resolve(res)
   })
   .catch(function(err){
       reject(err)
   })
   })
    return  instance1
   
}