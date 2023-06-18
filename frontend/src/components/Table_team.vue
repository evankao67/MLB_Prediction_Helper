<template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Team</th>
          <th class="text-left">Rate</th>
          <th class="text-left">Win</th>
          <th class="text-left">Loose</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mlbplayer" :key="item.team">
          <td>
            <img :src="getImageUrl(item.team)" alt="Player Image" class="player-image" />
            {{ item.team }}
          </td>
          <td>{{ item.rate }}</td>
          <td>{{ item.win }}</td>
          <td>{{ item.loose }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mlbplayer: [
          {
            team: 'Tampa Bay Rays',
            rate: 69.0,
            win:49,
            loose:22,
          },
          {
            team: 'Baltimore Orioles',
            rate: 62.6,
            win:42,
            loose:25,
          },
          {
            team: 'Texas Rangers',
            rate: 62.6,
            win:42,
            loose:25,
          },
          {
            team: 'Atlanta Braves',
            rate: 61.7,
            win:42,
            loose:26,
          },
          {
            team: 'Arizona Diamondbacks',
            rate: 60.2,
            win:41,
            loose:27,
          },
          {
            team: 'Houston Astros',
            rate: 57.3,
            win:39,
            loose:29,
          },
          {
            team: 'New York Yankees',
            rate: 56.5,
            win:39,
            loose:30,
          },
          {
            team: 'Los Angeles Dodgers',
            rate: 55.8,
            win:38,
            loose:30,
          },
          {
            team: 'Toronto Blue Jays',
            rate: 55.0,
            win:38,
            loose:31,
          },
          {
            team: 'Miami Marlins',
            rate: 55.0,
            win:38,
            loose:31,
          },
          // 添加其他球员数据...
        ],
      };
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
  