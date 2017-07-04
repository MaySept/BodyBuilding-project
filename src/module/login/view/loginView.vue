<template>
  <div id="login-view">
    <div class="input-content">
      <el-form ref="loginFrom" :model="loginFrom" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名/邮箱" v-model="loginFrom.user">
            <template slot="prepend">用户名</template>
          </el-input>
        </el-form-item>
        <router-link to="/login/forgetUserView">
          <p class="prompt">忘记用户名</p>
        </router-link>
        <el-form-item prop="password">
          <el-input placeholder="" v-model="loginFrom.password">
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
          user: '',
          password: ''
        },
        rules: {
          user: [
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
            //            api.GetLogin({user:this.login.user, password:this.login.password}).then(function (data) {
//              console.log('成功')
//            }).catch(function (error) {
//              console.log('失败')
//            })
            sessionStorage.setItem('uid',this.loginFrom.user)
            window.location.href = 'http://localhost:8080/module/index.html#/coachManage'
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
