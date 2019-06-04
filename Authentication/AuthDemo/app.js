var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://devstvn:devstvn123@cluster0-yntnc.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log("Connected to DB!");
}).catch(err => {
  console.log("ERROR:", err.message);
});

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(8000, '127.0.0.1', function(req, res) {
  console.log("Server started..........");
});