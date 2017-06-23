<template>
  <div id="openMailbox">
    <div class="input-content">
      <img src="../../.././assets/logo.png" class="sendPic">
      <P>验证邮件已发送</P>
      <p>请点击下方按钮或登录邮箱完成密码重置</p>
      <div class="login-btn">
        <router-link to="/login/resetPsdView" class="text-style">
          打开邮箱
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
  .sendPic {
    width: 50px;
    height: 50px;
  }
  #openMailbox .input-content p:nth-child(3) {
    font-size: 10px;
  }
</style>
