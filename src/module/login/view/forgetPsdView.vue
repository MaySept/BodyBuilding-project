<template>
  <div id="forgetPsdView">
    <div class="input-content">
      <p>请输入注册邮箱：</p>
      <el-form :model="mailForm" ref="mailForm" :rules="rules">
        <el-form-item prop="mailbox">
          <el-input v-model="mailForm.mailbox" placeholder="请输入正确邮箱地址"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn">
        <!--<router-link to="/login/openMailboxView" class="text-style">-->
          <!--发送验证邮件-->
        <!--</router-link>-->
        <a @click="sendMail('mailForm')" class="text-style">
          发送验证邮件
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
        mailForm: {
          mailbox: ''
        },
        rules: {
          mailbox: [
            { required: true, message: '请填写邮箱地址', trigger: 'blur' },
            { pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      sendMail(formName) {
        // 表单校验
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 验证成功后操作
            this.$router.push({ path: '/login/openMailboxView'})
//            api.SendMail(this.mailForm).then(function (data) {
//              console.log('成功')
//              this.$message.error('您输入的序列号不存在');
//            }).catch(function (error) {
//              console.log('失败')
//            })
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
<style>
  #forgetPsdView .input-content > p {
    font-size: 10px;
    text-align: left;
    margin-bottom: 15px;
  }
</style>
