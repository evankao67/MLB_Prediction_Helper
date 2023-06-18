<template>
  <div>
    <Header />
    <Background />
    <h1>投手排行</h1>
    <v-btn-toggle v-model="pitcher_selector" rounded="8" color="deep-purple-accent-3" group>
      <v-btn value="ERA">
        自責分
      </v-btn>
      <v-btn value="WHIP">
        WHIP
      </v-btn>
      <v-btn value="win">
        勝投數
      </v-btn>
      <v-btn value="lose">
        敗投數
      </v-btn>
    </v-btn-toggle>
    <Table v-if="pitcher_selector == 'ERA'" />
    <Table_Whip v-if="pitcher_selector == 'WHIP'" />
    <Table_Win v-if="pitcher_selector == 'win'" />
    <Table_Lose v-if="pitcher_selector == 'lose'" />
    <h1>打者排行</h1>
    <v-btn-toggle v-model="batter_selector" rounded="8" color="deep-purple-accent-3" group>
      <v-btn value="hit">
        打擊率
      </v-btn>
      <v-btn value="HR">
        全壘打
      </v-btn>
      <v-btn value="OPS">
        OPS
      </v-btn>
    </v-btn-toggle>
    <Table_Bat v-if="batter_selector == 'hit'" />
    <Table_Bat_Hr v-if="batter_selector == 'HR'"/>
    <Table_Bat_Ops v-if="batter_selector == 'OPS'"/>
    <h1>隊伍排行</h1>
    <Table_Team />
    <Background />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Table from '../components/Table.vue'
import Table_Bat from '../components/Table_bat.vue'
import Table_Team from '../components/Table_team.vue'
import Table_Bat_Hr from '../components/Table_bat_hr.vue'
import Table_Bat_Ops from '../components/Table_bat_ops.vue'
import Table_Whip from '../components/Table_whip.vue'
import Table_Win from '../components/Table_win.vue'
import Table_Lose from '../components/Table_lose.vue'
import Background from '../components/background.vue'
export default {
  components: {
    Header,
    Table,
    Table_Bat,
    Table_Team,
    Table_Bat_Hr,
    Table_Bat_Ops,
    Table_Whip,
    Table_Win,
    Table_Lose,
    Background,
  },
  data() {
    return {
      pitcher_selector: 'ERA',
      batter_selector: 'hit',
    }
  }
}
</script>
