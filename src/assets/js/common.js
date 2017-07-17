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
  },

  // 存储cookie  变量名/变量值/过期时间
   setCookie: (cname,cvalue,exdays) => {
     let d = new Date();
     d.setTime(d.getTime()+(exdays*24*60*60*1000));
     let expires = "expires="+d.toGMTString();
     document.cookie = cname + "=" + cvalue + "; " + expires;
   },

  // 取cookie
  getCookie: (cname) =>{
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
      let c = ca[i].trim();
      if (c.indexOf(name)===0) return c.substring(name.length,c.length);
    }
    return "";
  },

  // 清除cookie
  clearCookie: (cname) => {
    setCookie(cname, "", -1)
  }
}
// 使用：Common.isLogin
module.exports = Common
// 使用Common.Common.isLogin
/* export default {
    // Common: Common缩写
    Common
} */
