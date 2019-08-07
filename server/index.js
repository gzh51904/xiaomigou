/* 安装了mongodb express cors(设置跨域) */

const express = require('express');
const app = express();
const {create} = require('../token/token')
/* 接收服务器传过来的json */
app.use(express.json())

const cors = require('cors');
/* 设置允许跨域 */
/* 其他访问的是不同域名,存在跨域 */
app.use(cors());
// app.use(require('cors')());
app.use(express.urlencoded({extended:false}),express.json());

const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1902';

const {token:{verify},formatData} = require('../token') 
//注册验证 加密token
app.use('/verify',(req,res)=>{
    // 校验token
    // 成功：放行
    // 失败：
    let token = req.headers.authorization;console.log('mytoken:',token)
    if(!verify(token)){
        res.send(formatData({code:401,msg:'unauthorized'}))
    }else{
        res.send(formatData())
    }
});

//检测账号是否存在，无则添加
    app.post('/api/reg',(req,res)=>{
        const insertDocuments = async function (db, callback) {
            const collection = db.collection('xiaomigou');
            let {phone} = req.body.values
       let a = await collection.find({phone}).toArray()
        if(a.length == 0){
                collection.insertMany([
                    /* post返回的数据在body中 */
                    req.body.values
                ],function(err,result){callback()})
             }else{
               res.send("用户名已存在")
             }
            console.log(a);
    }
        MongoClient.connect(url, function (err, client) {
            const db = client.db(dbName);
            insertDocuments(db, function () {
                client.close();
            });
        });
    })


/* 添加 */
app.post('/api/inst', async (req, res) => {

    /*  
    请求方式
    console.log(req.body);
    this.$axios.post('http://localhost:1904/api/inst',{index:14323535656}).then(res=>{
        console.log(res);
    })
    */
    const insertDocuments = function (db, callback) {

        const collection = db.collection('xiaomigou');


        collection.insertMany([
            /* post返回的数据在body中 */
            req.body
        ], function (err, result) {

            callback(result);
        });
    }

    MongoClient.connect(url, function (err, client) {
        const db = client.db(dbName);
        insertDocuments(db, function () {
            client.close();
        });
    });

});




/* 查询账户是否存在*/
app.get('/api/find/login', async (req, res) => {

    /* 
    传递方式
    this.$axios.get('http://localhost:1904/api/find',{params:{index:1233}}).then(res=>{
        console.log(res);
    })
    console.log(req.query);
    */
    
    const findDocuments = function (db, callback) {

        const collection = db.collection('xiaomigou');
        collection.find({phone:req.query.phone,password:req.query.password}).toArray(function (err, docs) {
            /* 将数据返回给前端 */
            console.log(docs,req.query);
            if(docs.length > 0){
                let Athorization = create(req.query.phone);
                res.send(formatData({data:Athorization}))
            }else{
                res.send(formatData({code:250}))
            }
            callback();
        });
    }

    MongoClient.connect(url, function (err, client) {

        const db = client.db(dbName);
        findDocuments(db, function () {
            client.close();
        });
    });

});

//帖子模糊查询
app.get('/api/dimfind', async (req, res) => {
    let {n,name} = req.query;
    let u = new RegExp(n)
    const findDocuments = function (db, callback) {
        // let url =`${name}: {$regex:/${n}/i}`;
        const collection = db.collection('xiaomigou');
        collection.find({[name]:{$regex:u}}).toArray(function (err, docs) {
            /* 将数据返回给前端 */
            res.send(docs);
            callback(docs);
        });
    }
    MongoClient.connect(url,{ useNewUrlParser: true },function (err, client) {

        const db = client.db(dbName);
        findDocuments(db, function () {
            client.close();
        });
    });

});

//修改
app.put('/api/put', async (req, res) => {

    /* 
    请求方式
    console.log(req.body);
    this.$axios.put('http://localhost:1904/api/put',[{index:1234},{index:3243565}]).then(res=>{
        console.log(res);
    })
    */
    const updateDocument = function (db, callback) {

        const collection = db.collection('xiaomigou');

        collection.updateOne(req.body[0]
            , { $set: req.body[1] }, function (err, result) {
                res.send(result);
                callback(result);
            });
    }

    MongoClient.connect(url, function (err, client) {

        const db = client.db(dbName);
        updateDocument(db, function () {
            client.close();
        });
    });

});


/* 删除 */
app.delete('/api/delete', async (req, res) => {

    /* 
    请求方式
    console.log(req.body);
    this.$axios.delete('http://localhost:1904/api/delete',{index:1234}).then(res=>{
        console.log(res);
    })
    */
    const removeDocument = function (db, callback) {
        const collection = db.collection('xiaomigou');
        collection.deleteOne(req.body, function (err, result) {
            // assert.equal(err, null);
            console.log(err)
            callback(result);
        });
    }
    MongoClient.connect(url, function (err, client) {

        const db = client.db(dbName);
        removeDocument(db, function () {
            client.close();
        });
    });
});


app.listen(19041, () => {
    console.log('http://localhost:1904');
})
