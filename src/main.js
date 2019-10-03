
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./assets/css/base.scss";

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'https://api.punkapi.com/v2/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
