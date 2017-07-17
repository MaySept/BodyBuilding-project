<template>
  <div id="homePage">
    <SideBar></SideBar>
    <HeadNavigation></HeadNavigation>
    <Loading></Loading>
    <router-view class="details-page"></router-view>
  </div>
</template>

<script>
  import SideBar from '../.././components/sidebar.vue'
  import HeadNavigation from '../.././components/header.vue'
  import Loading from '../.././components/loading.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      SideBar,
      HeadNavigation,
      Loading
    },
    created() {
      if(!sessionStorage.getItem("isLogin")) {
        window.location.href = 'http://localhost:8080/module/login.html#/login/loginView'
      }
    }
  }
</script>
<style>
  html, body, #homePage {
    height: 100%;
    width: 100%;
  }
  .details-page {
    width: 80%;
    float: right;
    padding: 20px 30px;
    max-height: 750px;
    overflow-y: auto;
  }
</style>
