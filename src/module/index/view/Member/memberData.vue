<template>
  <div id="member">
    <p class="head-title">会员数据</p>
    <p class="title-details">样本为在本店注册ArcBody用户</p>
    <el-row class="pieChartBox">
      <el-col :span="8">
        <div class="pieChart">
          <div id="sexRatio"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="pieChart">
          <div id="target"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="pieChart">
          <div id="weightEvaluation"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        man: '40%',
        sexProportion:[
          {value:30, name:'男性'},
          {value:50, name:'女性'}
        ]
      }
    },
    methods: {
      sex() {
        let sexRatio = this.$echarts.init(document.getElementById('sexRatio'))
        // 绘制图表
        sexRatio.setOption({
          title : {
            text: '男女比例',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['green','red'],
          series : [
            {
              name: '所占比例',
              type: 'pie',
              radius : '52%',
              center: ['50%', '60%'],
              data: this.sexProportion
            }
          ]
        }
      )
      },
      target (){
        let target = this.$echarts.init(document.getElementById('target'))
        // 绘制图表
        target.setOption({
            title : {
              text: '目标分布',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
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
        )
      },
      weight() {
        let weightEvaluation = this.$echarts.init(document.getElementById('weightEvaluation'))
        // 绘制图表
        weightEvaluation.setOption({
            title : {
              text: '体重评估',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
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
        )
      }
    },
    mounted() {
      this.sex()
      this.target()
      this.weight()
    }
  }
</script>
<style lang="scss">
  #member {
    .pieChartBox {
      height: 300px;
    }
    .pieChart {
      height: 300px;
      width: 93%;
      background-color: #ffffff;
    }
    #sexRatio, #target, #weightEvaluation {
      height: 300px;
      width: 100%;
    }
    .title-details {
      position: absolute;
      left: 31%;
      top: 49px;
      font-size: 12px;
      color: darkgrey;
    }
  }
</style>
