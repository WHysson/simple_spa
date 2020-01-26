import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Products from '../views/Products.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Store from '../store'

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
      component: Profile,
      beforeEnter: AuthGuard
    }
  ]
})

function AuthGuard(from, to, next) {
    if(Store.getters.isUserAuthenticated){
      next()
    }else {
      next('/signin')
    }
}

export default router
