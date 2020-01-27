<template>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.id"
        >
          <v-card md6 max-width="600px">
            <v-img
              src="../assets/images/1.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="product.name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text>Browse category</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>


export default {
  computed:{
    products(){
      return this.$store.getters.getProducts
    }
  }
}
</script>

<style>

</style>