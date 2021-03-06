// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../components/Login.vue'
// import Signup from '../components/Signup.vue'
// import ForgotPassword from '../components/ForgotPassword.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/forgotPassword',
//     name: 'ForgotPassword',
//     component: ForgotPassword
//   },
//   {
//     path: '/signup',
//     name: 'Signup',
//     component: Signup
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
      path: '/reset_pass',
      name: 'reset_pass',
      component: () => import('../components/Reset_password.vue')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../components/Message.vue')
      },
      {
        path: '/dashbord',
        name: 'dashbord',
        component: () => import('../components/Dashbord.vue')
      }
      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router