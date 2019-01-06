<template>
  <div>
    <div style="min-height: 700px; margin-top:20px;" ref="echart1"></div>
  </div>
</template>

<script>
export default {
  name: 'communication',
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
            text: '浙江省各地级市固定电话、移动电话、国际互联网用户数量',
        },
        color: ['#8B4726','#00FF00', '#0000CD'],
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
            x: '50%',
            data: ['固定电话用户量', '移动电话用户量', '国际互联网用户量'],
            selected: {
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
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
                name: '用户量',
                axisLabel: {
                  formatter: '{value} 万户'
                }
            }
        ],
        series: [
            {name: '固定电话用户量', type: 'bar'},
            {name: '移动电话用户量', type: 'bar'},
            {name: '国际互联网用户量', type: 'bar'},
            {
                name: '用户量占比',
                type: 'pie',
                center: ['75%', '25%'],
                radius: '20%',
                z: 100
            }
        ]
    },
    options: [
      {
         title: {text: '2007年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
         series: [
             {data: []},
             {data: []},
             {data: []},
             {data: [
                 {name: '固定电话用户量', value: 30},
                 {name: '移动电话用户量', value: 50},
                 {name: '国际互联网用户量', value: 20},
             ]}
         ]
     },
     {
        title: {text: '2008年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
        series: [
            {data: []},
            {data: []},
            {data: []},
            {data: [
              {name: '固定电话用户量', value: 30},
              {name: '移动电话用户量', value: 50},
              {name: '国际互联网用户量', value: 20},
            ]}
        ]
    },
    {
       title: {text: '2009年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
       series: [
           {data: []},
           {data: []},
           {data: []},
           {data: [
             {name: '固定电话用户量', value: 30},
             {name: '移动电话用户量', value: 50},
             {name: '国际互联网用户量', value: 20},
           ]}
       ]
   },
   {
      title: {text: '2010年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
      series: [
          {data: []},
          {data: []},
          {data: []},
          {data: [
            {name: '固定电话用户量', value: 30},
            {name: '移动电话用户量', value: 50},
            {name: '国际互联网用户量', value: 20},
          ]}
      ]
  },
  {
     title: {text: '2011年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
     series: [
         {data: []},
         {data: []},
         {data: []},
         {data: [
           {name: '固定电话用户量', value: 30},
           {name: '移动电话用户量', value: 50},
           {name: '国际互联网用户量', value: 20},
         ]}
     ]
 },
 {
    title: {text: '2012年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
    series: [
        {data: []},
        {data: []},
        {data: []},
        {data: [
          {name: '固定电话用户量', value: 30},
          {name: '移动电话用户量', value: 50},
          {name: '国际互联网用户量', value: 20},
        ]}
    ]
},
{
   title: {text: '2013年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
         {name: '固定电话用户量', value: 30},
         {name: '移动电话用户量', value: 50},
         {name: '国际互联网用户量', value: 20},
       ]}
   ]
},
{
   title: {text: '2014年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
         {name: '固定电话用户量', value: 30},
         {name: '移动电话用户量', value: 50},
         {name: '国际互联网用户量', value: 20},
       ]}
   ]
},
{
   title: {text: '2015年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
         {name: '固定电话用户量', value: 30},
         {name: '移动电话用户量', value: 50},
         {name: '国际互联网用户量', value: 20},
       ]}
   ]
},
{
   title: {text: '2016年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
         {name: '固定电话用户量', value: 30},
         {name: '移动电话用户量', value: 50},
         {name: '国际互联网用户量', value: 20},
       ]}
   ]
},
{
   title: {text: '2017年浙江省各地级市固定电话、移动电话、国际互联网用户数量'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: [
         {name: '固定电话用户量', value: 30},
         {name: '移动电话用户量', value: 50},
         {name: '国际互联网用户量', value: 20},
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
            this.option1.options[i].series[0].data.push(this.data[j].d);
            this.option1.options[i].series[1].data.push(this.data[j].e);
            if (this.data[j].f == "") {
              this.data[j].f = 0;
            }
            if (this.years[i] == "2007" || this.years[i] == "2008" || this.years[i] == "2009" || this.years[i] == "2010" || this.years[i] == "2011") {
              this.data[j].f = parseFloat(this.data[j].f) / 10000;
            }
            this.option1.options[i].series[2].data.push(this.data[j].f);
          }
        }
      }
      for (var i = 0; i < this.years.length; i++) {
        var sumTEL = 0;
        var sumMOB = 0;
        var sumINT = 0;
        for (var j = 0; j < this.data.length; j++) {
          if (this.data[j].year == this.years[i] && this.data[j].city != "浙东北" && this.data[j].city != "浙西南") {
            sumTEL += parseFloat(this.data[j].d);
            sumMOB += parseFloat(this.data[j].e);
            sumINT += parseFloat(this.data[j].f)
           }
        }
        this.option1.options[i].series[3].data[0].value = sumTEL;
        this.option1.options[i].series[3].data[1].value = sumMOB;
        this.option1.options[i].series[3].data[2].value = sumINT;
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
