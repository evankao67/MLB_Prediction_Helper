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
        <tr v-for="item in mlbplayer" :key="item.name">
          <td>
            <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" />
            {{ item.name }}
          </td>
          <td>{{ item.team }}</td>
          <td>{{ item.era }}</td>
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
            era: 2.13,
          },
          {
            name: 'ShaneMcClanahan',
            team: 'TB',
            era: 2.18,
          },
          {
            name: 'SonnyGray',
            team: 'MIN',
            era: 2.25,
          },
          {
            name: 'FramberValdez',
            team: 'HOU',
            era: 2.27,
          },
          {
            name: 'JonGray',
            team: 'TEX',
            era: 2.32,
          },
          {
            name: 'MarcusStroman',
            team: 'CHC',
            era: 2.42,
          },
          {
            name: 'NathanEovaldi',
            team: 'TEX',
            era: 2.49,
          },
          {
            name: 'JustinSteele',
            team: 'CHC',
            era: 2.65,
          },
          {
            name: 'BryceElder',
            team: 'ATL',
            era: 2.69,
          },
          {
            name: 'LuisCastillo',
            team: 'SEA',
            era: 2.73,
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
  