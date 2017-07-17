<template>
  <div id="chart">
    <p class="head-title">使用数据</p>
    <el-tabs v-model="activeName">
      <!--使用人次-->
      <el-tab-pane label="使用人次" name="first">
        <el-row class="data-overView">
          <el-col :span="8">
            <p>当月使用人次 <span>{{monthPerson}}</span></p>
          </el-col>
          <el-col :span="8">
            <p>总计使用人次 <span>{{totalPerson}}</span></p>
          </el-col>
          <el-col :span="8">
            <p><span>{{percentage}}</span><span>%</span> 的本机用户已注册</p>
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
          style="width: 100%"
          v-loading="loading"
        >
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
        <!--页脚分页-->
        <Pagination @pagination="getPagination" :totalFather='total'></Pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Pagination from '../../../.././components/pagination.vue'
  import api from '../../../.././vuex/api'
  export default {
    data() {
      return {
        loading: false,
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
          }],
        numberPeopleArr: [50, 80, 40, 100, 180, 140, 270,220,260,290,300,320],
        timeSlotArr: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        whatYear:'Sun Jan 01 2017 00:00:00 GMT+0800',
        timeSlot:1,
        historyYear:'2017',
        historyMonth: '',
        monthPerson: 17,
        totalPerson: 270,
        percentage: 40,
        total: 500,
        pageSize: 10,
        currentPage: 1,
        jumperToPage: 1,
      }
    },
    watch: {
      historyYear (val) {
        console.log(val)
      },
      historyMonth (val) {
        console.log(val)
      }
    },
    components: {
      Pagination
    },
    methods: {
      // 折线图方法
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
       /* myChart.showLoading();
        setTimeout(function () {
          myChart.hideLoading();
        },2000)*/
//        api.LineChart({whatYear:this.whatYear,timeSlot:this.timeSlot}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        // 绘制图表
        myChart.setOption({
          // 设置title属性
          title: {
            left:10,
            top:30,
            text: '(人次)',
            textStyle: {
              color: '#000',
              fontWeight: 'normal',
              fontSize: 14
            }
          },
          tooltip : {
            trigger: 'axis',
            // 提示框文字显示
            formatter:this.historyYear+"年{b}<br/>{c}人次",
            // 提示框颜色
            backgroundColor:'#99FFCC',
            axisPointer: {
              type: 'cross',
              label: {
                // 坐标轴hover 标注颜色
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['使用人次']
          },
          toolbox: {
            show: false,
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
              data : this.timeSlotArr
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
                // 折线颜色
                normal:{color:'#33FF00'}
              },
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {
                normal: {
                  // 图形区域颜色
                  color: '#CCFFCC',
                  type: 'default'
                }
              },
              data:this.numberPeopleArr
            }
          ]
        })
      },
      // 分页方法
      getPagination(currentPage, jumperToPage) {
        this.currentPage = currentPage || 1
        this.jumperToPage = jumperToPage || 1
//        api.HistoryList({currentPage:this.currentPage,jumperToPage:this.jumperToPage}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        console.log(this.currentPage + '当前页')
        console.log(this.jumperToPage + '跳转页')
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    created() {
      this.getPagination()
      this.$store.dispatch('setLoading',true)
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


