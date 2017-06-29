<template>
  <el-pagination
    @current-change="currentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    layout="total, prev, pager, next, jumper"
    :total="totalFather">
  </el-pagination>
</template>

<script>
  export default{
    data(){
      return {
        currentPage: 1,
        jumperToPage: 1,
        pageSize: 10
      }
    },
    props: ['totalFather'],
    watch: {
      jumperToPage (val, oldVal) {
        this.currentPage = val
      }
    },
    methods: {
      currentChange(val) {
        this.jumperToPage = val
        this.$emit("pagination",this.currentPage,val)
      }
    }
  }

</script>
<style>
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
</style>
