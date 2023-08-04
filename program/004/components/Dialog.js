// import Vue from 'vue'
import cardDialogPlugin from './DialogPlugin.vue'

const cardDialog = (config) => {
    let modalOptions = {
      type: 1, // 标题；可选，默认1有标题；0无标题
      cancel: null, // 点击取消回调函数；可选，默认无
      sure: null, // 点击确定回调函数；可选，默认无
      btn: ['取消', '确定'], // 按钮；可选，默认'取消','确定'两个按钮
      btnShow: true, // 取消按钮是否隐藏；可选，默认显示；配合按钮使用
      title: '系统提示', // 标题；可选，默认显示
      content: '<p>这是一个modal对话框</p>' // 提示内容；可选，html模板
    }
    if (!!config && !!config.btn && config.btn.length === 1) {
      config.btnShow = false
    }
    pulicFn(cardDialogPlugin, modalOptions, config)
  }

  const pulicFn = (plugin, option, config) => {
    let Tpl = Vue.extend(plugin)
    let instance = new Tpl()
    config = {
      ...option,
      ...config
    }
    for (let key in config) {
      if (config.hasOwnProperty(key)) {
        instance.$data[key] = config[key]
      }
    }
    document.body.appendChild(instance.$mount().$el)
  }

  export default {
    install () {
      Vue.prototype.$cardDialog = cardDialog.bind(Vue)
    }
  }