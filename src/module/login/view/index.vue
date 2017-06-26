<template>
    <div id="lg-content">
      <div class="lg-header">
        <p>ArcBody</p>
        <p>管理中心</p>
      </div>
      <div class="lg-form">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
            <router-view></router-view>
          </el-tab-pane>

          <el-tab-pane label="注册" name="second">
            <div class="input-content" v-if="registerStepOne">
              <!--输入序列号-->
              <el-input placeholder="请在机身xxx处寻找" v-model="registerDataOne.serialNumber">
                <template slot="prepend">序列号</template>
              </el-input>
              <div class="login-btn">
                下一步
              </div>
            </div>
            <!--注册表单-->
            <div class="input-content" v-if="registerStepTwo">
              <el-form ref="form" :model="registerDataTwo" :rules="rules">
                <el-form-item>
                  <el-input placeholder="建议填写健身房名称" v-model="registerDataTwo.name">
                    <template slot="prepend">用户名</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="" v-model="registerDataTwo.mailbox">
                    <template slot="prepend">邮&nbsp;&nbsp;&nbsp;箱</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="" v-model="registerDataTwo.password">
                    <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
                  </el-input>
                </el-form-item>
                <citySelect @transmitData="getCityData"></citySelect>
                <p class="notes-style">已阅读并接受<span class="clause">使用条款</span> 和 <span class="clause">隐私政策</span></p>
                <div class="login-btn" @click="clickRegister">
                  注册
                </div>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>
<script>
  import citySelect from '../../.././components/login/citySelect.vue'
  export default {
    data () {
      return {
        activeName: 'first',
        registerStepOne: false,
        registerStepTwo: true,
        registerDataOne: {
          serialNumber: ''
        },
        registerDataTwo: {
          name: '',
          mailbox: '',
          password: '',
          selectProv: '',
          selectCity: ''
        }
      }
    },
    watch: {
      'registerDataTwo.selectProv' (val, oldVal){
        console.log('123')
      }
    },
    components: {
      citySelect
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      clickRegister() {
        this.$message({
        showClose: true,
        message: '注册成功',
        type: 'success'
      })
      },
      getCityData(prov, city){
        this.selectProv = prov
        this.selectCity = city
      }
    }
  }
</script>
<style>
  #lg-content .el-tabs__nav {
    float: none;
    height: 60px;
  }
  #lg-content .el-tabs__active-bar { /*滚动条*/
    left: 140px;
    top: 56px;
    background-color: #02d1b1;
  }

  #lg-content .el-tabs__header { /*头部*/
    height: 60px;
  }
  #lg-content .el-tabs__item { /*头部文字*/
    top: 9px;
  }
  #lg-content .el-tabs__item.is-active {
    color:#02d1b1;
  }
  #lg-content .el-select .el-input {
    width: 110px;
  }
  #lg-content .el-input-group {
    margin: 10px auto;
  }
  #lg-content .el-form-item {
    margin: 0;
  }
  .notes-style {
    font-size: 12px;
    line-height: 40px;
    text-align: left;
  }
  .clause {
    color: #02d1b1;
  }
</style>
