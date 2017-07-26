<template>
  <div id="studentNumber">
    <div id="pic"></div>
    <el-slider
      v-model="value9"
      range
      show-stops
    >
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value9: [40.2, 80.2]
      }
    },
    methods: {
      xxx() {
        let sexRatio = this.$echarts.init(document.getElementById('pic'))
        // 绘制图表
        sexRatio.setOption({
            title: {
              text: 'Arc Body'
            },
            // 更改提示框属性
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            },
            yAxis: {
              splitLine: {
                show: false
              }
            },
            toolbox: {
              show: false
            },
            dataZoom: [
              {
                type: 'inside',
                filterMode:'empty', // 禁止关联使Y轴不能缩放
                show: false
                // 滑动条隐藏
              }
              /*    { //滑条样式
               type: 'slider',
               show: true,
               xAxisIndex: [0],
               handleSize: 20,//滑动条的 左右2个滑动条的大小
               height: 8,//组件高度
               left: 30, //左边的距离
               right: 40,//右边的距离
               bottom: 30,//右边的距离
               handleColor: '#ddd',//h滑动图标的颜色
               handleStyle: {
               borderColor: "#cacaca",
               borderWidth: "1",
               shadowBlur: 2,
               background: "#ddd",
               shadowColor: "#ddd",
               }
               }*/
            ],
            visualMap: {
              top: 10,
              right: 10,
              pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
              },{
                gt: 200,
                lte: 300,
                color: '#660099'
              }],
              outOfRange: {
                color: '#6a7985'
              }
            },
            series: {
              name: 'Arc Body',
              type: 'line',
              label: {
                normal: {
                  show: false
                }
              },
              data:  [50, 80, 40, 100, 180, 140, 250,220,260,200,220,120],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 50,
                  itemStyle:{ // 折线颜色
                    normal:{color:'blue'}
                  },
                }, {
                  yAxis: 200
                }]
              }
            }
          }
        )
      }
    },
    mounted() {
      this.xxx()
    },
    created() {
      console.log(parseInt(this.$route.params.sid, 10))
    }
  }
</script>
<style>
  #pic {
    width: 800px;
    height: 600px;
    float: left;
    margin-top:100px;
  }
</style>
