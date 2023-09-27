const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser'); 
const UserDataModel = require('./models/UserData')
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//mongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/UserDataTable")
.then(()=>{
  console.log("connected to the mongoDB")
})
.catch((error)=>{
  console.log(error)
})

//Routes
app.use("/api/contacts",require("./routes/contactRoutes"))

app.post("/product",(req,res)=>{
  console.log(req.body);
  res.send(req.body)
})

app.post("/Login",(req,res)=> {
 const{email,password}=req.body;
 UserDataModel.findOne({email:email})
 .then(user=>{
      if(user){
        if(user.password)
        {
          res.json("success")
        }
        else{
          res.json("The password in incorrect")
        }
      }
      else
      {
        res.json("No record existed")
      }
 })
})
app.get('/api', (req, res) => { 
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is running");
});