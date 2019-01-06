<template>
  <div>
    <div style="min-height: 700px; margin-top:20px;" ref="echart1"></div>
  </div>
</template>

<script>
export default {
  name:'energy',
  mounted() {
    this.initData();
  },
  data() {
    return {
      data: [],
      cities: [],
      years: [],
      chart: null,
    }
  },
  methods: {
    initData() {
      this.$axios({
            method: 'get',
            url: '/energy/allrecords',
          }).then(res => {
            let result = res.data;
            let status = result.status;
            if (status == 200) {
              this.data = result.data;
              for (var i = 0; i < this.data.length; i++) {
                if (this.cities.indexOf(this.data[i].city) == -1 && this.data[i].city != "浙东北" && this.data[i].city != "浙西南") {
                    this.cities.push(this.data[i].city);
                }
                if (this.years.indexOf(this.data[i].year) == -1) {
                  this.years.push(this.data[i].year);
                }
              }
              for (var i = 0; i < this.cities.length; i++) {
                if (this.cities[i] == "其中：义乌市") {
                  this.cities[i] = "义乌市";
                }
              }
            } else {
              this.$notification.open({
                message: '错误',
                description: result.msg
              });
            }
          }).catch(err => {
            console.log('通信失败，请稍后再试');
            this.$notification.open({
              message: '错误',
              description: '无法相关能源数据数据',
            });
      });
    }
  }
}
</script>

<style scoped>
</style>
