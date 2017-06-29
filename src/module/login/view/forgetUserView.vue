<template>
  <div id="forgetUser">
    <div class="input-content">
      <p>请输入产品序列号</p>
      <div style="position: relative">
        <el-input v-model="serialNumber" placeholder="请在机身xxx处寻找"></el-input>
        <P class="error-text" v-if="errorText">请输入产品序列号</P>
      </div>
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
        errorText: false,
        serialNumber: ''
      }
    },
    watch: {
      serialNumber (val) {
        this.errorText = false
      }
    },
    methods: {
      confirmBtn() {
        if (this.serialNumber === '') {
          this.errorText = true
          return false
        }else {
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
  }
</script>
<style lang="scss">
  #forgetUser {
    .el-input__inner {
      margin-bottom: 15px;
    }
    .input-content > p {
      font-size: 10px;
      text-align: left;
      margin-bottom: 15px;
    }
    .error-text {
      margin-top: -7px;
      padding-top: 0;
    }
  }

</style>
