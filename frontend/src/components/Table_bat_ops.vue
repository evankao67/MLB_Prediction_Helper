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
        <tr v-for="item in mlbplayer" :key="item.name">
          <td>
            <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" />
            {{ item.name }}
          </td>
          <td>{{ item.team }}</td>
          <td>{{ item.ops }}</td>
 
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
            name: 'CorbinCarroll',
            team: 'AZ',
            ops: .311,
          },
          {
            name: 'ShoheiOhtani',
            team: 'LAA',
            ops: .299,
          },
          {
            name: 'RonaldAcuna',
            team: 'ATL',
            ops: .333,
        
          },
          {
            name: 'FreddieFreeman',
            team: 'LAD',
            ops: .331,
           
          },
          {
            name: 'YordanAlvarez',
            team: 'HOU',
            ops: .277,
          
          },
          {
            name: 'YandyDiaz',
            team: 'TB',
            ops: .311,
          },
          {
            name: 'JorgeSoler',
            team: 'MIA',
            ops: .258,
 
          },
          {
            name: 'JackSuwinski',
            team: 'PIT',
            ops: .249,
   
          },
          {
            name: 'SeanMurphy',
            team: 'ATL',
            ops: .276,
  
          },
          {
            name: 'FernandoTatis',
            team: 'SD',
            ops: .283,

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
  