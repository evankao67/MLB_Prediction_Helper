<template>
  <div>
    <Header />
    <Menu_Team />
  </div>
  
</template>

<script>
  import Header from '../components/Header.vue'
  import Menu_Team from '../components/Menu_team.vue'
  export default {
    components: {
      Header,
      Menu_Team,
    },
  // 组件的其他选项和逻辑
  }
</script>
