<template>
  <div id="setting">
    <p class="head-title">设置</p>
    <div class="setting-content">
      <el-row>
        <el-col :span="5">用户名</el-col>
        <el-col :span="5" class="text-style">绿城健身房-HZ</el-col>
        <el-col :span="14"><el-button class="btn" @click="modifyName = true">修改</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="5">密码</el-col>
        <el-col :span="5" class="text-style">.......</el-col>
        <el-col :span="14"><el-button class="btn" @click="modifyPassword = true">修改</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="5">所在城市</el-col>
        <el-col :span="5" class="text-style">浙江省&nbsp;&nbsp; 杭州市</el-col>
        <el-col :span="14"><el-button class="btn" @click="modifyCity = true">修改</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="5">注册邮箱</el-col>
        <el-col :span="5" class="text-style">wqwe@163.com</el-col>
        <el-col :span="14"><el-button class="btn" @click="modifyMailbox = true">修改</el-button></el-col>
      </el-row>
    </div>

    <!--修改用户名弹框-->
    <el-dialog
      title="修改用户名"
      :visible.sync="modifyName"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="modifyUserName" placeholder="请填写新的用户名"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="nameMethods" class="preservation-btn">保 存</el-button>
        <el-button @click="modifyName = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改密码弹框-->
    <el-dialog
      title="修改密码"
      class="modify-password"
      :visible.sync="modifyPassword"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="oldPassword" type="password" placeholder="旧密码"></el-input>
      <el-input v-model="newPassword" type="password" placeholder="新密码"></el-input>
      <el-input v-model="newPassword2" type="password" placeholder="请确认新密码"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="passwordMethods" class="preservation-btn">保 存</el-button>
        <el-button @click="modifyPassword = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改城市弹框-->
    <el-dialog
      title="修改城市"
      class="modify-city"
      :visible.sync="modifyCity"
      size="tiny"
      :before-close="handleClose">
      <citySelect @transmitData="getCityData"></citySelect>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cityMethods" class="preservation-btn">保 存</el-button>
        <el-button @click="modifyCity = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>
    <!--修改邮箱弹框-->
    <el-dialog
      title="修改邮箱"
      class="modify-mailbox"
      :visible.sync="modifyMailbox"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="mailboxModify" placeholder="请填写新的邮箱"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="mailboxMethods" class="preservation-btn">保 存</el-button>
        <el-button @click="modifyMailbox = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import citySelect from '../../../.././components/citySelect.vue'
  export default {
    data() {
      return {
        modifyName: false,
        modifyPassword: false,
        modifyCity: false,
        modifyMailbox:false,
        userName: '',
        selectProv: '',
        selectCity: '',
        mailbox: '',
        modifyUserName: '',
        oldPassword: '',
        newPassword: '',
        newPassword2: '',
        mailboxModify: ''
      }
    },
    components: {
      citySelect
    },
    methods: {
      getCityData(prov, city){
        this.selectProv = prov
        this.selectCity = city
      },
      nameMethods() {
        if(this.userName === '') {
          this.$message.error('请填写用户名');
          return false
        }
//        api.ModifyName({modifyUserName:this.modifyUserName}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        this.modifyName = false
      },
      passwordMethods() {
//        api.ModifyPassword({oldPassword:this.oldPassword,newPassword:this.newPassword}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        if(this.oldPassword === '') {
          this.$message.error('请填写旧密码');
          return false
        }else if(this.newPassword === ''){
          this.$message.error('请填写新密码');
          return false
        }else if(this.newPassword2 === ''){
          this.$message.error('请确认新密码');
          return false
        }else if(this.newPassword !== this.newPassword2){
          this.$message.error('两次密码不一致');
          return false
        }
        this.modifyPassword = false
      },
      cityMethods() {
//        api.ModifyCity({oldPassword:this.oldPassword,newPassword:this.newPassword}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        if(this.selectCity === '') {
          this.$message.error('请选择城市')
          return false
        }
        this.modifyCity = false
      },
      mailboxMethods() {
//        api.ModifyMailbox({oldPassword:this.oldPassword,newPassword:this.newPassword}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        if(this.mailboxModify === '') {
          this.$message.error('请填写新邮箱')
          return false
        }
        this.modifyMailbox = false
      }
    }
  }
</script>
<style lang="scss">
  #setting {
    .setting-content {
      height: 400px;
      background-color: #ffffff;
      padding: 0 60px;
    }
    .setting-content > .el-row{
      height: 100px;
      border-bottom: 3px solid #F3F5F8;
    }
    .setting-content > .el-row:nth-child(4){
      border-bottom: none
    }
    .btn {
      color: #02d1b1;
      border-color: #02d1b1;
      width: 150px;
      border-radius: 20px;
      float: right;
      margin-top: 37px;
    }
    .el-col-5{
      line-height: 100px;
    }
    .text-style {
      font-size: 13px;
    }
    .modify-password .el-input__inner {
      margin-top: 18px;
    }
    .modify-city #citySelect .el-select .el-input {
      width: 170px;
    }
  }
</style>
