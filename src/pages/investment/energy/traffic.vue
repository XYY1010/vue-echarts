<template>
    <div>
      <div style="min-height: 700px; margin-top:20px;" ref="echart1"></div>
    </div>
</template>

<script>
export default {
  name: 'traffic',
  mounted() {
    this.initData();
  },
  data() {
    return {
      data: [],
      chart: [],
      cities: [],
      years: [],
      option1: {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: [],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            text: '浙江省各地级市公路里程与民用汽车拥有量',
        },
        color: ['#32cd32','#6495ed', '#ff69b4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
        },
        toolbox: {
          feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
          }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        legend: {
            x: '40%',
            data: ['境内公路里程', '高速公路', '民用汽车拥有量'],
            selected: {
            }
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [
            {
                type:'category',
                axisLabel:{'interval':0},
                data:[],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '距离',
                min: 0,
                max: 17000,
                interval: 1700,
                axisLabel: {
                  formatter: '{value} 公里'
                }
            },
            {
                type: 'value',
                name: '数量',
                min: 30000,
                max: 3000000,
                interval: 297000,
                axisLabel: {
                  formatter: '{value} 辆'
                }
            }
        ],
        series: [
            {name: '境内公路里程', type: 'line'},
            {name: '高速公路', type: 'bar'},
            {name: '民用汽车拥有量', type: 'bar', yAxisIndex: 1},
            {
                name: '高速公路占比',
                type: 'pie',
                center: ['75%', '25%'],
                radius: '20%',
                z: 100
            }
        ]
    },
    options: [
      {
         title: {text: '2007年浙江省各地级市公路里程与民用汽车拥有量'},
         series: [
             {data: []},
             {data: []},
             {data: []},
             {data: [
                 {name: '高速公路', value: 30},
                 {name: '其他公路', value: 70},
             ]}
         ]
     },
     {
        title: {text: '2008年浙江省各地级市公路里程与民用汽车拥有量'},
        series: [
            {data: []},
            {data: []},
            {data: []},
            {data: [
                {name: '高速公路', value: 30},
                {name: '其他公路', value: 70},
            ]}
        ]
    },
    {
       title: {text: '2009年浙江省各地级市公路里程与民用汽车拥有量'},
       series: [
           {data: []},
           {data: []},
           {data: []},
           {data: [
               {name: '高速公路', value: 30},
               {name: '其他公路', value: 70},
           ]}
       ]
   },
   {
      title: {text: '2010年浙江省各地级市公路里程与民用汽车拥有量'},
      series: [
          {data: []},
          {data: []},
          {data: []},
          {data: [
              {name: '高速公路', value: 30},
              {name: '其他公路', value: 70},
          ]}
      ]
  },
  {
     title: {text: '2011年浙江省各地级市公路里程与民用汽车拥有量'},
     series: [
         {data: []},
         {data: []},
         {data: []},
         {data: [
             {name: '高速公路', value: 30},
             {name: '其他公路', value: 70},
         ]}
     ]
 },
 {
    title: {text: '2012年浙江省各地级市公路里程与民用汽车拥有量'},
    series: [
        {data: []},
        {data: []},
        {data: []},
        {data: [
            {name: '高速公路', value: 30},
            {name: '其他公路', value: 70},
        ]}
    ]
},
{
   title: {text: '2013年浙江省各地级市公路里程与民用汽车拥有量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '高速公路', value: 30},
           {name: '其他公路', value: 70},
       ]}
   ]
},
{
   title: {text: '2014年浙江省各地级市公路里程与民用汽车拥有量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '高速公路', value: 30},
           {name: '其他公路', value: 70},
       ]}
   ]
},
{
   title: {text: '2015年浙江省各地级市公路里程与民用汽车拥有量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '高速公路', value: 30},
           {name: '其他公路', value: 70},
       ]}
   ]
},
{
   title: {text: '2016年浙江省各地级市公路里程与民用汽车拥有量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '高速公路', value: 30},
           {name: '其他公路', value: 70},
       ]}
   ]
},
{
   title: {text: '2017年浙江省各地级市公路里程与民用汽车拥有量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '高速公路', value: 30},
           {name: '其他公路', value: 70},
       ]}
   ]
}
    ]
    }
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
                if (this.years.indexOf(this.data[i].year) == -1 && this.data[i].year != "") {
                  this.years.push(this.data[i].year);
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
              description: '无法相关 GDP 数据',
            });
      });
    },
    initChart() {
      this.option1.baseOption.xAxis[0].data = this.cities;
      this.option1.baseOption.timeline.data = this.years;
      for (var i = 0; i < this.years.length; i++) {
        for (var j = 0; j < this.data.length; j++) {
          if (this.years[i] == this.data[j].year && this.data[j].city != "浙东北" && this.data[j].city != "浙西南") {
            this.option1.options[i].series[0].data.push(this.data[j].a);
            this.option1.options[i].series[1].data.push(this.data[j].b);
            this.option1.options[i].series[2].data.push(this.data[j].c);
          }
        }
      }
      for (var i = 0; i < this.years.length; i++) {
        var sumHIGH = 0;
        var sumALL = 0;
        for (var j = 0; j < this.data.length; j++) {
          if (this.data[j].year == this.years[i] && this.data[j].city != "浙东北" && this.data[j].city != "浙西南") {
            if (this.data[j].b == "") {
              this.data[j].b = 0;
            }
            sumHIGH += parseFloat(this.data[j].b);
            sumALL += parseFloat(this.data[j].a);
          }
        }
        this.option1.options[i].series[3].data[0].value = sumHIGH;
        this.option1.options[i].series[3].data[1].value = sumALL - sumHIGH;
      }
      this.chart = this.$echarts.init(this.$refs.echart1);
      // 把配置和数据放这里
      this.chart.setOption(this.option1);
    }
  }
}
</script>

<style scoped>
</style>
