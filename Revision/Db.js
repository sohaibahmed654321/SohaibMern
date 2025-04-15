let apple = require("mongoose");
require("dotenv").config();

let atlas_url = process.env.URL;
let Db_connect = async function(){
    apple.connect(atlas_url).then(()=>{
        console.log("Connection has been success")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports = Db_connect;