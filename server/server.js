const express = require('express');
const mongoose = require("mongoose")
const {COURSES, LOGS, USERS} = require("./model");
const bodyParser = require("body-parser");
const logger = require("morgan")
//const {MongoClient} = require("mongoose");
const url = "mongodb+srv://navvolcy:21296Vpu01@cluster0.0h4wite.mongodb.net/uvu_classes?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
var cors = require('cors')
const port = 3000;



app.use(logger("dev"));
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.set("strictQuery",false);



let mongodb;
let dbcourses = [];
let courses = [];
let users = [];
async function main() {
  mongodb = await mongoose.connect(url);

  console.log("Pinged your deployment. you successfully connected to MongoDB");
  console.log("connected");
  
}

//connect to Database
//query db

main()
  .then(()=> {
    LOGS.find({})
      .exec()
      .then((data)=>{
        data.map((course, k)=>{
          dbcourses.push(course);
        })
        console.log("dbcourses: ", dbcourses);
      }) 
    COURSES.find({})
      .exec()
      .then((data)=>{
        data.map((display)=>{
          courses.push(display);
        })
        console.log("course: ", courses)
      })
    USERS.find({})
      .exec()
      .then((data)=>{
        data.map((user,j)=>{
          users.push(user);
        })
        console.log("users: ", users)
      })
  })
  .catch((err)=> console.log("not connected", err));


  app.get("/api/login/:nameId/:password", (req, res)=> {
    console.log("get request reached")
    const nameId = req.params.nameId;
    const userpassword = req.params.password;
    const role = users
      .filter(user => user._doc.name_id === nameId && user._doc.password === userpassword)[0].role;
    res.send({role});
  });






app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})