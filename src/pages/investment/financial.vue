<template>
  <div>
    <div style="text-align: center;">
      <a-radio-group defaultValue="杭州市" size="large" @change="handleChange" buttonStyle="solid">
        <a-radio-button value="杭州市">杭州市</a-radio-button>
        <a-radio-button value="宁波市">宁波市</a-radio-button>
        <a-radio-button value="衢州市">衢州市</a-radio-button>
        <a-radio-button value="温州市">温州市</a-radio-button>
        <a-radio-button value="湖州市">湖州市</a-radio-button>
        <a-radio-button value="嘉兴市">嘉兴市</a-radio-button>
        <a-radio-button value="绍兴市">绍兴市</a-radio-button>
        <a-radio-button value="台州市">台州市</a-radio-button>
        <a-radio-button value="金华市">金华市</a-radio-button>
        <a-radio-button value="舟山市">舟山市</a-radio-button>
        <a-radio-button value="丽水市">丽水市</a-radio-button>
        <a-radio-button value="义乌市">义乌市</a-radio-button>
      </a-radio-group>
    </div>
    <div>
      <div style="min-height: 700px; margin-top:20px;" ref="echart1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'financial',
  mounted() {
    this.initData();
  },
  data() {
    return {
      financial_data: [],
      hz_totalrevenue: [],
      hz_localrevenue: [],
      hz_localexpenditure: [],
      city: "杭州市",
      lableOption: {
            show: true,
            position: 'insideBottom',
            distance: 15,
            align: 'left',
            verticalAlign: 'middle',
            rotate: 90,
            formatter: '{c}  {name|{a}}',
            fontSize: 14,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
      },
      option1: {
        title: {
          text: '2007年-2017年杭州市财政支出、收入数据',
          subtext: '单位：亿元',
          x: 'center',
          y: 'top',
        },
        color: ['#FF6A6A', '#9ACD32', '#0000EE'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['财政总收入', '地方财政收入', '地方财政支出'],
            x: '70%',
            y: '0',
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                name:'年',
                data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            }
        ],
        yAxis: [
            {
                name:'单位：亿元',
                type: 'value'
            }
        ],
        series: [
            {
                name: '财政总收入',
                type: 'line',
                barGap: 0,
                label: {},
                data: []
            },
            {
                name: '地方财政收入',
                type: 'bar',
                label: {},
                data: []
            },
            {
                name: '地方财政支出',
                type: 'bar',
                label: {},
                data: []
            }
        ]
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
                this.hz_totalrevenue = [];
                this.hz_localrevenue = [];
                this.hz_localexpenditure = [];
                for (var i = 0; i < this.financial_data.length; i++) {
                  if (this.city == "义乌市") {
                    this.city = "其中：义乌市";
                  }
                  if(this.city == this.financial_data[i].city) {
                    this.hz_totalrevenue.push(this.financial_data[i].finacial_total);
                    this.hz_localrevenue.push(this.financial_data[i].financial_local_income);
                    this.hz_localexpenditure.push(this.financial_data[i].financial_local_expend);
                  }
                }
                this.initChart1();
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
                description: '无法相关财政数据',
              });
        });
    },
    initChart1() {
      this.option1.series[0].data = [];
      this.option1.series[1].data = [];
      this.option1.series[2].data = [];
      this.option1.series[0].label = this.labelOption;
      this.option1.series[1].label = this.labelOption;
      this.option1.series[2].label = this.labelOption;
      for (var i = 0; i < this.hz_totalrevenue.length; i++) {
        this.option1.series[0].data.push(this.hz_totalrevenue[i]);
      }
      for (var i = 0; i < this.hz_localrevenue.length; i++) {
        this.option1.series[1].data.push(this.hz_localrevenue[i]);
      }
      for (var i = 0; i < this.hz_localexpenditure.length; i++) {
        this.option1.series[2].data.push(this.hz_localexpenditure[i]);
      }
      this.chart = this.$echarts.init(this.$refs.echart1);
      // 把配置和数据放这里
      this.chart.setOption(this.option1)
    },
    beforeDestroy() {
      if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
    handleChange(e) {
      this.city = e.target.value;
      this.option1.title.text = "2007年-2017年"+ this.city +"财政支出、收入数据";
      this.initData();
    }
  }
}
</script>

<style scoped>
</style>
