<template>
  <div id="showUser">
    <div class="input-content">
      <p>您的用户名是：</p>
      <p>{{name}}</p>
      <div class="login-btn">
        <router-link to="/login/loginView" class="text-style">
          返回登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    created() {
      this.name = this.$store.state.showUserName.showUserName
    }
  }
</script>
<style>
  #showUser .input-content > p:nth-child(1) {
    font-size: 10px;
    text-align: left;
    margin-bottom: 15px;
  }
</style>
