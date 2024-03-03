let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", getExpress);


function getExpress(req, res){
    res.send('Hello Express');
  }



































 module.exports = app;
