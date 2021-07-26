import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies"
Vue.use(VueCookies)

Vue.config.productionTip = false



import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
/*Dash*/

// router setup
//import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// configure router
// const router = new VueRouter({
//   routes, // short for routes: routes
//   linkExactActiveClass: "nav-item active"
// });

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  i18n,

  data: {
    Chartist: Chartist
  }
});







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
import i18n from './plugins/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')