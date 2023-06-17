<template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Team</th>
          <th class="text-left">WHIP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mlbplayer" :key="item.name">
          <td>
            <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" />
            {{ item.name }}
          </td>
          <td>{{ item.team }}</td>
          <td>{{ item.whip }}</td>
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
            name: 'EduardoRodriguez',
            team: 'DET',
            whip: 2.13,
          },
          {
            name: 'ShaneMcClanahan',
            team: 'TB',
            whip: 2.18,
          },
          {
            name: 'SonnyGray',
            team: 'MIN',
            whip: 2.25,
          },
          {
            name: 'FramberValdez',
            team: 'HOU',
            whip: 2.27,
          },
          {
            name: 'JonGray',
            team: 'TEX',
            whip: 2.32,
          },
          {
            name: 'MarcusStroman',
            team: 'CHC',
            whip: 2.42,
          },
          {
            name: 'NathanEovaldi',
            team: 'TEX',
            whip: 2.49,
          },
          {
            name: 'JustinSteele',
            team: 'CHC',
            whip: 2.65,
          },
          {
            name: 'BryceElder',
            team: 'ATL',
            whip: 2.69,
          },
          {
            name: 'LuisCastillo',
            team: 'SEA',
            whip: 2.73,
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
  