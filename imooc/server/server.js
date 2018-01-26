const express = require('express')
const mongoose = require('mongoose')
const app = express();
// 链接mongo ，并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongoose connect success');
})
//  user 表 
// user字段，字符类型，必填
// age 字段，数字类型，必填
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

// 新增数据
// User.create({
//     user:'xiaohua',
//     age:12
// },function(err,doc) {
//     if (!err) {
//         console.log(doc);
//         // { _id: 5a6b024477155b0a25ae72fb, age: 18, __v: 0 }
//     }else{
//         console.log(err);
//     }
// })
// {} 为过滤的对象，删除所有age:18的数据
// User.remove({age:18},function(err,doc){
//     console.log(doc);
// })

User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
    console.log(doc);
})

app.get('/',function (req,res) { 
    res.send('<h1> hello world </h1>')
});

app.get('/data', function (req, res) {
    // 查找数据
    User.find({},function (err,doc) { 
        res.json(doc);
     })
})



// 监听
app.listen(9093,function () { 
    console.log('node app ');
})