<template>
  <div id="input">
    <div class="input-components">
      <el-input placeholder="用户名/邮箱" v-model="input3">
        <template slot="prepend">用户名</template>
      </el-input>
      <p>忘记用户名</p>
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
  #input .input-components {
    position: relative;
    width: 230px;
    height: 45px;
    margin: 25px auto;
  }
  #input p {
    font-size: 12px;
    color: #02d1b1;
    float: right;
    margin-top: -24px;
  }
  #input .el-input__inner {
    border: 1px solid #bfcbd9
  }
</style>
