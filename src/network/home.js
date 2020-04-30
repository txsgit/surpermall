import {request} from './request'

export function getHomeList(){
    return request({
        url:'/home/list'
    })
}