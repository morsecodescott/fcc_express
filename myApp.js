let express = require('express');
let app = express();
console.log("Hello World");
absolutePath = __dirname + '/views/index.html'
publicPath = __dirname + "/public"


app.get("/", loadIndex);
app.use("/public",express.static(publicPath));
app.get("/json", loadJson);



function loadJson(req,res){
  jsonText = {"message": "Hello json"}
  
  if (process.env.MESSAGE_STYLE == "uppercase"){
    jsonText.message = jsonText.message.toUpperCase();
    console.log("uppercase");
  }
  
  res.json(jsonText);
}


function loadIndex(req, res){
    res.sendFile(absolutePath);
  }



































 module.exports = app;
