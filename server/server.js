const express = require('express');
const mongoose = require('mongoose');

//链接mongoose
const DB_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
        console.log('mongo connection successfully');
    })
    //类似mysql的表，mongo里面有文档
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true },
}));
//新增数据
// User.create({
//         user: "imooc",
//         age: 19
//     }, (err, doc) => {
//         if (!err) {
//             console.log(doc)
//         } else {
//             console.log(err)
//         }
//     })
User.update({ "age": "19" }, { "$set": { user: "liuning" } }, (err, doc) => {
    if (!err) {
        console.log(doc)
    }
});
User.update({ "user": "imooc" }, { "$set": { "user": "gaosui" } }, (err, doc) => {
        if (!err) {
            console.log(doc);
        }
    })
    //新建app
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>你是我的眼</h1>`)
})

app.get('/data', (req, res) => {
    User.find({}, (err, doc) => {
        if (!err) {
            res.json(doc)
        } else {
            console.log(err)
        }
    })
})

app.listen(9093, () => {
    console.log('nodejs app start at port 9093')
})