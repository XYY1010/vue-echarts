<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tabPane tab="固定资产投资" key="1"><Fix/></a-tabPane>
      <a-tabPane tab="房地产相关数据" key="2"><RealEstate/></a-tabPane>
    </a-tabs>
  </div>
</template>

<script>
import Fix from "./fix_investment/fix.vue";
import RealEstate from "./fix_investment/realestate.vue";
export default {
  name: "fix_investment",
  data() {
    return {

    }
  },
  components: {
    Fix,
    RealEstate
  }
}
</script>

<style scoped>
</style>
