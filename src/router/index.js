import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '@/components/Services.vue'
import Products from '@/components/Products.vue'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'
import Profile from '@/components/Profile.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
