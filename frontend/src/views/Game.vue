<template>
    <Header />
    <h1>當日賽程</h1>
    <v-menu max-width="290">
      <template v-slot:activator="{ on }">
        <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="due"></v-date-picker>
    </v-menu>
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
        due: null
      }
    },
    components: {
      Header
    },
  // 组件的其他选项和逻辑
  }
</script>