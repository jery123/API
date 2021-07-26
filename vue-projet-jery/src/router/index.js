import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../components/ForgotPassword.vue')
        },
        {
          path: '/a-propos',
          name: 'A_propos',
          component: () => import('../components/A_propos.vue')
          },
        {
        path: '/resart-password',
        name: 'resart-password',
        component: () => import('../components/ResartPassword.vue')
  },
  {
        path: '/up',
        name: 'signup',
        component: () => import('../components/Signup.vue')
      },
      {
       
        path: "/products",
        name: "products",
        component: () => import("../components/ProductsList")
      },
      {
        path: "/products/:id",
        name: "product-details",
        component: () => import("../components/Product")
      },
      {
        path: "/add",
        name: "add",
        component: () => import("../components/AddProduct")
  },
  {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/accueil-c',
        name: 'accueil-c',
        component: () => import('../components/Accueil.client.vue')
        },
        {
          path: '/accueil-f',
          name: 'accueil-f',
          component: () => import('../components/Accueil.farmer.vue')
        },
        {
          path: '/accueil',
          name: 'accueil',
          component: () => import('../components/Accueil.vue')
        },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Accueil.client',
//     component: () => import('../components/Accueil.client.vue')
//   },
//   {
//     path: '/up',
//     name: 'signup',
//     component: () => import('../components/Signup.vue')
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../components/Login.vue')
//   },
//   {
//     path: '/forgot-password',
//     name: 'forgot-password',
//     component: () => import('../components/ForgotPassword.vue')
//     },
//     {
//       path: '/a-propos',
//       name: 'A_propos',
//       component: () => import('../components/A_propos.vue')
//       },
//     {
//     path: '/resart-password',
//     name: 'resart-password',
//     component: () => import('../components/ResartPassword.vue')
//   },
//   {
//     path: "/",
//     alias: "/products",
//     name: "products",
//     component: () => import("../components/ProductsList")
//   },
//   {
//     path: "/products/:id",
//     name: "product-details",
//     component: () => import("../components/Product")
//   },
//   {
//     path: "/add",
//     name: "add",
//     component: () => import("../components/AddProduct")
//   },
//   {
//     path: '/accueil-c',
//     name: 'accueil-c',
//     component: () => import('../components/Accueil.client.vue')
//     },
//     {
//       path: '/accueil-f',
//       name: 'accueil-f',
//       component: () => import('../components/Accueil.farmer.vue')
//     },
//     {
//       path: '/accueil',
//       name: 'accueil',
//       component: () => import('../components/Accueil.vue')
//     },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router