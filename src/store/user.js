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
        },
        unset_user(state, payload){
            state.user.isAuthenticated = false
            payload.uid = null
        }
    },
    actions: {
        signup({commit}, payload){
            commit('set_processing', true)
            commit('clean_error')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
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
            commit('clean_error')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('set_processing', false)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorMessage = error.message;
                commit('set_processing', false)
                commit('set_error', errorMessage)
              });
        },
        signout(){
            firebase.auth().signOut()
        },
        state_changed({commit}, payload){
            if(payload){
                commit('set_user', payload.uid)
            }else {
                commit('unset_user')
            }
        }
    },
    getters:{
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
  }