<template>
  <div id="forgetPsdView">
    <div class="input-content">
      <p>请输入注册邮箱：</p>
      <el-input v-model="mailbox" placeholder="请输入内容"></el-input>
      <div class="login-btn">
        <router-link to="/login/openMailboxView" class="text-style">
          发送验证邮件
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mailbox: ''
      }
    }
  }
</script>
<style>
  #forgetPsdView .input-content > p {
    font-size: 10px;
    text-align: left;
    margin-bottom: 15px;
  }
</style>
