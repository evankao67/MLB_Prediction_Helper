<template>
  <div>
    <Header />
    <h1>投手排行(自責分)</h1>
    <Table />
    <br />
    <h1>投手排行(WHIP)</h1>
    <Table_Whip />
    <br />
    <h1>打者排行(打擊率)</h1>
    <Table_Bat />
    <br />
    <h1>打者排行(全壘打)</h1>
    <Table_Bat_Hr />
    <br />
    <h1>打者排行(OPS)</h1>
    <Table_Bat_Ops />
    <br />
    <h1>隊伍排行</h1>
    <Table_Team />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Table from '../components/Table.vue'
  import Table_Bat from '../components/Table_bat.vue'
  import Table_Team from'../components/Table_team.vue'
  import Table_Bat_Hr from'../components/Table_bat_hr.vue'
  import Table_Bat_Ops from'../components/Table_bat_ops.vue'
  import Table_Whip from'../components/Table_whip.vue'
  export default {
    components: {
      Header,
      Table,
      Table_Bat,
      Table_Team,
      Table_Bat_Hr,
      Table_Bat_Ops,
      Table_Whip,
    },
    // 组件的其他选项和逻辑
  }
</script>
