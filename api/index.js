import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import usersRouter from "./routes/users.route.js"
import hotelsRouter from "./routes/hotels.route.js"
// import roomsRouter from "./routes/rooms.route.js";

 dotenv.config()
const app = express()
app.use(express.json())

// middlewares
app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/hotels", hotelsRouter)
// app.use("/api/rooms", roomsRouter);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong";
   return res.status(errorStatus).json({
     success: false,
     status:errorStatus,
     message:errorMessage,
     stack: err.stack,
   }) 
})

 

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongodb");
}).catch(()=>{
    console.log("Not connected to db");
})
app.listen(5000, ()=>{
    console.log("Server is run on port 5000");
})