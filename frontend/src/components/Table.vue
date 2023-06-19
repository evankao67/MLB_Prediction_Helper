<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Team</th>
        <th class="text-left">ERA</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in mlbplayer" :key="player.Name">
        <td>
          <!-- <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" /> -->
          {{ player.Name }}
        </td>
        <td>{{ player.team }}</td>
        <td>{{ player.ERA }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
  
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const mlbplayer = ref({});
const allPlayer = ref({});

onMounted(async () => {
  await axios
    .get('http://localhost:3001/api/pitchers/era')
    .then(response => {
      mlbplayer.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  await axios
    .get('http://localhost:3001/api/players')
    .then(response => {
      allPlayer.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
    mlbplayer.value.map((player) => {
      player.team = allPlayer.value.find(plyr => plyr.player_id == player.player_id).team;
      if(player.team == "null")
        player.team = "-"
    })
});

function getImageUrl(name) {
  return `/src/assets/images/${name}.jpg`;
}
</script>
  
<style>
.player-image {
  width: 30px;
  height: auto;
  margin-right: 5px;
}
</style>
  