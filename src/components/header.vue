<template>
  <div id="head-navigation" class="clearFix">
    <div class="user-name clearFix">
      <img src=".././assets/logo.png" alt="">
      <el-dropdown @command="handleCommand"
                   trigger="click"
      >
        <span class="el-dropdown-link">
          {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" style="line-height: 25px">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '绿城剑健身房-HZ'
      }
    },
    methods: {
      handleCommand(command) {
        sessionStorage.removeItem('uid')
        window.location.href='http://localhost:8080/module/login.html#/login/loginView'
      }
    },
    created() {
      this.userName = sessionStorage.getItem("uid")
    }
  }
</script>
<style lang="scss">
  #head-navigation {
    float: right;
    width: 80%;
    height: 80px;
    padding: 25px 50px 25px 30px;
    .user-name {
      float: right;
      width: 180px;
      height: 40px;
      padding: 5px;
      img {
        display: inline-block;
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        line-height: 29px;
        font-size: 12px;
        margin-left: 5px;
        cursor: pointer;
      }
    }
    .el-dropdown-menu__item {
      line-height: 20px;
    }
  }

</style>
