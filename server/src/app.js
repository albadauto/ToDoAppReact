const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const indexRoute = require("./routes/index.route");
//CONFIGS
app.use(express.json());
app.use(cors());



app.use('/', indexRoute)

mongoose.connect("mongodb://localhost/sisteminha", () => console.log("NA BOA NO MONGODB"))
app.listen(5000, () => {
  console.log("API TODOREACT RODANDO!");
})