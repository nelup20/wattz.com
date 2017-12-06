const express = require("express"),
      app = express(),
      bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "html");
app.use(express.static("src/assets"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});


app.listen(process.env.PORT || 3000, function(error){
    console.log("SERVER STARTED ON PORT 3000");
});