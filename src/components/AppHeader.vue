<template>
  <div>
      <v-navigation-drawer v-model="drawer" class="hidden-md-and-up">
          <v-list v-for="item in menuItems" :key="item.title" >
              <v-list-item>{{item.title}}</v-list-item>
          </v-list>
      </v-navigation-drawer>
      <v-app-bar app dark class="primary">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <router-link style="cursor: pointer" to="/home" tag="span">
              <v-toolbar-title id="title" v-text="'A CUT OF ART'"></v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-item-group v-for="item in menuItems" :key="item.title" class="hidden-sm-and-down">
              <v-btn :to="item.route" text><v-icon left v-html="item.icon"></v-icon>{{item.title}}</v-btn>
          </v-item-group>
      </v-app-bar>
  </div>
</template>

<script>
export default {
    data(){
            return {
                drawer:false
            }
        },
    computed:{
        isUserAuthenticated(){
            return this.$store.getters.isUserAuthenticated
    },
        menuItems(){

            if(this.isUserAuthenticated){
                alert("Authorisation successfull!")
                return [
                {
                    title: 'Home',
                    route: '/home',
                    icon: 'home'
                },
                {
                    title: 'Services',
                    route: '/services',
                    icon: 'list'
                },
                {
                    title: 'Products',
                    route: '/products',
                    icon: 'shopping_basket'
                },
                {
                    title: 'Profile',
                    route: '/profile',
                    icon: 'badge'
                },
                {
                    title: 'Log out',
                    route: '/logout',
                    icon: 'exit_to_app'
                },
            ] 
            }else {
                return [
                {
                    title: 'Home',
                    route: '/home',
                    icon: 'home'
                },
                {
                    title: 'Services',
                    route: '/services',
                    icon: 'list'
                },
                {
                    title: 'Products',
                    route: '/products',
                    icon: 'shopping_basket'
                },
                {
                    title: 'Sign in',
                    route: '/signin',
                    icon: 'input'
                },
                {
                    title: 'Sign up',
                    route: '/signup',
                    icon: 'lock_open'
                },
            ] 
            }
        }
    }

}
</script>

<style scoped>

</style>