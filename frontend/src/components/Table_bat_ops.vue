<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Team</th>
        <th class="text-left">OPS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in mlbplayer" :key="player.Name">
        <td>
          <!-- <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" /> -->
          {{ player.Name }}
        </td>
        <td>{{ player.team }}</td>
        <td>{{ player.OPS }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const mlbplayer = ref({});

onMounted(async () => {
  await axios
    .get('http://localhost:3001/api/batters/ops')
    .then(response => {
      mlbplayer.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
});

function getImageUrl(name) {
  // 根据球员名称动态生成图片路径
  return `/src/assets/images/${name}.jpg`;
}
</script>
  
<style>
.player-image {
  width: 30px;
  /* 根据需要设置图片的宽度 */
  height: auto;
  /* 根据需要设置图片的高度 */
  margin-right: 5px;
  /* 根据需要设置图片与名称之间的间距 */
}
</style>
  