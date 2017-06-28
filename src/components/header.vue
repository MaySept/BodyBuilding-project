<template>
  <div id="head-navigation" class="clearFix">
    <div class="user-name clearFix">
      <img src=".././assets/logo.png" alt="">
      <el-popover
        ref="popover"
        placement="bottom-end"
        title=""
        width="20"
        trigger="click"
        >
        <div class="signOut-btn" style="cursor: pointer;" @click="signOut">退出</div>
      </el-popover>
      <span v-popover:popover>绿城健身房-HZ</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      signOut() {
        console.log('123222')
      }
    }
  }
</script>
<style lang="scss">
  #head-navigation {
    float: right;
    width: 80%;
    height: 80px;
    padding: 25px 50px 25px 30px;
    h4 {
      display: inline-block;
      font-size: 18px;
    }
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
  }

</style>
