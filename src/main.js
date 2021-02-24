import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'
import '@babel/polyfill'

Vue.config.productionTip = false
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-187904986-1',
  router,
  config: 'G-YWLC6KXY82'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
