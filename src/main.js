import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import firebase from 'firebase'
import firebaseConfig from '@/config/firebase.js'
import VuetifyConfirm from 'vuetify-confirm'


Vue.use(VuetifyConfirm, { 
vuetify, 
buttonTrueText: 'Accept',
buttonFalseText: 'Discard',
color: 'warning',
icon: 'warning',
title: 'Warning',
width: 350,
property: '$confirm'})

Vue.config.productionTip = false
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('state_changed', user)
    });
  }
}).$mount('#app')
