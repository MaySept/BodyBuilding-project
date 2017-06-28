<template>
  <div id="resetPsd">
    <div class="input-content">
      <el-form :model="resetForm" ref="resetForm" :rules="rules">
        <el-form-item prop="password">
          <el-input v-model="resetForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="password2" >
          <el-input v-model="resetForm.password2" placeholder="请确认新密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn">
        <a  class="text-style" @click="resetPsd('resetForm')">
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
        resetForm: {
          password: '',
          password2: ''
        },
        rules: {
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' }
          ],
          password2: [
            { required: true, message: '请确认密码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      resetPsd(formName) {
        // 表单校验
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 验证成功后操作
            if (this.resetForm.password !== this.resetForm.password2) {
              this.$message({
                showClose: true,
                message: '两次密码不一致',
                type: 'error'
              })
              return false
            }else {
              this.$router.push({ path: '/login/loginView'})
//              api.ResetPassword(this.mailForm).then(function (data) {
//                console.log('成功')
//                this.$message.error('您输入的序列号不存在');
//              }).catch(function (error) {
//                console.log('失败')
//              })
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss">
  #resetPsd {
    .el-form-item__content {
      margin-top: 20px;
    }
  }
</style>
