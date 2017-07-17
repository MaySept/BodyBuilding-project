<template>
  <div id="login-view">
    <div class="input-content">
      <el-form ref="loginFrom" :model="loginFrom" :rules="rules">
        <el-form-item prop="userName">
          <el-input placeholder="用户名/邮箱" v-model="loginFrom.userName">
            <template slot="prepend">用户名</template>
          </el-input>
        </el-form-item>
        <router-link to="/login/forgetUserView">
          <p class="prompt">忘记用户名</p>
        </router-link>
        <el-form-item prop="password">
          <el-input placeholder="" v-model="loginFrom.password" type="password">
            <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
          </el-input>
        </el-form-item>
        <router-link to="/login/forgetPsdView">
          <p class="prompt">忘记密码</p>
        </router-link>
        <div class="login-btn" @click="goLogin('loginFrom')">
          <a>登录</a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginFrom: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      goLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //            api.GetLogin({user:this.login.userName, password:this.login.password}).then(function (data) {
//              console.log('成功')
//            }).catch(function (error) {
//              console.log('失败')
//            })
            this.$Common.setCookie('uid', this.loginFrom.userName, 7)
            sessionStorage.setItem('isLogin', true)
            window.location.href = 'http://localhost:8080/module/index.html#/coachManage'
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    },
    created() {
      this.loginFrom.userName = this.$Common.getCookie('uid')
    }
  }
</script>

<style lang="scss">
  #login-view {
    .el-input-group {
      margin: 5px auto;
    }
    .login-btn {
      a {
        color: #ffffff;
      }
    }
    .el-form-item__error {
      line-height: 0;
      left: 63px;
    }
  }
</style>
