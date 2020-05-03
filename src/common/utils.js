   /**
     * 防抖动函数
     */
    export function debounce(func,delay){
  
  
        var timer=null
        return function(...args){
          clearTimeout(timer)
          timer=setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      
}