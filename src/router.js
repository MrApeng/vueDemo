import  VueRouter from  'vue-router'
    // 创建路由对象
import index from './components/tabbar/index'
import cart from './components/tabbar/cart'
import my from './components/tabbar/my'
import newslist from './components/news/newslist'
import newsinfo from './components/news/newsinfo'
import photolist from './components/photoShare/photolist'
import photoinfo from './components/photoShare/photoinfo'
import goodslist from './components/goods/goodslist'
import goodsinfo from './components/goods/goodsinfo'
import goodsDesc from './components/goods/goodsDesc'
import goodsComment from './components/goods/goodsComment'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/index/newslist',component:newslist},
        {path:'/index/newslist/newsinfo:id',component:newsinfo},
        {path:'/index/photolist/newsinfo:id',component:newsinfo},
        {path: "/index/photolist",component: photolist},
        {path: "/index/photoinfo/:id",component: photoinfo},
        {path: "/index/goodslist",component: goodslist},
        {path: "/index/goodslist/goodsinfo/:id",component: goodsinfo,name:'goodsinfo'},
        {path: "/index/goodsinfo/goodsDesc/:id",component: goodsDesc,name:'goodsDesc'},
        {path: "/index/goodsinfo/goodsComment/:id",component: goodsComment,name:'goodsComment'},
        {path:'/cart',component:cart},
        {path:'/my',component:my}
    ]
});
// 暴漏路由对象
export  default  router
