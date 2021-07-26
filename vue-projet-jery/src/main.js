import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)

import { AvatarPlugin } from 'bootstrap-vue'
Vue.use(AvatarPlugin)
import { BAvatar } from 'bootstrap-vue'
Vue.component('b-avatar', BAvatar)
import { BNavbar } from 'bootstrap-vue'
Vue.component('b-navbar', BNavbar)
import { IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)
import { BIcon } from 'bootstrap-vue'
Vue.component('b-icon', BIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')