<template>
  <div id="coach">
    <el-row>
      <el-button type="success" @click="addCoach = true">+ 新增教练</el-button>
    </el-row>
    <!--表格-->
    <!--表格部分-->
    <el-table
      :data="coachData"
      stripe
      style="width: 100%">
      <el-table-column
        label="头像"
        align="center"
        min-width="120">
        <template scope="scope">
          <img :src="scope.row.picture"  alt="" class="user-logo">
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        align="center"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        align="center"
        min-width="120">
      </el-table-column>
      <el-table-column
        label="添加时间"
        align="center"
        min-width="120">
        <template scope="scope">
          {{scope.row.time}}
        </template>
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        align="center"
        min-width="120">
      </el-table-column>
      <el-table-column
        label="编辑"
        align="center"
        min-width="120">
        <template scope="scope">
          <span @click="editRemarks(scope.$index, scope.row.id)"><i class="el-icon-edit"></i></span>
          <span class="line">|</span>
          <span @click="deleteCoach(scope.$index, coachData)"><i class="el-icon-delete"></i></span>
        </template>
      </el-table-column>
    </el-table>

    <!--添加教练弹框-->
    <el-dialog
      title="添加教练"
      :visible.sync="addCoach"
      size="tiny"
      :before-close="handleClose">
      <el-input
        placeholder="请输入教练手机号"
        icon="search"
        v-model="mobile"
        :maxlength='11'
        :on-icon-click="handleIconClick">
      </el-input>
      <div class="search-result">
        <el-row>
          <el-col :span="4"><span><img :src="picture" alt=""></span></el-col>
          <el-col :span="4"><span class="lineHeight">{{userName}}</span></el-col>
          <el-col :span="4"><span class="lineHeight">{{gender}}</span></el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCoach = false" class="add-btn" :disabled="true">添 加</el-button>
        <el-button @click="addCoach = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>

    <!--备注信息弹框-->
    <el-dialog
      title="备注信息"
      :visible.sync="remarksMessage"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="remarks" placeholder="请填写备注信息，如真实姓名"></el-input>
      <div style="height: 30px"></div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="remarksMessage = false" class="preservation-btn">保 存</el-button>
    <el-button @click="remarksMessage = false" class="cancel-btn">取 消</el-button>
  </span>
    </el-dialog>

    <!--确认删除弹框-->
    <el-dialog
      title="备注信息"
      :visible.sync="confirmDelete"
      size="tiny"
      :before-close="handleClose">
      <span>确定将该教练从列表中删除吗？</span>
      <div style="height: 30px"></div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="confirmDeleteCoach" class="preservation-btn">确 定</el-button>
    <el-button @click="confirmDelete = false" class="cancel-btn">取 消</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        coachData:[{
          id:1,
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏1',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        },{
          id:2,
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏2',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        },{
          id:3,
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏3',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        }],
        addCoach: false,
        remarksMessage:false,
        confirmDelete:false,
        mobile: '',
        picture: '//www.baidu.com/img/bd_logo1.png',
        userName: '张鹏',
        gender: '男'
      }
    },
    methods: {
      deleteCoach(index, rows) {
        this.confirmDelete = true
        rows.splice(index, 1);
        console.log(rows)
      },
      editRemarks(index, id) {
        console.log(id)
        this.remarksMessage = true
      },
      confirmDeleteCoach(index, rows) {

        this.confirmDelete = false
      }
    }
  }
</script>
<style lang="scss">
  #coach {
    .el-table {
      margin-top: 40px;
      .user-logo {
        width: 35px;
        height: 35px;
        margin-top: 2px;
      }
      span {
        cursor: pointer;
      }
      .line {
        margin: 0 10px;
      }
    }
    .el-input__icon {
      color:#02d1b1;
      font-size: 20px
    }
    .search-result {
      height: 50px;
      margin-top: 10px;
      overflow: hidden;
      img {
        width: 40px;
        height: 40px;
      }
      .lineHeight {
        line-height: 51px;
      }
    }
    .el-dialog__body {
      padding: 24px 20px;
    }
  }
</style>
