import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vee-validate'
import './plugins/vue-js-modal'
import SvgIcon from '@/components/Common/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
