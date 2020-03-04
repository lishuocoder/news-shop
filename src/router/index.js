import Vue from 'vue'
import Router from 'vue-router'
//导入对应的路由组件
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopContainer from '@/components/tabbar/ShopContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'HomeContainer', 
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      name: 'ShopContainer',
      component: ShopContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类,默认的类叫router-link-active
})
