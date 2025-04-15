let mongo = require("mongoose")
require("dotenv").config()
 let url=process.env.DV

 mongo.connect(url).
 then(()=>{
    console.log("Connection Has been Established")
 }).catch((e)=>{
    console.log(e)
 })