<template>
  <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>SIGN UP</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    :rules="checkEmail"
                    id="email"
                    label="email"
                    name="email"
                    prepend-icon="email"
                    type="email"
                    v-model="email"
                  />

                  <v-text-field
                    :rules="checkPassword"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click.prevent="signup" :disabled="processing">Sign up</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
export default {
  data(){
    return {
      login: null,
      email: null,
      password: null,
      checkEmail: [
        value => !!value || 'Required.',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      checkPassword: [
        value => !!value || 'Required.',
        value => (value || '').length >= 6 || 'Min 6 characters',
        value => {
          const pattern = /(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g
          return pattern.test(value) || 'Invalid password.'
        },
      ]
    }
  },
  props: {
      source: String,
    },
  methods:{
    signup(){
      this.$store.dispatch('signup', {email:this.email, password:this.password})
    },
  },
  computed:{
    error(){
      return this.$store.getters.getError
    },
    processing(){
      return this.$store.getters.getProcessing
    },
    isUserAutheticated(){
      return this.$store.getters.isUserAutheticated
    }
  },
  watch:{
    isUserAutheticated(val){
      if(val === true){
        this.$router("/")
      }
    }
  }
}
</script>

<style>

</style>