<template>
    <Header />
    <h1>當日賽程</h1>
    <div>
      <GameList />
    </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import GameList from '../components/GameList.vue'
  export default {
    components: {
      Header,
      GameList,
    },
  // 组件的其他选项和逻辑
  }
</script>