var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
function Table(name, phone, unique, email){
    this.name = name,
    this.phone = phone,
    this.unique = unique,
    this.email = email
}
var reservations = [];
var waitlist=[];



app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})
app.post("/reserve", function(req, res){
    var name = $("name").val();
    var phone = $("phone").val();
    var unique = $("unique").val();
    var email = $("email").val();
    var table = new Table(name, phone, unique, email);
    if(reservation.length<5){
        reservations.push(table);
    }else{
        waitlist.push(table);
    }
})
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

