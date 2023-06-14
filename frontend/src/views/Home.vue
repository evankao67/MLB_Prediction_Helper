<template>
  <div>
    <Header />
  </div>
  <p>This is homepage</p>
  <RouterLink to="/rank">排行榜</RouterLink>
  <RouterLink to="/game">比賽</RouterLink>
  <v-btn>dd</v-btn>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    components: {
      Header
    },
  // 组件的其他选项和逻辑
  }
</script>
