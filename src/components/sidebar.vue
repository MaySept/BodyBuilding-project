<template>
  <div id="sidebar" class="clearFix">
      <div class="sidebar-header">
        <div class="user-logo clearFix">
          <img src=".././assets/logo.png">
        </div>
        <div class="system-name clearFix">
          <p>ArcBody</p>
          <p>管理中心</p>
        </div>
    </div>
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             @open="handleOpen" @close="handleClose"
             theme="dark">
      <router-link to="/chartData">
        <el-menu-item index="1"><i class="el-icon-message"></i>使用数据</el-menu-item>
      </router-link>
      <router-link to="/coachManage">
        <el-menu-item index="2"><i class="el-icon-menu"></i>教练管理</el-menu-item>
      </router-link>
      <router-link to="/memberData">
        <el-menu-item index="3"><i class="el-icon-search"></i>会员数据</el-menu-item>
      </router-link>
      <router-link to="/setting">
        <el-menu-item index="4"><i class="el-icon-setting"></i>设置</el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
  #sidebar {
    float: left;
    width: 20%;
    height: 100%;
    .el-menu {
      height: 89%;
    }
    .sidebar-header {
      width: 100%;
      height: 11%;
      background-color: #02d1b1;
      padding: 30px 13px;
    }
    .user-logo {
      width: 45px;
      height: 45px;
      margin-left: 20%;
      display: inline-block;
      float: left;
    }
    .system-name {
      height: 60px;
      width: 90px;
      display: inline-block;
      float: left;
      p:nth-child(1) {
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        line-height: 32px;
        overflow: hidden;
        margin-top: -4px;
      }
      p:nth-child(2) {
        text-align: center;
        color: #ffffff;
        font-size: 12px;
        margin-top: -3px;
      }
    }
    .el-menu-item.is-active{
      border-left:4px solid  #02d1b1;
      color: #02d1b1;
    }
  }
</style>
