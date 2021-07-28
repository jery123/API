import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import AdminProfil from "@/pages/AdminProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Dashboard_client from "@/pages/Layout/DashboardLayoutUser.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "Profil d'administrateur",
        component: AdminProfil
      },
      {
        path: "table",
        name: "Liste des utilisateurs",
        component: TableList
      },
      {
        path: "typography",
        name: "Produits en cours",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Version plus récente",
        component: UpgradeToPRO
      }
    ]
  
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  // {
  //   path: '/accueil-client',
  //   name: 'client',
   
  //   component: () => import(/* webpackChunkName: "about" */ "@/pages/utilisateur/Accueil.client.vue")
  // },
  // {
  //   path: '/accueil client',
  //   name: 'index',
   
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Accueil.client.vue')
  // },
   {
    path: "/dashboard-client",
    name: "Dashboard utilisateur",
     component: Dashboard_client,
     children: [
       {
        path: '/index',
        name: 'Dashboard producteur',
        component: () => import('@/pages/DashboardProd.vue')
       },
       {
        path: '/produits',
        name: 'Mes produits',
        component: () => import('@/pages/DashboardProd.vue')
       },
       {
        path: '/info-produit',
        name: 'Info sur le produit',
        component: () => import('@/pages/ProductProfileProd.vue')
       },
       {
        path: '/profil',
        name: 'Profil d\'utilisateur',
        component: () => import('@/pages/UserProfil.vue')
       },
       
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../pages/product/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
