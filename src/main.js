import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import VueSwimlane from 'vue-swimlane'
import 'animate.css/animate.css'
import 'vuesax/dist/vuesax.css' // Vuesax styles
import 'material-icons/iconfont/material-icons.css'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(VueSwimlane)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
