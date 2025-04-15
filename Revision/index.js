let express = require("express");
let route = require("./Route/routing");
let db = require("./Db")
require("dotenv").config();


let app=express();

app.use("/MeriCompany/",route);
db().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started at http://localhost:${process.env.PORT}/MeriCompany`)
    })
    
}).catch((e)=>{
    console.log(e)
})



