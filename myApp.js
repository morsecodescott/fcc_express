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
app.get("/:word/echo", echo);
app.route("/name").get(getName);


function getName(req,res) {
  firstName = req.query.first
  lastName = req.query.last
  console.log(firstName+" "+lastName);
  res.json({"name": firstName+" "+lastName});
}







function echo(req,res){
  echoJson = {"echo": req.params.word}
  res.send(echoJson);
}


app.get('/now',(req,res,next)=>{
  req.time = new Date().toString()
  next();
},(req,res)=>{

  formattedTime = {"time": req.time}
  res.send(formattedTime);
});








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
