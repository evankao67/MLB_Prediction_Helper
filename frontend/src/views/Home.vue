<template>
  <div>
    <Header />
    <Background />
    <Menu_Team />
  </div>
  
</template>

<script>
  import Header from '../components/Header.vue'
  import Menu_Team from '../components/Menu_team.vue'
  import Background from'../components/background.vue'
  export default {
    components: {
      Header,
      Menu_Team,
      Background,
    },
  // 组件的其他选项和逻辑
  }
</script>
