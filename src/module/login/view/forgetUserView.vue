<template>
  <div id="forgetUser">
    <div class="input-content">
      <p>请输入产品序列号</p>
      <el-input v-model="serialNumber" placeholder="请在机身xxx处寻找"></el-input>
      <div class="login-btn">
        <router-link to="/login/showUserView" class="text-style">
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
        serialNumber: ''
      }
    }
  }
</script>
<style>
  #forgetUser .el-input__inner {
    margin-bottom: 15px;
  }
  #forgetUser .input-content > p {
    font-size: 10px;
    text-align: left;
    margin-bottom: 15px;
  }
</style>
