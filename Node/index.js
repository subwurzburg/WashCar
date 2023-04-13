const express = require('express');
const bp = require('body-parser')
const app = express()
const port = 3002;
const mongodb = require('mongodb')
const session = require('express-session')

const mongoClient = mongodb.MongoClient;
const { ObjectId } = require('mongodb')
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  next();
});
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json({ extended: true, limit: '50mb' }));


mongoClient.connect('mongodb://localhost:27017/WashCar').then(client => {
  const db = client.db('WashCar');
  const userCollection = db.collection('userInfo')
  // CRUD

  // Create 新增
  app.post('/additionUserInfo', (req, res) => {
    userCollection.insertOne(req.body).then(data => {
      res.send(data);
      res.status(200)
    }).catch(err => {
      console.log("請叫胖胖來看")
      console.log("getUserInfo", err)
    })
  })

  // Read 讀取
  app.get('/getUserInfo', (req, res) => {
    userCollection.find(req.query).toArray().then(data => {
      res.send(data);
      res.status(200);
    }).catch(err => {
      console.log("請叫胖胖來看")
      console.log("getUserInfo", err)
    })
  })
  // Update 更新
  app.patch('/editorUserInfo', (req, res) => {
    const updateUserInfo = { ...req.body }
    delete updateUserInfo._id
    userCollection.findOneAndUpdate(
      { _id: new ObjectId(req.body._id) },
      { $set: updateUserInfo }
    )
      .then(data => {
        res.send(data);
      }).catch((err) => {
        console.log("請叫胖胖來看")
        console.log("editorUserInfo", err)
      })
  })
  // Delete 刪除
  app.delete('/deleteUserInfo', (req, res) => {
    userCollection.deleteOne({ _id: new ObjectId(req.body._id) })
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log("請叫胖胖來看")
        console.log("deleteUserInfo", err)
      })
  })
})
app.listen(port, () => {
  console.log('已啟動' + port)
})