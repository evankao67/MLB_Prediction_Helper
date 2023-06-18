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
import axios from 'axios'
import { onMounted } from 'vue'

export default {
  components: {
    Header,
    Menu_Team,
    Background,
  },
  setup() {
    onMounted(() => {
      console.log('mounted!');
      axios.get('http://localhost:3001/api/match')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  },
}
</script>
