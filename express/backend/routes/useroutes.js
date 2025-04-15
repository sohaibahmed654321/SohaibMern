const UserContoller = require("../controller/usercontoller");
const express = require('express');
const userroutes =express.Router();
userroutes.post("",UserContoller.create)
userroutes.get("",UserContoller.list)
userroutes.put("/:id",UserContoller.updates)
userroutes.delete("/:id",UserContoller.delet)
module.exports=userroutes