const Common = {
    isLogin: () => {
        if (window.localStorage.getItem('userInfo') == null) {
            return false
        }
        return true
    },
    hasDeviceId: false,
    index2PageCount: (index, count) => Math.ceil(index / (count || 10)), // return lastIndex转总页数
    goBack: () => {
        window.history.go(-1)
    },

    // 获取当前日期
    getNewDate: () => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1; // 记得当前月是要+1的
      let dt = d.getDate();
      let today = year + "-" + month + "-" + dt;
      return today
    }
}
// 使用：Common.isLogin
module.exports = Common
// 使用Common.Common.isLogin
/* export default {
    // Common: Common缩写
    Common
} */
