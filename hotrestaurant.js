var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
var reserves = [
    
]



app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

