const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const bcrypt= require ("bcrypt")
const dotenv = require ("dotenv").config()
const authController = require ("./controllers/authController")


const app = express();

// connected to db

mongoose.connect(process.env.MONGO).then(()=>{
 console.log("connected to mongodb");
}).catch(()=>{
console.log("not connected to db");
})
// routes & middlewares
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 app.use(cors())
  app.use("/auth", authController)
// starting server

app.listen(5000, ()=>{
    console.log("Server is running on port 5000!!");
})