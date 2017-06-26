<template>
  <div id="chart">
    <el-tabs v-model="activeName">
      <el-tab-pane label="使用人次" name="first">
        <el-row class="data-overView">
          <el-col :span="8">
            <p>当月使用人次 <span>17</span></p>
          </el-col>
          <el-col :span="8">
            <p>总计使用人次 <span>270</span></p>
          </el-col>
          <el-col :span="8">
            <p><span>40</span><span>%</span> 的本机用户已注册</p>
          </el-col>
        </el-row>
        <div id="myChart"></div>
      </el-tab-pane>
      <el-tab-pane label="历史记录" name="second">历史记录</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '堆叠区域图'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['使用人次']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'使用人次',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {
                  type: 'default'
              }},
              data:[50, 80, 40, 100, 180, 140, 270,220,260,290,300,320]
            }
          ]
        })
      }
    },
    mounted() {
      this.drawLine()
    }
  }
</script>
<style lang="scss">
  #chart {
    .data-overView {
      height: 60px;
      background-color: white;
      p {
        font-size: 15px;
        text-align: center;
        line-height: 60px;
      }
      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
    #myChart {
      width: 100%;
      height: 400px;
      margin-top: 30px;
    }
  }
</style>
