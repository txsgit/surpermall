import {request} from './request'

export function getHomeList(){
    return request({
        url:'/home/list'
    })
}
//获取商品
export function getHomeGoods(type,page){
    // console.log(type);
    
    return request({
        url:'/home/goods',
        params:{   //get请求传参使用params
            type,
            page
        }
    })
}