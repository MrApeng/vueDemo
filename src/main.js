// 入口文件
import  Vue from 'vue'
// 导入路由的包 未安装先安装
import   VueRouter from 'vue-router'
// 导入时间插件

//定义全局过滤器
Vue.filter('dateTime',function(Timestr){
    var dt = new Date(Timestr)
    var y = dt.getFullYear()
    var m = (dt.getMonth()+1).toString().padStart(2,'0')
    var d = dt.getDate().toString().padStart(2,'0')
    var hh = dt.getHours().toString().padStart(2,'0')
    var mm = dt.getMinutes().toString().padStart(2,'0')
    var ss = dt.getSeconds().toString().padStart(2,'0')
    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
});

// 按需导入  Element 组件和样式组件
 import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/static/css/tesk_7.css'
import '../public/static/js/font.js'
import VueResource from 'vue-resource'


// 插件VuePreview 图片缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp-minimal-dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})

//导入APP根组件
import app from './App'
  // 路由功能组件

// 使用
Vue.use(Element)

Vue.use(VueRouter)
Vue.use(VueResource)
// 请求地址
Vue.http.options.root = 'http://47.89.21.179:8080';
 // 设置全局 post 的时候 表单数据格式形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
// 导入自己的路由模块
import  router from './router'


new Vue({
    el:'#app',
    render: c => c(app),
    router //挂载路由对象到VM实例上




})