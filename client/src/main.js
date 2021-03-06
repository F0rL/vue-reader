import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './assets/styles/icon.css'
import './assets/fonts/cabin.css'
import './assets/styles/global.scss'
// import './mock'
import './utils/boost'
import './utils/create-api'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
