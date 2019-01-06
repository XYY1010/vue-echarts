<template>
  <div>
    <div style="min-height: 700px; margin-top:20px;" ref="echart1"></div>
  </div>
</template>

<script>
export default {
  name: 'fix',
  mounted() {
    this.initData();
  },
  data() {
    return {
      data: [],
      cities: [],
      years: [],
      chart: null,
      dataMap: {
        dataFix: [],
        dataEstate: [],
        dataNewFix: [],
        dataHouse: [],
        dataPI: [],
        dataSI: [],
        dataTI: []
      },
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
            text: '浙江省各地级市固定投资相关数据',
            subtext: '单位：亿元'
        },
        color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0', '#69e0d0'],
        tooltip: {
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        legend: {
            x: '40%',
            data: ['固定资产投资', '房地产开发投资', '新增固定资产', '商品房屋销售额', '第一产业', '第二产业', '第三产业'],
            selected: {
            }
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
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
                name: '亿元'
            }
        ],
        series: [
            {name: '固定资产投资', type: 'bar'},
            {name: '房地产开发投资', type: 'bar'},
            {name: '新增固定资产', type: 'bar'},
            {name: '商品房屋销售额', type: 'bar'},
            {name: '第一产业', type: 'bar'},
            {name: '第二产业', type: 'bar'},
            {name: '第三产业', type: 'bar'},
            {
                name: 'GDP占比',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100
            }
        ]
    },
    options: [
      {
         title: {text: '2007年浙江省各地级市固定投资相关数据'},
         series: [
             {data: []},
             {data: []},
             {data: []},
             {data: []},
             {data: []},
             {data: []},
             {data: []},
             {data: [
                 {name: '第一产业', value: 30},
                 {name: '第二产业', value: 30},
                 {name: '第三产业', value: 40}
             ]}
         ]
     },
     {
        title: {text: '2008年浙江省各地级市固定投资相关数据'},
        series: [
            {data: []},
            {data: []},
            {data: []},
            {data: []},
            {data: []},
            {data: []},
            {data: []},
            {data: [
                {name: '第一产业', value: 30},
                {name: '第二产业', value: 30},
                {name: '第三产业', value: 40}
            ]}
        ]
    },
    {
       title: {text: '2009年浙江省各地级市固定投资相关数据'},
       series: [
           {data: []},
           {data: []},
           {data: []},
           {data: []},
           {data: []},
           {data: []},
           {data: []},
           {data: [
               {name: '第一产业', value: 30},
               {name: '第二产业', value: 30},
               {name: '第三产业', value: 40}
           ]}
       ]
   },
   {
      title: {text: '2010年浙江省各地级市固定投资相关数据'},
      series: [
          {data: []},
          {data: []},
          {data: []},
          {data: []},
          {data: []},
          {data: []},
          {data: []},
          {data: [
              {name: '第一产业', value: 30},
              {name: '第二产业', value: 30},
              {name: '第三产业', value: 40}
          ]}
      ]
  },
  {
     title: {text: '2011年浙江省各地级市固定投资相关数据'},
     series: [
         {data: []},
         {data: []},
         {data: []},
         {data: []},
         {data: []},
         {data: []},
         {data: []},
         {data: [
             {name: '第一产业', value: 30},
             {name: '第二产业', value: 30},
             {name: '第三产业', value: 40}
         ]}
     ]
 },
 {
    title: {text: '2012年浙江省各地级市固定投资相关数据'},
    series: [
        {data: []},
        {data: []},
        {data: []},
        {data: []},
        {data: []},
        {data: []},
        {data: []},
        {data: [
            {name: '第一产业', value: 30},
            {name: '第二产业', value: 30},
            {name: '第三产业', value: 40}
        ]}
    ]
},
{
   title: {text: '2013年浙江省各地级市固定投资相关数据'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '第一产业', value: 30},
           {name: '第二产业', value: 30},
           {name: '第三产业', value: 40}
       ]}
   ]
},
{
   title: {text: '2014年浙江省各地级市固定投资相关数据'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '第一产业', value: 30},
           {name: '第二产业', value: 30},
           {name: '第三产业', value: 40}
       ]}
   ]
},
{
   title: {text: '2015年浙江省各地级市固定投资相关数据'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '第一产业', value: 30},
           {name: '第二产业', value: 30},
           {name: '第三产业', value: 40}
       ]}
   ]
},
{
   title: {text: '2016年浙江省各地级市固定投资相关数据'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '第一产业', value: 30},
           {name: '第二产业', value: 30},
           {name: '第三产业', value: 40}
       ]}
   ]
},
{
   title: {text: '2017年浙江省各地级市固定投资相关数据'},
   series: [
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: []},
       {data: [
           {name: '第一产业', value: 30},
           {name: '第二产业', value: 30},
           {name: '第三产业', value: 40}
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
                  if (this.years.indexOf(this.data[i].year) == -1) {
                    this.years.push(this.data[i].year);
                  }
                }
                for (var i = 0; i < this.cities.length; i++) {
                  if (this.cities[i] == "其中：义乌市") {
                    this.cities[i] = "义乌市";
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
                description: '无法相关固定资产投资数据',
              });
        });
    },
    initChart1() {
      this.option1.baseOption.xAxis[0].data = this.cities;
      this.option1.baseOption.timeline.data = this.years;
      for (var i = 0; i < this.years.length; i++) {
        for (var j = 0; j < this.data.length; j++) {
          if (this.data[j].year == this.years[i] && this.data[j].city != "浙东北" && this.data[j].city != "浙西南") {
            this.option1.options[i].series[0].data.push(this.data[j].a);
            this.option1.options[i].series[1].data.push(this.data[j].e);
            this.option1.options[i].series[2].data.push(this.data[j].g);
            this.option1.options[i].series[3].data.push(this.data[j].i);
            this.option1.options[i].series[4].data.push(this.data[j].b);
            this.option1.options[i].series[5].data.push(this.data[j].c);
            this.option1.options[i].series[6].data.push(this.data[j].d);
          }
        }
      }

      for (var i = 0; i < this.years.length; i++) {
        var sumPI = 0;
        var sumSI = 0
        var sumFI = 0;
        for (var j = 0; j < this.data.length; j++) {
          if (this.data[j].year == this.years[i] && this.data[j].city != "浙东北" && this.data[j].city != "浙西南") {
            sumPI += parseFloat(this.data[j].b);
            sumSI += parseFloat(this.data[j].c);
            sumFI += parseFloat(this.data[j].d);
          }
        }
        this.option1.options[i].series[7].data[0].value = sumPI;
        this.option1.options[i].series[7].data[1].value = sumSI;
        this.option1.options[i].series[7].data[2].value = sumFI;
      }
      this.chart = this.$echarts.init(this.$refs.echart1);
      // 把配置和数据放这里
      this.chart.setOption(this.option1)
    },

  }
}
</script>

<style scoped>
</style>
