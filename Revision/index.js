let express = require("express");
let route = require("./Route/routing");
let db = require("./Db")
let user = require("./Collection/User")
require("dotenv").config();


let app=express();

app.use("/MeriCompany/",route);

let datajao = async function(){
    try{
        user.create({
            user_name:"Sohaib",
            email:"so@mail.com",
            password:"1234",
            age:25
        })
        console.log("Data Added")
    }catch(error){
        console.log(error)
    }
}




db().then(()=>{
    datajao();
    app.listen(process.env.PORT,()=>{
        console.log(`server started at http://localhost:${process.env.PORT}/MeriCompany`)
    })
    
}).catch((e)=>{
    console.log(e)
})



