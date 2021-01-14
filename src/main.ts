import Vue from 'vue'
import App from './FrameworkAndDrivers/App.vue'
import store from './FrameworkAndDrivers/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
