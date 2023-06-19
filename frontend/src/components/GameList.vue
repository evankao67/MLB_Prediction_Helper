<template>
  <div>
    <v-container>
      <v-card class="bg-gamebgcolor" height="50">
        <v-row align="center" no-gutters>
          <v-col>
            <v-btn class="material-symbols-outlined bg-buttonbgcolor" height="50" @click="decreaseDay">
              arrow_back_ios
            </v-btn>
          </v-col>
          <v-col>
            <v-sheet class="bg-gamebgcolor text-center">
              {{ formattedDate }}
            </v-sheet>
          </v-col>
          <v-col align="right">
            <v-btn class="material-symbols-outlined bg-buttonbgcolor" height="50" @click="increaseDay">
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
        <v-col cols="6" v-for="project in matches" :key="project.ip">
          <v-card class="ma-3 px-16 py-10 bg-gamebgcolor rounded-xl">
            <v-row>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  (Title here)
                </v-sheet>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-sheet class="bg-gamebgcolor">
                  Team
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  Score
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  Rate
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  Odds
                </v-sheet>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-sheet class="bg-gamebgcolor" style="white-space: nowrap;">
                  <img :src="getImageUrl(project.team_home)" alt="" class="player-image" />
                  {{ project.team_home }}
                  <v-chip class="ma-2" color="green-accent-2" variant="outlined" v-if="project.team_home_bet">
                    recommened!!
                  </v-chip>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-end">
                  {{ project.home_score }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.team_home_winchance }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.team_home_odds }}
                </v-sheet>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-sheet class="bg-gamebgcolor" style="white-space: nowrap;">
                  <img :src="getImageUrl(project.team_away)" alt="" class="player-image" />
                  {{ project.team_away }}
                  <v-chip class="ma-2" color="green-accent-2" variant="outlined" v-if="project.team_away_bet">
                    recommened!!
                  </v-chip>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-end">
                  {{ project.away_score }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.team_away_winchance }}
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="bg-gamebgcolor text-center">
                  {{ project.team_away_odds }}
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
import axios from 'axios'

export default {
  data() {
    return {
      matches: {},
      teams: {},
      currentDate: new Date(),
      formattedDate: ''
    };
  },
  components: {
    Header
  },
  mounted() {
    this.updateFormattedDate();
    axios
      .get('http://localhost:3001/api/teams')
      .then(response => {
        this.teams = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    this.updateGames();
  },
  methods: {
    decreaseDay() {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
      this.updateFormattedDate();
      this.updateGames();
    },
    increaseDay() {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      this.updateFormattedDate();
      this.updateGames();
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
      this.teams.map((team) => {
        if (team.team_id == name)
          name = team.team_name;
      });
      return `/src/assets/images/${name}.jpg`;
    },
    trimData() {
      this.matches.map((match) => {
        match.team_away_winchance = Number.parseFloat(match.team_away_winchance).toFixed(2);
        match.team_home_winchance = Number.parseFloat(1 - match.team_away_winchance).toFixed(2);
        match.team_away_odds = Number.parseFloat(match.team_away_odds).toFixed(2);
        match.team_home_odds = Number.parseFloat(match.team_home_odds).toFixed(2);
        match.score1 = '-';
        match.score2 = '-';
        match.team_away_bet = this.isRecommended(match.team_away_winchance, match.team_away_odds);
        match.team_home_bet = this.isRecommended(match.team_home_winchance, match.team_home_odds);
      })
      return;
    },
    async updateGames() {
      this.matches = {}
      let dateStr =
        this.currentDate.getFullYear() + "-" + (this.currentDate.getMonth() + 1) + "-" + this.currentDate.getDate();
      await axios
        .get('http://localhost:3001/api/match/getByDate?date=' + dateStr)
        .then(response => {
          this.matches = response.data;
          console.log(response.data);
          this.trimData();
        })
        .catch(error => {
          console.error(error);
        });
      return;
    },
    isRecommended(winChance, odd) {
      //y = 4.7033-0.0509x by observed
      return odd >= 4.7033 - 0.0509 * winChance;
    }
  },
};
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
  width: 30px;
  height: auto;
  margin-right: 5px;
}
</style>