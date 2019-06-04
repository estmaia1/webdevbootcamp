var mongoose = require("mongoose"),
    passportLocalMongosse = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongosse);

module.exports = mongoose.model("User", UserSchema);