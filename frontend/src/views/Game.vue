<template>
    <Header />
    <h1>當日賽程</h1>
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
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center" style="white-space: nowrap;">
                  {{ project.team1 }}
                </v-sheet>
              </v-col>
                <v-col>
                  <v-sheet class="bg-gamebgcolor text-center">
                    {{ project.score1 }}
                  </v-sheet>
                </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center" style="white-space: nowrap;">
                  {{ project.team2 }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.score2 }}
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
          { ip: 'FINAL/10', team1: 'Yankees', score1: '3', team2: 'Mets', score2: '4'},
          { ip: 'BOT 7', team1: 'Rockies', score1: '2', team2: 'Red Sox', score2: '6'},
          {ip: 'MID 6' ,team1: 'Guardians', score1: '0', team2: 'Padres', score2: '2'},
          { ip: 'MID 7' ,team1: 'Phillies', score1: '3', team2: 'D-backs', score2: '0'},
          { ip: 'BOT 4' ,team1: 'White Sox', score1: '2', team2: 'Dodgers', score2: '0'},
          { ip: 'FINAL' ,team1: 'Braves', score1: '10', team2: 'Tigers', score2: '7'},
          { ip: 'FINAL' ,team1: 'Braves', score1: '6', team2: 'Tigers', score2: '5'},
          {ip: 'FINAL' ,team1: 'Pirates', score1: '6', team2: 'Cubs', score2: '10'},
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
    }
  }
  }
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
</style>