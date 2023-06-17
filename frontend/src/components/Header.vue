<template>
  <v-tabs bg-color="black" hide-slider grow>
    <v-spacer />
    <v-tab @click="changeRoute('/')">Home</v-tab>
    <v-tab @click="changeRoute('/rank')">Ranking</v-tab>
    <v-tab @click="changeRoute('/game')">Games</v-tab>
    <v-img src="/src/assets/images/mlb.jpg" alt="Image"></v-img>
    <v-spacer />
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    
  }),
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
}
</script>