<template>
  <div id="chart">
    <p class="head-title">使用数据</p>
    <el-tabs v-model="activeName">
      <!--使用人次-->
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
        <div class="number-chart">
          <el-row class="select-time">
            <el-col :span="20">
              <el-date-picker
                v-model="whatYear"
                align="right"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </el-col>
            <el-col :span="4">
              <el-radio-group v-model="timeSlot">
                <el-radio-button label="1">年</el-radio-button>
                <el-radio-button label="2">月</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <!--折线图-->
          <div id="myChart"></div>
        </div>
      </el-tab-pane>
      <!--历史记录-->
      <el-tab-pane label="历史记录" name="second">
        <div class="select-time">
          <el-row>
            <el-col :span="4">
              <el-date-picker
                style="float:left"
                v-model="historyYear"
                align="right"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </el-col>
            <el-col :span="20">
              <el-date-picker
                style="float:left;"
                v-model="historyMonth"
                type="month"
                placeholder="选择月">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <!--表格部分-->
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            align="center"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            align="center"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="picture"
            label="照片"
            align="center"
            min-width="120">
            <template scope="scope">
              <img :src="scope.row.picture"  alt="" class="user-logo">
            </template>
          </el-table-column>
          <el-table-column
            prop="userName"
            label="用户名"
            align="center"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="手机号"
            align="center"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="state"
            label="扫描状态"
            align="center"
            min-width="120">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          date: '22日',
          time: '16:20',
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏',
          mobile: '1111111111',
          state: '成功'
        },
          {
            date: '22日',
            time: '16:20',
            picture: '//www.baidu.com/img/bd_logo1.png',
            userName: '张鹏',
            mobile: '1111111111',
            state: '成功'
          },
          {
            date: '22日',
            time: '16:20',
            picture: '//www.baidu.com/img/bd_logo1.png',
            userName: '张鹏',
            mobile: '1111111111',
            state: '成功'
          }],
        numberPeople: [50, 80, 40, 100, 180, 140, 270,220,260,290,300,320],
        whatYear:'',
        timeSlot:1,
        historyYear:'',
        historyMouth: ''
      }
    },
    methods: {
      // 折线图方法
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '人次'
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
              itemStyle:{
                normal:{color:'green'}
              },
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {
                  type: 'default'
              }},
              data:this.numberPeople
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
    .el-tabs__item.is-active {
      color: #02d1b1;
    }
    .el-tabs__active-bar {
      background-color:#02d1b1;
    }
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
    .number-chart {
      width: 100%;
      height: 450px;
      margin-top: 30px;
      background-color: #ffffff;
      #myChart {
        width: 100%;
        height: 400px;
      }
    }
    .select-time {
      height: 50px;
    }
    .el-date-editor.el-input {
      width: 112px;
      float: right;
    }
    .el-input__inner {
      height: 30px;
    }
    .el-radio-button, .el-radio-button__inner {
      height: 30px
    }
    .el-col-4 {
      padding-top: 13px;
      padding-left: 19px;
    }
    .el-col-20 {
      padding-top: 13px;
    }
    .el-radio-button__inner {
      line-height: 9px;
    }
    .el-table {
      margin-top: 40px;
    }
    .user-logo {
      width: 35px;
      height: 35px;
      margin-top: 2px;
    }
  }
</style>
