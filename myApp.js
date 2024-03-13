require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
absolutePath = __dirname + '/views/index.html'
publicPath = __dirname + "/public"



app.use("/",logger);
app.get("/", loadIndex);
app.use("/public",express.static(publicPath));
app.get("/json", loadJson);
app.get('/now', getDate, jsonTime);


function getDate(req,res,next){
  time = new Date().toString()
  console.log(time);
  next();
}

function jsonTime(req,res){
  formattedTime = {"time": req.time}
  res.json(formattedTime);
}








function logger(req, res, next){
  detailString = req.method+" "+req.path+" - "+req.ip
  console.log(detailString);
  next();
}

function loadJson(req,res){
  jsonText = {"message": "Hello json"}
  console.log(process.env.MESSAGE_STYLE);
  
  if (process.env.MESSAGE_STYLE === "uppercase"){
    jsonText.message = jsonText.message.toUpperCase();
    console.log("uppercase");
    res.json(jsonText);
  }else{
    console.log("lower case");
    res.json(jsonText);
  }  
}


function loadIndex(req, res){
    res.sendFile(absolutePath);
  }



































 module.exports = app;
