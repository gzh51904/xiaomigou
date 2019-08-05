const express = require('express')

const proxy = require('http-proxy-middleware')

const request = require('request')

// console.log(request);

//引入路由
const allRouter = require('./index.js')

//利用express模块创建一个服务器
const app = express();
app.use(allRouter);

//静态资源服务器； 匹配静态资源，则返回；如果不匹配则进入下一个中间键
app.use(express.static('./'));


// http://m.hlxns.com/m/index.php?r=class/cysub&cid=22
app.use('/page',proxy({
    target:'http://m.hlxns.com/',
    changeOrigin:true,
    pathRewrite:{
        '^/page':'/'
    }
}))

// 代理服务器
app.use('/aa',proxy({
    target:'http://www.smallmi.com/',
    changeOrigin:true,
    pathRewrite:{
        '^/aa':'/'
    }
}))

app.use('/api',proxy({
    target:'http://cmsjapi.dataoke.com/api',
    changeOrigin:true,
    pathRewrite:{
        '^/api':'/'
    }
    
}))

app.use('/fenlei',proxy({
    target:'https://www.easy-mock.com/',
    changeOrigin:true,
    pathRewrite:{
        '^/fenlei':'/'
    }
}))



// // 代理服务器
// app.use('/*',proxy({
//     // http://m.hlxns.com/m
//     target:'http://www.smallmi.com/',
//     changeOrigin:true,
//     '^/':'/'
// }))




app.listen(1904,()=>{
    console.log('server is run')
})
