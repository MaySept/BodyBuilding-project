/**
 * Created by zp6077 on 2017/7/14.
 */
module.exports = function () {
  var faker = require("faker");
  faker.locale = "zh_CN";
  var _ = require("lodash");
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    address: _.times(1000, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    })
  }
}

// 要先下载 npm install -g json-server
// json-server generate.js -p 3004
// http://localhost:3004/address
