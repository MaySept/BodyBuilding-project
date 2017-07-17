启动
npm run mock
json-server mock/faker-data.js

http://localhost:3004/address就是数据请求地址


配置：
dev-server文件: app.use('/mock',express.static('./mock'))

package.json文件： "scripts": {
                       "mock": "json-server --watch mock/db.json",
                       "mockdev": "npm run mock & npm run dev"
                    }
1.npm install -g json-server
2.cnpm install faker
3.json-server mock/faker-data.js -p 3004
