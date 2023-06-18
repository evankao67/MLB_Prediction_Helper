<template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Team</th>
          <th class="text-left">HR</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mlbplayer" :key="item.name">
          <td>
            <img :src="getImageUrl(item.name)" alt="Player Image" class="player-image" />
            {{ item.name }}
          </td>
          <td>{{ item.team }}</td>
          <td>{{ item.hr }}</td>
 
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
            
            hr: 12,
          },
          {
            name: 'ShoheiOhtani',
            team: 'LAA',
            
            hr: 13,
          },
          {
            name: 'RonaldAcuna',
            team: 'ATL',
            
            hr: 14,
        
          },
          {
            name: 'FreddieFreeman',
            team: 'LAD',
            
            hr: 15,
           
          },
          {
            name: 'YordanAlvarez',
            team: 'HOU',
            
            hr: 16,
          
          },
          {
            name: 'YandyDiaz',
            team: 'TB',
            
            hr: 17,
          },
          {
            name: 'JorgeSoler',
            team: 'MIA',
            
            hr: 14,
 
          },
          {
            name: 'JackSuwinski',
            team: 'PIT',
            
            hr: 13,
   
          },
          {
            name: 'SeanMurphy',
            team: 'ATL',
            
            hr: 35,
  
          },
          {
            name: 'FernandoTatis',
            team: 'SD',
            
            hr: 38,

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
  