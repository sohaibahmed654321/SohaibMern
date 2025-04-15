let mongo = require("mongoose")
require("dotenv").config();

let url = process.env.ALTLAS_URL;

mongo.connect(url).then(()=>{
    console.log("Connection hogya")

}).catch((E)=>{
    console.log(E)
})