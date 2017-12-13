
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  ejs = require("ejs"),
  path = require("path"),
  nodemailer = require("nodemailer"),
  multer  = require('multer'),
  upload = multer({ dest: 'uploads/' }),
  fs = require("fs"),
  filesDir = __dirname + "/uploads",
  sensitive = require("./sensitive"),
  paypal = require("paypal-rest-sdk"),
  cors = require("cors");


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views/assets")));
app.use(cors({credentials: true, origin: true}));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: "nplatonovbusiness@gmail.com", 
      pass: sensitive.emailPass // password
  }
});

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': sensitive.paypalID,
  'client_secret': sensitive.paypalSecret
});

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/career", function(req, res){
  res.render("career");
});

app.get("/products", function(req, res){
  res.render("products");
});

app.get("/news", function(req, res){
  res.render("news");
});

app.get("/faq", function(req, res){
  res.render("faq");
});

app.post("/buy", function(req, res){
  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/",
        "cancel_url": "http://localhost:3000/products"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": req.body.product,
                "sku": "electricity package",
                "price": req.body.price,
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": req.body.price
        },
        "description": "Electricity package provided by Wattz LLC"
    }]
};

var redirectURL;

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(var i = 0; i < payment.links.length; i++){
          if(payment.links[i].rel === "approval_url"){
             redirectURL = payment.links[i].href;
             res.send(redirectURL);   
          }
        };
    };
});


});

app.post("/email", function(req, res){
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;
  let mailOptions = {
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

app.post("/newsletter", function(req, res){
  let week = 7 * 24 * 60 * 60 * 1000;
  let mailOptions = {
    from: "Wattz.com",
    to: req.body.email,
    subject: "Weekly newsletter !",
    html: `<h4>Dear Customer,</h4>
          <div>Thank you for your subscription to our weekly newsletter</div>
          <div>Attached you will find this week's edition.</div>
          <div>Happy reading and happy holidays !</div>`,
    attachments: [
      {
        filename: "newsletter.pdf",
        path: "./attachments/newsletter.pdf"
      }
    ]
  };
  function sendMail(){
    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
        console.log("SOMETHING WENT WRONG");
      } else {
        console.log("MESSAGE SENT: " + info.response);
        console.log("SUCCESS!")
      }
    });
  };
  sendMail();
  setInterval(sendMail, week);
});

app.post("/career/application", upload.single("resume"), function(req, res){
  let applicant = {
    name: req.body.name,
    bday: req.body.bday,
    gender: req.body.gender,
    email: req.body.email,
  };
  var pronoun;
  applicant.gender === "male" ? pronoun = "Mister" : pronoun = "Miss";

  let mailOptions = {
    from: "Wattz.com",
    to: applicant.email,
    subject: "Job Application",
    html: `<h3>Dear ${pronoun} ${applicant.name},</h3>
          <div>We have received your application and will be reviewing it shortly.</div>
          <div>Please check your email again for a reply within a few days.</div>
          <div>Thank you for your application.</div>
          <hr>
          <h3>Your application: </h3>
          <div>Name: ${applicant.name}</div>
          <div>Birth date: ${applicant.bday}</div>
          <div>Gender: ${applicant.gender}</div>
          <div>Email: ${applicant.email}</div>
          <div>Resume: ${req.file.originalname}</div>`,
    attachments: [
      {
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  };
  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      console.log("SOMETHING WENT WRONG");
    } else {
      console.log("MESSAGE SENT: " + info.response);
      console.log("SUCCESS!");
      fs.readdir(filesDir, function(err, files){
        console.log(files.length);
        for (const file of files){
          fs.unlink(path.join(filesDir, file), function(err){
            if (err){
              console.log(err)
            };
          });
        }
      });
    }
  });
  res.render("success");
});

app.use(function(req, res){
  res.status(404);
  res.render("404");
});

app.listen(process.env.PORT || 3000, function(error) {
  console.log("SERVER STARTED ON PORT 3000");
});
