<template>
  <div>
    <div style="min-height:700px;" ref="echart"></div>
  </div>
</template>

<script>
import ZJ from '../../../db/zhejiang.json';
export default {
  name: 'population',
  mounted(){
    this.initData();
  },
  data() {
    return {
      financial_data: [],
      city: [],
      years: [],
      chart: null,
      option: {
  			title : {
          text: '浙江省各市人口分布 （2017）',
          subtext: '单位：万人',
  			},
  			tooltip : {
  				trigger : 'item'
  			},
  			legend : {
  				orient : 'vertical',
  				x : 'left',
  				data : [ '年末总人口数' ]
  			},
  			dataRange : {
  				min : 0,
  				max : 1000,
  				x : 'left',
  				y : 'bottom',
  				color : [ 'orangered', 'yellow', 'lightskyblue'],
  				text : [ '高', '低' ], // 文本，默认为数值文本
  				calculable : true
  			},
  			series : [ {
  				name : '浙江省各市人口分布',
  				type : 'map',
  				mapType : 'ZJ',
  				itemStyle : {
  					normal : {
  						label : {
  							show : true
  						}
  					},
  					emphasis : {
  						label : {
  							show : true
  						}
  					}
  				},
  				data : [
            {name:'湖州市', value:299.50},
            {name:'嘉兴市', value:465.60},
            {name:'绍兴市', value:501.00},
            {name:'衢州市', value:218.50},
            {name:'金华市', value:556.40},
            {name:'台州市', value:611.80},
            {name:'舟山市', value:116.80},
            {name:'宁波市', value:800.50},
            {name:'丽水市', value:218.60},
            {name:'温州市', value:921.50},
            {name:'杭州市', value:946.80}],
                // 自定义名称映射
                nameMap: {
                    '湖州市': '湖州市',
                    '嘉兴市': '嘉兴市',
                    '绍兴市': '绍兴市',
                    '衢州市': '衢州市',
                    '金华市': '金华市',
                    '台州市': '台州市',
                    '舟山市': '舟山市',
                    '宁波市': '宁波市',
                    '丽水市': '丽水市',
                    '温州市': '温州市',
                    '杭州市': '杭州市'
                }
        }]
		   }
    }
  },
  methods: {
    initData() {
        this.$axios({
              method: 'get',
              url: '/financial/allrecords',
            }).then(res => {
              let result = res.data;
              let status = result.status;
              if (status == 200) {
                this.financial_data = result.data;
                for (var i = 0; i < this.financial_data.length; i++) {
                  if (this.city.indexOf(this.financial_data[i].city) == -1 && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
                    this.city.push(this.financial_data[i].city);
                  }
                  if (this.years.indexOf(this.financial_data[i].year) == -1 && this.financial_data[i].year != "") {
                    this.years.push(this.financial_data[i].year);
                  }
                }
                for (var i = 0; i < this.city.length; i++) {
                  if (this.city[i] == "其中：义乌市") {
                    this.city[i] = "义乌市";
                  }
                }
                this.initChart();
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
                description: '无法相关 GDP 数据',
              });
        });
    },
    initChart() {
      this.$echarts.registerMap('ZJ', ZJ);
      this.chart = this.$echarts.init(this.$refs.echart);
      // 把配置和数据放这里
      this.chart.setOption(this.option)
    },
    beforeDestroy() {
      if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
  }
}
</script>

<style scoped>
</style>
