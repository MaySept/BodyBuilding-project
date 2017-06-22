<template>
    <div id="lg-content">
      <div class="lg-header">
        <p>ArcBody</p>
        <p>管理中心</p>
      </div>
      <div class="lg-form">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
            <div class="input-content">
              <el-input placeholder="用户名/邮箱" v-model="login.name">
                <template slot="prepend">用户名</template>
              </el-input>
              <p class="prompt">忘记用户名</p>
              <el-input placeholder="" v-model="login.password">
                <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
              </el-input>
              <p class="prompt">忘记密码</p>
              <div class="login-btn">
                登录
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <div class="input-content">
              <el-input placeholder="请在机身xxx处寻找" v-model="login.serialNumber">
                <template slot="prepend">序列号</template>
              </el-input>
              <div class="login-btn">
                下一步
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'first',
        login: {
          name: '',
          password: ''
        },
        register: {
          serialNumber: ''
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
</style>
