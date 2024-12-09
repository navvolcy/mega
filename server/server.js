const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const logger = require("morgan")
const {COURSES, LOGS, USERS} = require("./model");
//const {MongoClient} = require("mongoose");
const url = "mongodb+srv://navvolcy:21296Vpu01@cluster0.0h4wite.mongodb.net/uvu_classes?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
var cors = require('cors');
const { MongoClient } = require('mongodb');
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

app.get('/api/check-seeded', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.json({ seeded: count > 0 }); 
  } catch (error) {
    console.error('Error checking seeded status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
async function main() {
  mongodb = await mongoose.connect(url)
  .then(()=>{
    const seedData =[
      {username: "10611913" , password: "willy", role:'admin', university: 'uvu',  firstname:"root_uvu", lastname:"Smith"},
      {username: "10611914" , password: "swoopy", role:'admin', university: 'uofu',  firstname: "root_uofu", lastname:"Johnson"}

    ];

    const User = mongoose.model('Users', {username: String, password: String, role: String, university: String, firstname: String, lastname: String });
    
    User.insertMany(seedData)
    .then(() => {
      console.log('Database seeded');
      console.log("Pinged your deployment. you successfully connected to MongoDB");})
    .catch(err => console.error('Error seeding database:', err));
  })
  .catch(err => console.error('Error connecting to database'))

  
  
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
        //console.log("dbcourses: ", dbcourses);
      }) 
    COURSES.find({})
      .exec()
      .then((data)=>{
        data.map((display)=>{
          courses.push(display);
        })
        //console.log("course: ", courses)
      })
    USERS.find({})
      .exec()
      .then((data)=>{
        data.map((user,j)=>{
          users.push(user);
        })
       // console.log("users: ", users)
      })
  })
  .catch((err)=> console.log("not connected", err));



  //get courses for selected drop down
  app.get("/api/view/:searchId/:courses", (req, res) =>{
    console.log("reached view call server side")
    const userNumID = req.params.searchId;
    const userCourses= req.params.courses;
    const logs = dbcourses
          .filter( log => log._doc.uvuId === userNumID && log._doc.courseId === userCourses)
          .map(log =>{
            return {date:log.date, text:log.text}
            
          })
          console.log("view",{date:logs[0].date, text: logs[0].text} )
   res.send({date:logs[0].date, text: logs[0].text} )
  })

  //post to logs
  app.post("/api/logs/:searchId", async(req, res) => {
    try{
      const client = new MongoClient(url);
      await client.connect();

      const db = client.db("uvu_classes")
      const collection = db.collection("logs")

      const updatedLogs = req.body;

      const result = await collection.insertOne(updatedLogs)

      res.status(201).json({message: 'Data inserted successfully', insertedId: result.insertedId})
    }catch(err){
      console.error(err);
      res.status(500).json({message: 'Error inserting data'})
    }

  });

  //post users
  app.post("/api/users", async(req, res)=>{
    try{
      const client = new MongoClient(url);
      await client.connect();

      const db = client.db("uvu_classes")
      const collection = db.collection("users")

      const updatedUsers = req.body;

      const result = await collection.insertOne(updatedUsers)

      res.status(201).json({message: 'Data inserted successfully', insertedId: result.insertedId})
    }catch(err){
      console.error(err);
      res.status(500).json({message: 'Error inserting data'})
    }
    

  })

  //loging in 
  app.get("/api/login/:nameId/:password", (req, res)=> {
    console.log("get request reached")
    const nameId = req.params.nameId;
    const userpassword = req.params.password;
    const role = users
      .filter(user => user._doc.username=== nameId && user._doc.password === userpassword)[0].role;
    res.send({role, courses});
  });


  //search uvu id 
  app.get ("/api/login/:searchId", (req, res)=> {
    console.log("Search request reached!")
    const search = req.params.searchId;
    const userCardInfo = users 
       .filter(user=> user._doc.username === search)
       .map(user => {
        return {
          name:user.firstname, 
          role:user.role
        }})
       console.log("Search: ", userCardInfo)
        //setting propeity on object

    res.send({name:userCardInfo[0].name, role:userCardInfo[0].role});
   
  })







app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})