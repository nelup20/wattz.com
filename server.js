const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  ejs = require("ejs"),
  path = require("path"),
  nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views/assets")));

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/email", function(req, res){
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "nplatonovbusiness@gmail.com", 
        pass: "" // password
    }
});
  var mailOptions = {
  from: "Wattz.com",
  to: email,
  subject: "Re:  " + subject,
  html: `<h2>Dear ${name}</h2>
      <div> We are very sorry to hear you are having this problem.
      <br> Our team will try to solve this issue as soon as possible.
      <br> If you have anymore questions you can checkout our FAQ section.
      </div>
      <div>Thank you for understanding and we hope you have a wonderful day.</div>
      <h3>THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLOY TO THIS EMAIL.</h3>
      <hr>
      <h3>Your message: </h3>
      ${message}
  `,
  };
  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      console.log("SOMETHING WENT WRONG");
    } else {
      console.log("MESSAGE SENT: " + info.response);
      console.log("SUCCESS!")
    }
  });
});

app.listen(process.env.PORT || 3000, function(error) {
  console.log("SERVER STARTED ON PORT 3000");
});
