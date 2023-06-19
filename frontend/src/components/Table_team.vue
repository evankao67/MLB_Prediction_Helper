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
        <tr v-for="item in teams" :key="item.team_id">
          <td>
            <img :src="getImageUrl(item.team)" alt="Player Image" class="player-image" />
            {{ item.team }}
          </td>
          <td>{{ item.win_rate }}</td>
          <td>{{ item.win }}</td>
          <td>{{ item.lose }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  export default {
    data() {
      return {
        teams: {}
      };
    },
    mounted() {
    axios
      .get('http://localhost:3001/api/teams/by_winrate')
      .then(response => {
        console.log(response.data)
        this.teams = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
    methods: {
      getImageUrl(name) {
        // 根据球员名称动态生成图片路径
        return `/src/assets/images/${name}.jpg`;
      },
    },
  };
  </script>
  
  <style>
  .player-image {
    width: 30px; /* 根据需要设置图片的宽度 */
    height: auto; /* 根据需要设置图片的高度 */
    margin-right: 5px; /* 根据需要设置图片与名称之间的间距 */
  }
  </style>
  