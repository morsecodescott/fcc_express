let express = require('express');
let app = express();
console.log("Hello World");
absolutePath = __dirname + '/views/index.html'
publicPath = __dirname + "/public"


app.get("/", loadIndex);
app.use("/public",express.static(publicPath));
app.get("/json", loadJson);

MESSAGE_STYLE = "uppercase";

function loadJson(req,res){
  jsonText = {"message": "Hello json"}
  console.log(process.env);
  
  if (MESSAGE_STYLE === "uppercase"){
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
