const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      ejs = require("ejs"),
      path = require("path");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views/assets")));


app.get("/", function(req, res){
    res.render("index");
});


app.listen(process.env.PORT || 3000, function(error){
    console.log("SERVER STARTED ON PORT 3000");
});