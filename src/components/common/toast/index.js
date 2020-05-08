import Toast from './toast.vue'
// 封装组件
var obj={}
//vue.use会调用install方法
obj.install=function(vue){
    console.log(vue);
    //创建一个toast组件实例
    // 1、创建vue组件构造器
    var toastcontrustor=vue.extend(Toast);
    // 2、new的方式创建组件对象
    var toastvue=new toastcontrustor()
    // 3、将组件对象手动挂载到某个元素上
    toastvue.$mount(document.createElement("div"))
    // 4、将组件对象添加到body上
    document.body.appendChild(toastvue.$el)

    //向vue实例添加toast组件对象
    vue.prototype.$toast=toastvue
}
export default obj;