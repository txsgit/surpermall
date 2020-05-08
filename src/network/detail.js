import {request} from './request'

//获取商品详情
export function getdetail(iid){
    return request({
        url:'/home/detail',
        params:{   //get请求传参使用params
            iid
        }
    })
}

//定义封装一个类用于前端展示数据
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
    }
  }

  //定义封装shop展示前端数据
  export class Shop{
      constructor(shopinfo){
        this.logo = shopinfo.shopLogo;
        this.name = shopinfo.name;
        this.fans = shopinfo.cFans;
        this.sells = shopinfo.cSells;
        this.score = shopinfo.score;
        this.goodsCount = shopinfo.cGoods
      }
  }

//封装商品参数
  export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

  //获取推荐数据
  export function getrecommend(){
    return request({
        url:'/home/recommend'
    })
}