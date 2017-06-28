<template>
  <div id="forgetUser">
    <div class="input-content">
      <p>请输入产品序列号</p>
      <el-input v-model="serialNumber" placeholder="请在机身xxx处寻找"></el-input>
      <div class="login-btn">
        <a class="text-style" @click="confirmBtn">
          确定
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../.././vuex/api'
  export default {
    data() {
      return {
        serialNumber: ''
      }
    },
    methods: {
      confirmBtn() {
        this.$router.push({ path: '/login/showUserView'})
//        api.ForgetUsername({serialNumber:this.serialNumber}).then(function (data) {
//          console.log('成功')
//          this.$message.error('您输入的序列号不存在');
//        }).catch(function (error) {
//          console.log('失败')
//        })
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
