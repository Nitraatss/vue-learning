import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Copy from 'v-copy'
import VTooltip from 'v-tooltip'

import 'papercss/dist/paper.css'
import '@/styles/style.scss'

Vue.config.productionTip = false

Vue.use(Copy)
Vue.use(VTooltip)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
