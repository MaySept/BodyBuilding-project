<template>
  <div id="studentNumber">
    <p class="head-title">学员人数</p>
    <el-row>
      <el-button type="success" @click="addStudent = true">+ 新增学员</el-button>
    </el-row>
    <el-table
      :data="studentData"
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
        prop="fullName"
        label="姓名"
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
        prop="mobile"
        label="手机号"
        align="center"
        min-width="120">
      </el-table-column>
      <el-table-column
        label="最新测量时间"
        align="center"
        min-width="120">
        <template scope="scope">
          {{scope.row.time}}
        </template>
      </el-table-column>
      <el-table-column
        label="学员人数"
        align="center"
        max-width="120"
        max-height="50">
        <template scope="scope">
          <router-link :to="'/details/' + scope.row.id">
            <span>查看</span>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <Pagination @pagination="getPagination" :totalFather='total'></Pagination>

    <!--添加学员弹框-->
    <el-dialog
      title="添加学员"
      :visible.sync="addStudent"
      size="tiny"
      :before-close="handleClose">
      <el-input
        placeholder="请输入教练手机号"
        icon="search"
        v-model="mobile"
        :maxlength='11'
        :on-icon-click="handleIconClick">
      </el-input>
      <div class="search-result" v-if="studentInformation">
        <el-row>
          <el-col :span="5"><span><img :src="information.picture" alt=""></span></el-col>
          <el-col :span="5"><span class="lineHeight">{{information.userName}}</span></el-col>
          <el-col :span="5"><span class="lineHeight">{{information.gender}}</span></el-col>
        </el-row>
      </div>
      <div class="search-result" v-if="noStudentInformation" style="height: 33px">
        <p class="no-coachInformation">该手机号尚未注册ArcBody</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addStudentBtn" class="preservation-btn" :disabled="disabled">添 加</el-button>
        <el-button @click="addStudent = false" class="cancel-btn">取 消</el-button>
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
        studentData:[{
          id:'003',
          picture: 'http://upload.jianshu.io/users/upload_avatars/111568/c72e3b8c8092?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
          userName: '张鹏1',
          fullName: '皮皮瞎',
          gender: '男',
          mobile: '12312312312',
          time: '2017-05-03'
        },{
          id:'004',
          picture: 'http://upload.jianshu.io/users/upload_avatars/111568/c72e3b8c8092?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
          userName: '张鹏1',
          fullName: '皮皮瞎',
          gender: '男',
          mobile: '12312312312',
          time: '2017-05-03'
        },{
          id:'005',
          picture: 'http://upload.jianshu.io/users/upload_avatars/111568/c72e3b8c8092?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
          userName: '张鹏1',
          fullName: '皮皮瞎',
          gender: '男',
          mobile: '12312312312',
          time: '2017-05-03'
        }],
        addStudent: false,
        disabled: true,
        studentInformation: false,
        noStudentInformation: false,
        mobile: '',
        information: {
          id:'006',
          picture: 'http://upload.jianshu.io/users/upload_avatars/111568/c72e3b8c8092?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
          userName: '张鹏1',
          fullName: '皮皮瞎',
          gender: '男',
          mobile: '12312312312',
          time: '2017-05-03'
        },
        total: 300,
        pageSize: 10,
        currentPage: 1,
        jumperToPage: 1,

      }
    },
    components: {
      Pagination
    },
    watch: {
      mobile(val) {
        if(this.mobile.length === 11) {
//          api.SearchCoach({mobile:this.mobile}).then(function (data) {
//            console.log('成功')
//          }).catch(function (error) {
//            console.log('失败')
//          })
          this.studentInformation = true
          this.disabled = false
        }else if(this.mobile.length === 0) {
          this.studentInformation = false
          this.noStudentInformation = false
          this.disabled = true
        }
      }
    },
    methods: {
      // 分页方法
      getPagination(currentPage, jumperToPage) {
        this.currentPage = currentPage || 1
        this.jumperToPage = jumperToPage || 1
//        api.HistoryList({currentPage:this.currentPage,jumperToPage:this.jumperToPage}).then(function (data) {
//          console.log('成功')
//        }).catch(function (error) {
//          console.log('失败')
//        })
        console.log(this.currentPage + '当前页')
        console.log(this.jumperToPage + '跳转页')
      },
      addStudentBtn() {
        for(let i=0; i<this.studentData.length; i++){
          if(this.information.id === this.studentData[i].id){
            this.$message.error('您添加的学员已存在')
            return false
          }
        }
        this.studentData.push(this.information)
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.studentInformation = false
        this.disabled = true
        this.mobile = ''
        this.addStudent = false
      }
    },
    created() {
      console.log(parseInt(this.$route.params.cid, 10))
    }
  }
</script>
<style lang="scss">
  #studentNumber {
    .el-table {
      margin-top: 40px;
      .user-logo {
        width: 35px;
        height: 35px;
        margin-top: 2px;
      }
    }
  }
</style>
