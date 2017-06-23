<template>
  <div id="resetPsd">
    <div class="input-content">
      <el-input v-model="input" placeholder="请输入密码"></el-input>
      <el-input v-model="input" placeholder="请确认新密码"></el-input>
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
      return {}
    }
  }
</script>
<style>
  #resetPsd .el-input__inner {
    margin: 10px 0;
  }
</style>
