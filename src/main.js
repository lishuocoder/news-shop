import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入 vue-resource
import VueResource from 'vue-resource'

//安装 vue-resource
Vue.use(VueResource) 

Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
