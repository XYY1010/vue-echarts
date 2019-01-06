<template>
  <div>
    <div style="min-height: 400px;" ref="echart1"></div>
    <div style="min-height: 300px;" ref="echart2"></div>
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
  </div>
</template>

<script>
export default {
  name: 'totalgdp',
  mounted(){
    this.initData();
  },
  data() {
    return {
      legendData: [],
      seriesData: [],
      selected: {},
      financial_data: [],
      city: [],
      years: [],
      year: 2007,
      chart: null,
      option1: {
          title: {
            x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'top',
            //textAlign: null
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',       // 标题边框颜色
            borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
            itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#000'          // 主标题文字颜色
            },
            text: '2007-2017年宁波、杭州、绍兴、金华、温州、嘉兴等市生产总值'
          },
          color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                  '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0', '#69e0d0', '#191970'],
          tooltip : { trigger: 'axis' },
          //图例--折线提示提示
          legend: {
              x: '91%',
              y: '0',
              borderColor: '#6699FF',//边框颜色
              textStyle: {
                color: '#1e90ff'          // 图例文字颜色
              },
              data:[]
          },
          //右上角的工具箱
          toolbox: {
            x:'83%',
            y:'top',
            show : true,
            feature : {
              mark : {show: true},
              //是否可以保存图片
              saveAsImage : {show: true},
              //dataView : '数据视图',
              dataView:{show: true},
            }
          },
          calculable : true,
            xAxis:{
              data:[],
            },
            yAxis : [
              {
                type : 'value',
                name:'单位：亿元',
                min:'0',
                max:'15000',
                splitNumber: 20
              }
            ],
            series : [{
              type:'line',
              name:'杭州市',
              data:[]
            },{
              type:'line',
              name:'宁波市',
              data:[]
            },{
              type:'line',
              name:'嘉兴市',
                data:[]
            },{
              type:'line',
              name:'湖州市',
              data:[]
            },{
              type:'line',
              name:'绍兴市',
              data:[]
            },{
              type:'line',
              name:'舟山市',
              data:[]
            },{
              type:'line',
              name:'温州市',
                data:[]
            },{
              type:'line',
              name:'金华市',
              data:[]
            },{
              type:'line',
              name:'义乌市',
              data:[]
            },{
              type:'line',
              name:'衢州市',
              data:[]
            },{
              type:'line',
              name:'台州市',
                data:[]
            },{
              type:'line',
              name:'丽水市',
                data:[]
            }
          ]
      },
      option2: {
        title : {
          text: '2017 年浙江省各地级市生产总量比例',
          subtext: '单位%',
          x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0', '#1E90FF', '#191970'],
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: [],
            selected: {}
        },
        series : [
            {
                name: '城市名',
                type: 'pie',
                radius : '55%',
                center: ['40%', '50%'],
                data: [],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
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
                description: '无法相关 GDP 数据',
              });
        });
    },
    initChart1() {
      for (var i = 0; i < this.years.length; i++) {
        this.option1.xAxis.data.push(this.years[i] + '年');
      }
      for (var i = 0; i < this.city.length; i++) {
        this.option1.legend.data.push(this.city[i]);
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "杭州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[0].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "宁波市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[1].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "嘉兴市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[2].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "湖州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[3].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "绍兴市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[4].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "舟山市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[5].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "温州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[6].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "金华市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[7].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "其中：义乌市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[8].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "衢州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[9].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "台州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[10].data.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "丽水市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option1.series[11].data.push(this.financial_data[i].gdp);
        }
      }
      this.chart = this.$echarts.init(this.$refs.echart1);
      // 把配置和数据放这里
      this.chart.setOption(this.option1);
      this.genData();
      console.log(this.selected);
      this.chart = this.$echarts.init(this.$refs.echart2);
      // 把配置和数据放这里
      this.chart.setOption(this.option2);
    },
    beforeDestroy() {
      if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
    genData() {
      this.legendData = this.city;
      this.seriesData = [];
      this.selected = {};
      var values = [];
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].year == this.year && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          values.push(this.financial_data[i].gdp);
        }
      }
      for (var i = 0; i < this.legendData.length; i++) {
          var temp = this.legendData[i];
          this.seriesData.push({
              name: this.legendData[i],
              value: values[i]
          });
          this.selected[temp] = 1;
      }
      this.option2.legend.data = this.legendData;
      this.option2.legend.selected = this.selected;
      this.option2.series[0].data = this.seriesData;
    },
    handleChange(e) {
      this.year = e.target.value;
      this.option2.title.text = this.year + " 年浙江省各地级市生产总量比例";
      this.genData();
      this.chart = this.$echarts.init(this.$refs.echart2);
      // 把配置和数据放这里
      this.chart.setOption(this.option2);
    }
  },
  computed: {

  }

}
</script>

<style scoped>
</style>
