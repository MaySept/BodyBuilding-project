<template>
  <div id="homePage">
    <SideBar></SideBar>
    <headNavigation></headNavigation>
    <div class="details-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SideBar from '../.././components/sidebar.vue'
  import headNavigation from '../.././components/header.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      SideBar,
      headNavigation
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
