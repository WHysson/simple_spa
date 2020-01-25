import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {
        set_user(state, payload){
            state.user.isAuthenticated = true
            state.user.uid = payload
        }
    },
    actions: {
        signup({commit}, payload){
            commit('set_processing', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('set_user', user.uid)
                commit('set_processing', false)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorMessage = error.message;
                commit('set_processing', false)
                commit('set_error', errorMessage)
              });
        },
        signin({commit}, payload){
            commit('set_processing', true)
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('set_user', user.uid)
                commit('set_processing', false)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorMessage = error.message;
                commit('set_processing', false)
                commit('set_error', errorMessage)
              });
        },
    },
    getters:{
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
  }