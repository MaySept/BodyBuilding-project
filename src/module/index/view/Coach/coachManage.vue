<template>
  <div id="coach">
    <p class="head-title">教练管理</p>
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
          <img :src="scope.row.picture" alt="" class="user-logo">
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
        max-width="120"
        max-height="50">
      </el-table-column>
      <el-table-column
        label="编辑"
        align="center"
        min-width="120">
        <template scope="scope">
          <span @click="editRemarks(scope.$index, scope.row.id)"><i class="el-icon-edit"></i></span>
          <span class="line">|</span>
          <span @click="deleteCoach(scope.$index, scope.row.id)"><i class="el-icon-delete"></i></span>
        </template>
      </el-table-column>
    </el-table>
    <!--页脚分页-->
    <Pagination @pagination="getPagination" :totalFather='total'></Pagination>

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
      <div class="search-result" v-if="coachInformation">
        <el-row>
          <el-col :span="4"><span><img :src="picture" alt=""></span></el-col>
          <el-col :span="4"><span class="lineHeight">{{userName}}</span></el-col>
          <el-col :span="4"><span class="lineHeight">{{gender}}</span></el-col>
        </el-row>
      </div>
      <div class="search-result" v-if="noCoachInformation" style="height: 33px">
        <p class="no-coachInformation">该手机号尚未注册ArcBody</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCoachBtn" class="preservation-btn" :disabled="disabled">添 加</el-button>
        <el-button @click="addCoach = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>

    <!--备注信息弹框-->
    <el-dialog
      title="备注信息"
      :visible.sync="remarksMessage"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="modifyRemarks" placeholder="请填写备注信息，如真实姓名"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="confirmRemark" class="preservation-btn">保 存</el-button>
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
      <span slot="footer" class="dialog-footer">
        <el-button @click="confirmDeleteCoach" class="preservation-btn">确 定</el-button>
        <el-button @click="confirmDelete = false" class="cancel-btn">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import Pagination from '../../../.././components/pagination.vue'
  import api from '../../../.././vuex/api'
  export default {
    data() {
      return {
        coachData:[{
          id:'id1',
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏1',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        },{
          id:'id2',
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏2',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        },{
          id:'id3',
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏3',
          gender: '男',
          time: '2017-05-03',
          remarks: '皮皮瞎'
        }],
        addCoach: false,
        remarksMessage:false,
        confirmDelete:false,
        coachInformation: false,
        disabled: true,
        noCoachInformation: false,
        $id: '',
        mobile: '',
        picture: '//www.baidu.com/img/bd_logo1.png',
        userName: '张鹏',
        gender: '男',
        time: '',
        total: 500,
        pageSize: 10,
        currentPage: 1,
        jumperToPage: 1,
        modifyRemarks: ''
      }
    },
    watch: {
      mobile(val) {
        if(this.mobile.length === 11) {
//          api.SearchCoach({mobile:this.mobile}).then(function (data) {
//            console.log('成功')
//          }).catch(function (error) {
//            console.log('失败')
//          })
          this.coachInformation = true
          this.disabled = false
        }else if(this.mobile.length === 0) {
          this.coachInformation = false
          this.noCoachInformation = false
          this.disabled = true
        }
      }
    },
    components: {
      Pagination
    },
    methods: {
      addCoachBtn() {
//        if (this.coachData.indexOf(1) !== -1){
//        }else {
//          this.$message.error('您添加的教练已存在');
//        }
        this.coachData.push({
          id: 1,
          picture: '//www.baidu.com/img/bd_logo1.png',
          userName: '张鹏',
          gender: '男',
          time: this.$Common.getNewDate()
        })
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.addCoach = false
      },
      editRemarks(index, id) {
        this.$id = id
        this.remarksMessage = true
      },
      confirmRemark() {
//        api.ConfirmRemarks({modifyRemarks:this.modifyRemarks}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        this.coachData.forEach( (item) => {
          if(item.id === this.$id) {
            item.remarks = this.modifyRemarks
          }
        })
        this.remarksMessage = false
      },
      deleteCoach(index, id) {
        this.$id = id
        this.confirmDelete = true
      },
      confirmDeleteCoach(index, rows) {
//        api.RemoveCoach({coachId:this.$id}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        this.coachData.forEach( (item, index) => {
          if(item.id === this.$id) {
            this.coachData.splice(index, 1)
          }
        })
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.confirmDelete = false
      },
      // 分页方法
      getPagination(currentPage, jumperToPage) {
        this.currentPage = currentPage || 1
        this.jumperToPage = jumperToPage || 1
//        api.CoachManage({currentPage:this.currentPage,jumperToPage:this.jumperToPage}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        console.log(this.currentPage + '当前页')
        console.log(this.jumperToPage + '跳转页')
      }
    },
    created() {
      this.getPagination()
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
    .no-coachInformation {
      line-height: 37px;
      color: red;
    }
  }
</style>
