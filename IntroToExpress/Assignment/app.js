var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "I hate you human",
    goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
})

app.get("/repeat/:str/:num", function(req, res) {
  var str = req.params.str;
  var num = Number(req.params.num);
  var result = "";
  
  for (var i = 0; i < num; i++) {
    result += str + " ";
  }
  
  res.send(result);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started!!!");
});