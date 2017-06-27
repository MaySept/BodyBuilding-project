<template>
  <div id="setting">
    <div class="setting-content">
      <div>
        <el-row>
          <el-col :span="5">用户名</el-col>
          <el-col :span="5" class="text-style">绿城健身房-HZ</el-col>
          <el-col :span="14"><el-button class="btn" @click="modifyName = true">修改</el-button></el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :span="5">密码</el-col>
          <el-col :span="5" class="text-style">.......</el-col>
          <el-col :span="14"><el-button class="btn" @click="modifyPassword = true">修改</el-button></el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :span="5">所在城市</el-col>
          <el-col :span="5" class="text-style">浙江省&nbsp;&nbsp; 杭州市</el-col>
          <el-col :span="14"><el-button class="btn" @click="modifyCity = true">修改</el-button></el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :span="5">注册邮箱</el-col>
          <el-col :span="5" class="text-style">wqwe@163.com</el-col>
          <el-col :span="14"><el-button class="btn" @click="modifyMailbox = true">修改</el-button></el-col>
        </el-row>
      </div>
    </div>

    <!--修改用户名弹框-->
    <el-dialog
      title="修改用户名"
      :visible.sync="modifyName"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="userName" placeholder="请填写新的用户名"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyName = false" class="preservation-btn">保 存</el-button>
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
      <el-input v-model="userName" placeholder="旧密码"></el-input>
      <el-input v-model="userName" placeholder="新密码"></el-input>
      <el-input v-model="userName" placeholder="请确认新密码"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyPassword = false" class="preservation-btn">保 存</el-button>
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
        <el-button @click="modifyCity = false" class="preservation-btn">保 存</el-button>
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
      <el-input v-model="mailbox" placeholder="请填写新的用户名"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyMailbox = false" class="preservation-btn">保 存</el-button>
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
        password: '',
        selectProv: '',
        selectCity: '',
        mailbox: ''
      }
    },
    components: {
      citySelect
    },
    methods: {
      getCityData(prov, city){
        this.selectProv = prov
        this.selectCity = city
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
    .setting-content > div{
      height: 100px;
      border-bottom: 2px solid #F3F5F8;
    }
    .setting-content > div:nth-child(4){
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
      width: 151px;
    }
  }
</style>
