var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongosse = require("passport-local-mongoose");
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

app.use(require("express-session")({
    secret: "I love Jade",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===============
// ROUTES
//===============

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

// Auth Routes

//show sign up form
app.get("/register", function(req, res) {
    res.render("register");
});

app.listen(8000, '127.0.0.1', function(req, res) {
    console.log("Server started..........");
});