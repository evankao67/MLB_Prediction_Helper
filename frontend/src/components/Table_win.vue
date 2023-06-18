<template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Team</th>
          <th class="text-left">WIN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mlbplayer" :key="item.name">
          <td>
            <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" />
            {{ item.name }}
          </td>
          <td>{{ item.team }}</td>
          <td>{{ item.win }}</td>
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
            win: 5,
          },
          {
            name: 'ShaneMcClanahan',
            team: 'TB',
            win: 5,
          },
          {
            name: 'SonnyGray',
            team: 'MIN',
            win: 5,
          },
          {
            name: 'FramberValdez',
            team: 'HOU',
            win: 5,
          },
          {
            name: 'JonGray',
            team: 'TEX',
            win: 5,
          },
          {
            name: 'MarcusStroman',
            team: 'CHC',
            win: 5,
          },
          {
            name: 'NathanEovaldi',
            team: 'TEX',
            win: 5,
          },
          {
            name: 'JustinSteele',
            team: 'CHC',
            win: 5,
          },
          {
            name: 'BryceElder',
            team: 'ATL',
            win: 5,
          },
          {
            name: 'LuisCastillo',
            team: 'SEA',
            win: 5,
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