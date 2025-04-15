const mongodb = require("mongoose");
const cors = require("cors");
const express = require("express");
const dbconnect = require('./backend/config/dbconnect');
const userrouter= require('./backend/routes/useroutes')
require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

mongodb.set("strictQuery", false);

dbconnect();
app.use('/user',userrouter);
app.listen(process.env.PORT, () => {
  console.log(`Welcome To http://localhost:${process.env.PORT} My Dear!`);
});