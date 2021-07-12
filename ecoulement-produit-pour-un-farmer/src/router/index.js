import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/up',
    name: 'signup',
    component: () => import('../components/Signup.vue')
    }, 
    {
      path: '/relogin_p',
      name: 'signup',
      component: () => import('../components/restart_password.vue')
    },
    {
      path: '/relogin_m',
      name: 'signup',
      component: () => import('../components/Relogin_with_new_password.vue')
    },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
    },
    {
      path: "/",
      alias: "/products",
      name: "products",
      component: () => import("../components/ProductsList")
    },
    {
      path: "/products/:id",
      name: "products-details",
      component: () => import("../components/Product")
    },
    {
      path: "/add_product",
      name: "add_product",
      component: () => import("../components/AddProduct")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router








































// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
