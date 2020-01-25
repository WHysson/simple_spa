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
                <v-toolbar-title>Sign in</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="email"
                    label="email"
                    name="email"
                    prepend-icon="email"
                    type="email"
                    v-model="email"
                  />

                  <v-text-field
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
                <v-btn color="primary" @click.prevent="signin" :disabled="processing">Sign in</v-btn>
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
      email: null,
      password: null,
    }
  },
  props: {
      source: String,
    },
  methods:{
    signin(){
      this.$store.dispatch('signin', {email:this.email, password:this.password})
    },
  },
  computed:{
    error(){
      return this.$store.getters.getError
    },
    processing(){
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch:{
    isUserAuthenticated(value){
      if(value === true){
        this.$router.push("/")
      }
    }
  }
}
</script>

<style>

</style>