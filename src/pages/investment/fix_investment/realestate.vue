<template>
  <div>
    <div style="text-align: center;">
      <a-radio-group defaultValue="2017" @change="handleChange" buttonStyle="solid">
        <a-radio-button value="2007">2007</a-radio-button>
        <a-radio-button value="2008">2008</a-radio-button>
        <a-radio-button value="2009">2009</a-radio-button>
        <a-radio-button value="2010">2010</a-radio-button>
        <a-radio-button value="2011">2011</a-radio-button>
        <a-radio-button value="2012">2012</a-radio-button>
        <a-radio-button value="2013">2013</a-radio-button>
        <a-radio-button value="2014">2014</a-radio-button>
        <a-radio-button value="2015">2015</a-radio-button>
        <a-radio-button value="2016">2016</a-radio-button>
        <a-radio-button value="2017">2017</a-radio-button>
      </a-radio-group>
    </div>
      <div>
        <div style="min-height:320px; margin-top: 20px;" ref="echart1"></div>
        <div style="min-height:320px; margin-top: 20px;" ref="echart2"></div>
      </div>
  </div>
</template>

<script>
import ZJ from '../../../db/zhejiang.json';
export default {
  name: 'realestate',
  mounted() {
    this.initData();
  },
  data() {
    return {
      data: [],
      chart: null,
      cities: [],
      investhome: [],
      year: 2017,
      option1: {
  			title : {
          text: '浙江省各地级市住宅投资（2017年）',
          subtext: '单位：亿元',
  			},
  			tooltip : {
  				trigger : 'item'
  			},
  			legend : {
  				orient : 'vertical',
  				x : 'left',
  				data : [ '' ]
  			},
  			dataRange : {
  				min : 100,
  				max : 2000,
  				x : 'left',
  				y : 'bottom',
  				color : [ 'red', 'orangered', 'yellow', 'lightgreen', 'blue', 'lightskyblue'],
  				text : [ '高', '低' ], // 文本，默认为数值文本
  				calculable : true
  			},
  			series : [ {
  				name : '浙住宅投资',
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
  				data : [],
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
          }
        ]
      },
      option2: {
  			title : {
          text: '浙江省各地级市商品房屋销售面积（2017年）',
          subtext: '单位：万平方米',
  			},
  			tooltip : {
  				trigger : 'item'
  			},
  			legend : {
  				orient : 'vertical',
  				x : 'left',
  				data : [ '' ]
  			},
  			dataRange : {
  				min : 100,
  				max : 2000,
  				x : 'left',
  				y : 'bottom',
  				color : [ 'red', 'orangered', 'yellow', 'lightgreen', 'blue', 'lightskyblue'],
  				text : [ '高', '低' ], // 文本，默认为数值文本
  				calculable : true
  			},
  			series : [ {
  				name : '商品房屋销售面积',
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
  				data : [],
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
          }
        ]
		   }
    }
  },
  methods: {
    initData() {
      this.$axios({
            method: 'get',
            url: '/fix-investment/allrecords',
          }).then(res => {
            let result = res.data;
            let status = result.status;
            if (status == 200) {
              this.data = result.data;
              for (var i = 0; i < this.data.length; i++) {
                if (this.cities.indexOf(this.data[i].city) == -1 && this.data[i].city != "浙东北" && this.data[i].city != "浙西南") {
                    this.cities.push(this.data[i].city);
                }
              }
              for (var i = 0; i < this.cities.length; i++) {
                if (this.cities[i] == "其中：义乌市") {
                  this.cities[i] = "义乌市";
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
              description: '无法相关固定资产投资数据',
            });
      });
    },
    initChart() {
      this.option1.series[0].data = [];
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].year == this.year && this.data[i].city != "浙东北" && this.data[i].city != "浙西南" && this.data[i].city != "其中：义乌市") {
          this.option1.series[0].data.push({name:this.data[i].city, value: this.data[i].f});
        }
      }
      this.option2.series[0].data = [];
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].year == this.year && this.data[i].city != "浙东北" && this.data[i].city != "浙西南" && this.data[i].city != "其中：义乌市") {
          this.option2.series[0].data.push({name:this.data[i].city, value: this.data[i].h});
        }
      }
      this.$echarts.registerMap('ZJ', ZJ);
      this.chart = this.$echarts.init(this.$refs.echart1);
      // 把配置和数据放这里
      this.chart.setOption(this.option1);

      this.chart = this.$echarts.init(this.$refs.echart2);
      // 把配置和数据放这里
      this.chart.setOption(this.option2);
    },
    beforeDestroy() {
      if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
    handleChange(e) {
      this.year = e.target.value;
      this.option1.title.text = "浙江省各地级市住宅投资（"+ this.year +"年）";
      this.option2.title.text = "浙江省各地级市商品房屋销售面积（"+ this.year +"年）";
      this.initChart();
    }
  }
}
</script>

<style scoped>
</style>
