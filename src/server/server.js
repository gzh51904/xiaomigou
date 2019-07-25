const express = require('express')

const proxy = require('http-proxy-middleware')

//引入路由
const allRouter = require('./index.js')

//利用express模块创建一个服务器
const app = express();
app.use(allRouter);

//静态资源服务器； 匹配静态资源，则返回；如果不匹配则进入下一个中间键
app.use(express.static('./'));

// 代理服务器
app.use('/*',proxy({
    target:'http://www.smallmi.com/',
    changeOrigin:true,
    '^/':'/'
}))


app.listen(1904,()=>{
    console.log('server is run')
})
