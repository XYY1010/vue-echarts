<template>
  <div class="box">
    <a-tabs defaultActiveKey="1">
      <a-tabPane tab="人口分布" key="1"><Population /></a-tabPane>
      <a-tabPane tab="生产总量" key="2"><TotalGDP /></a-tabPane>
      <a-tabPane tab="人均生产总值" key="3"><AvgGDP/></a-tabPane>
    </a-tabs>
  </div>
</template>

<script>
import Population from './gdp/population.vue';
import TotalGDP from './gdp/totalgdp.vue';
import AvgGDP from './gdp/avgdp.vue';
export default {
  name: 'gdp',
  components: {
    Population,
    TotalGDP,
    AvgGDP
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.box {
  height: 1000px;
}
</style>
