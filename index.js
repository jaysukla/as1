const express = require("express");
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
app.use(cors());



app.get('/', (req, res) => {
    res.send('Sunil Electrocs is Live ');
  });




app.listen(5500,()=>{



    console.log("server is active ");
})