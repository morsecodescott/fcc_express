let express = require('express');
let app = express();
console.log("Hello World");
absolutePath = __dirname + '/views/index.html'
app.get("/", loadIndex);

publicPath = __dirname + '/public'

app.use('/public',express.static(publicPath));





function loadIndex(req, res){
    res.sendFile(absolutePath);
  }



































 module.exports = app;
