<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Team</th>
        <th class="text-left">Rate</th>
        <th class="text-left">Win</th>
        <th class="text-left">Lose</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="team in teams" :key="team.team">
        <td>
          <img :src="getImageUrl(team.team_name)" alt="Team Image" class="team-image" />
          {{ team.team_name }}
        </td>
        <td>{{ team.win_rate }}</td>
        <td>{{ team.win }}</td>
        <td>{{ team.lose }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
  

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const teams = ref({});

onMounted(() => {
  axios
    .get('http://localhost:3001/api/teams')
    .then(response => {
      teams.value = response.data;
      console.log(response.data);
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
.team-image {
  width: 30px;
  /* 根据需要设置图片的宽度 */
  height: auto;
  /* 根据需要设置图片的高度 */
  margin-right: 5px;
  /* 根据需要设置图片与名称之间的间距 */
}</style>