<template>
  <div id="forgetUser">
    <div class="input-content">
      <el-form ref="serialNumberForm" :model="serialNumberForm" :rules="rules">
        <p>请输入产品序列号</p>
        <div style="position: relative">
          <el-form-item prop="serialNumber">
            <el-input v-model="serialNumberForm.serialNumber" placeholder="请在机身xxx处寻找"></el-input>
          </el-form-item>
        </div>
        <div class="login-btn">
          <a class="text-style" @click="confirmBtn('serialNumberForm')">
            确定
          </a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import api from '../../.././vuex/api'
  export default {
    data() {
      return {
        serialNumberForm: {
          serialNumber: ''
        },
        rules: {
          serialNumber: [
            { required: true, message: '请输入序列号', trigger: 'blur' }
          ]
        }
      }
    },
    watch: {
    },
    methods: {
      confirmBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //        api.ForgetUsername({serialNumber:this.serialNumber}).then(function (data) {
//          console.log('成功')
//          this.$store.dispatch('showUserName',res.userName) 往vuex实体里面赋值
//        }).catch(function (error) {
//          console.log('失败')
//        })
            this.$router.push({ path: '/login/showUserView'})
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  #forgetUser {
    .input-content > p {
      font-size: 10px;
      text-align: left;
      margin-bottom: 15px;
    }
  }

</style>
