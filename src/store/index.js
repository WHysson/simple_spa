import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '../store/user'
import generalModule from '../store/general'
import productsModule from '../store/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    generalModule,
    productsModule
  }
})
