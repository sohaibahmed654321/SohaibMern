let exp = require("express");
let co = require("../Func/logic")

let r =exp.Router();

r.get("/i",co.Home);
r.get("/a",co.About);
r.get("/s",co.Service);
r.get("/f",co.Faq);
r.get("/c",co.Contact);

module.exports = r;