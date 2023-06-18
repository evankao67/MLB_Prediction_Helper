<template>
    <div>
      <v-container>
        <v-card class="bg-gamebgcolor" style= "height:50px;">
          <v-row align="center" no-gutters>
            <v-col>
              <v-btn class="material-symbols-outlined bg-buttonbgcolor" style= "height:50px;" @click="decreaseDay">
                arrow_back_ios
              </v-btn>
            </v-col>
            <v-col cols="10">
              <v-sheet class="bg-gamebgcolor text-center">
                {{ formattedDate }}
              </v-sheet>
            </v-col>
            <v-col>
              <v-btn class="material-symbols-outlined bg-buttonbgcolor ml-9" style= "height:50px;" @click="increaseDay">
                arrow_forward_ios
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row>
        <v-col cols="6" v-for="project in projects" :key="project.ip">
          <v-card class="ma-3 px-16 py-10 bg-gamebgcolor rounded-xl">
            <v-row>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.ip }}
                </v-sheet>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-sheet class="bg-gamebgcolor" style="white-space: nowrap;">
                  <img :src="getImageUrl(project.team1img)" alt="" class="player-image" />
                    {{ project.team1img }}
                </v-sheet>
              </v-col>
                <v-col>
                  <v-sheet class="bg-gamebgcolor text-end">
                    {{ project.score1 }}
                  </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="bg-gamebgcolor text-center">
                        {{ project.rate1 }}
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="bg-gamebgcolor text-center">
                        {{ project.loss1 }}
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-sheet class="bg-gamebgcolor" style="white-space: nowrap;">
                  <img :src="getImageUrl(project.team2img)" alt="" class="player-image" />
                    {{ project.team2img }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-end">
                  {{ project.score2 }}
                </v-sheet>
              </v-col>
              <v-col>
                    <v-sheet class="bg-gamebgcolor text-center">
                        {{ project.rate2 }}
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="bg-gamebgcolor text-center">
                        {{ project.loss2 }}
                    </v-sheet>
                </v-col>
            </v-row>
        </v-card> 
      </v-col>
      </v-row>
    </v-container>
    </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    data(){
      return{
        projects: [
          { ip: 'FINAL/10', team1img: 'New York Yankees', score1: '3', rate1: '56.5', loss1: '1.60', team2img: 'New York Mets', score2: '4', rate2: '47.1', loss2: '1.90'},
          { ip: 'BOT 7', team1img:'Colorado Rockies', score1: '2', rate1: '41.4', loss1: '1.70', team2img: 'Boston Red Sox', score2: '6', rate2: '49.3', loss2: '1.80'},
          {ip: 'MID 6' ,team1img: 'Cleveland Guardians', score1: '0', rate1: '46.3', loss1: '3.10', team2img: 'San Diego Padres', score2: '2', rate2: '49.3', loss2: '1.20'},
          { ip: 'MID 7' ,team1img:'Philadelphia Phillies', score1: '3', rate1: '50', loss1: '1.45', team2img: 'Arizona Diamondbacks', score2: '0', rate2: '60.2', loss2: '2.15'},
          { ip: 'BOT 4' , team1img: 'Chicago White Sox', score1: '2', rate1: '43.5', loss1: '1.95', team2img: 'Los Angeles Dodgers', score2: '0', rate2: '55.8', loss2: '1.55'},
          { ip: 'FINAL' , team1img: 'Atlanta Braves', score1: '10', rate1: '61.7', loss1: '2.60', team2img: 'Detroit Tigers', score2: '7', rate2: '40.9', loss2: '1.30'},
          { ip: 'FINAL' , team1img: 'Pittsburgh Pirates', score1: '6', rate1: '51.5', loss1: '2.30', team2img: 'Chicago Cubs', score2: '10', rate2: '44.8', loss2: '1.40'},
          { ip: 'FINAL' , team1img: 'Atlanta Braves', score1: '6', rate1: '61.7', loss1: '1.60', team2img: 'Detroit Tigers', score2: '5', rate2: '40.9', loss2: '1.90'},
        ],
        currentDate: new Date(),
        formattedDate: ''
      };
    },
    components: {
      Header
    },
    mounted() {
    this.updateFormattedDate();
  },
  methods: {
    decreaseDay() {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
      this.updateFormattedDate();
    },
    increaseDay() {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      this.updateFormattedDate();
    },
    updateFormattedDate() {
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      this.formattedDate = this.formatDate(this.currentDate, options);
    },
    formatDate(date, options) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const dayOfWeek = daysOfWeek[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = monthsOfYear[date.getMonth()];

      return `${dayOfWeek}, ${dayOfMonth}, ${month}`;
    },
    getImageUrl(name) {
        // 根据球员名称动态生成图片路径
        return `/src/assets/images/${name}.jpg`;
      },
    },
  };
  // 组件的其他选项和逻辑
</script>

<style>
  .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.player-image {
    width: 30px; /* 根据需要设置图片的宽度 */
    height: auto; /* 根据需要设置图片的高度 */
    margin-right: 5px; /* 根据需要设置图片与名称之间的间距 */
}
</style>