/*
/server/models/item.js
create database schema for "item"
*/

console.log("Loaded: /server/models/item.js")

var mongoose = require("mongoose")
//
var UserSchema = mongoose.Schema({
  username: String,
  image: String,
  followers: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  following: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  password: String
})

var TuneSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  file: {
    originalname: String,

  },
})






// mongoose.model("Task", TaskSchema);
mongoose.model("User", UserSchema);
