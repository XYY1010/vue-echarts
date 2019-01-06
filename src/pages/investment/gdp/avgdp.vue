<template>
  <div>
    <div style="min-height: 400px;" ref="echart1"></div>
  </div>
</template>

<script>
export default {
  name: 'avgdp',
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
            text: '2007-2017年宁波、杭州、绍兴、金华、温州、嘉兴等市人均生产总值'
          },
          color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                  '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0', '#69e0d0'],
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
            y:'5%',
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
                name:'单位：元',
                min:'0',
                max:'150000',
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
        this.option.xAxis.data.push(this.years[i] + '年');
      }
      for (var i = 0; i < this.city.length; i++) {
        this.option.legend.data.push(this.city[i]);
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "杭州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[0].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "宁波市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[1].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "嘉兴市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[2].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "湖州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[3].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "绍兴市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[4].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "舟山市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[5].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "温州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[6].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "金华市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[7].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "其中：义乌市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[8].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "衢州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[9].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "台州市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[10].data.push(this.financial_data[i].gdp_average);
        }
      }
      for (var i = 0; i < this.financial_data.length; i++) {
        if (this.financial_data[i].city == "丽水市" && this.financial_data[i].city != "浙东北" && this.financial_data[i].city != "浙西南") {
          this.option.series[11].data.push(this.financial_data[i].gdp_average);
        }
      }
      this.chart = this.$echarts.init(this.$refs.echart1);
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
