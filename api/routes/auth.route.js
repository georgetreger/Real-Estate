import express from 'express'


const router = express.Router();

 router.get('/', (req, res)=>{
  res.send("dnt fuck with me this time")
 })

export default router;