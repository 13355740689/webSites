import comfirm from './DialogPlugin.vue'

let newInstance = null
//将vue组件变为构造函数
let ConfirmConstructor = Vue.extend(comfirm)

let init = (options)=>{
    //实例化组件
    newInstance = new ConfirmConstructor()
   //合并配置选项
    Object.assign(newInstance,options)
   //使用$mount()后  可以理解为创建虚拟的dom
    document.body.appendChild(newInstance.$mount().$el)
}

let caller = (options)=>{
		console.log('2934590234865904')
		console.dir(options)
    //options 为调用组件方法时传入的配置选项
    if(!newInstance){
        init(options)
    }
    return newInstance.show(vm =>{newInstance = null})
}

// Vue.use({
// 	install (){
// 		vue.prototype.$Dialog = caller
// 	}
// })

// Vue.prototype.$Dialog = function(a) {
// 	console.log('111111112222222333333')
// }
// export default {
//     // install(vue){
//     //     vue.prototype.$Dialog = caller
//     // }
// 		Dialog: 1
// }

// (function($) {
// 	this.Dialog = '1'
// })()