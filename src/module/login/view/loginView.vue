<template>
  <div id="login-view">
    <div class="input-content">
      <el-input placeholder="用户名/邮箱" v-model="login.user">
        <template slot="prepend">用户名</template>
      </el-input>
      <router-link to="/login/forgetUserView">
        <p class="prompt">忘记用户名</p>
      </router-link>
      <el-input placeholder="" v-model="login.password">
        <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
      </el-input>
      <router-link to="/login/forgetPsdView">
        <p class="prompt">忘记密码</p>
      </router-link>
      <div class="login-btn">
        <router-link to="/login/loginView" class="text-style">
          确定
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        login: {
          user: '',
          password: ''
        },
      }
    }
  }
</script>

<style lang="scss">
  #login-view {
    .el-input-group {
      margin: 10px auto;
    }
  }
</style>
