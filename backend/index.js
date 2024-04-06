import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

 dotenv.config()
const app = express();

// connected to db

mongoose.connect(process.env.MONGO).then(()=>{
 console.log("connected to mongodb");
}).catch(()=>{
console.log("not connected to db");
})

// starting server

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})