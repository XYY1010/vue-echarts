<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tabPane tab="公路里程数据" key="1"><Traffic/></a-tabPane>
      <a-tabPane tab="邮电通信数据" key="2"><Communication/></a-tabPane>
      <a-tabPane tab="用电量情况数据" key="3"><PowerConsumption/></a-tabPane>
    </a-tabs>
  </div>
</template>

<script>
import Traffic from "./energy/traffic.vue";
import Communication from "./energy/communication.vue";
import PowerConsumption from "./energy/powerconsumption.vue";
export default {
  name:'energy',
  data() {
    return {
    }
  },
  components: {
    Traffic,
    Communication,
    PowerConsumption
  }
}
</script>

<style scoped>
</style>
