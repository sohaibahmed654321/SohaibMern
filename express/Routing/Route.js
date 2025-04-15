let exp = require("express")
let route = exp.Router()
let func = require("../Functions/logic")
route.get("/home",func.Home)

module.exports = route
