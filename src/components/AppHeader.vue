<template>
  <div>
      <v-navigation-drawer temporary absolute v-model="drawer" class="hidden-md-and-up">
          <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
          <v-btn v-if="isUserAuthenticated"  text @click.prevent="signout"><v-icon left >exit_to_app</v-icon>Log out</v-btn>
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
    },
    methods:{
        signout(){
            this.$confirm('Do you really want to exit?').then(res => {
                if (res) {
                    this.$store.dispatch('signout')
                }
            })
        }
    }

}
</script>

<style scoped>

</style>