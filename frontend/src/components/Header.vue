<template>
  <v-tabs bg-color="primary" hide-slider="true">
    <v-tab>
      <RouterLink to="/">Home</RouterLink>
    </v-tab>
    <v-tab>
      <RouterLink to="/rank">Ranking</RouterLink>
    </v-tab>
    <v-tab>
      <RouterLink to="/game">Games</RouterLink>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    
  }),
}
</script>