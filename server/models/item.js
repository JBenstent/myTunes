/*
/server/models/item.js
create database schema for "item"
*/

console.log("Loaded: /server/models/item.js")

var mongoose = require("mongoose")

var UserSchema = mongoose.Schema({
  username: String
})
var TaskSchema = mongoose.Schema({
    task: String,
    status: String
});



mongoose.model("Task", TaskSchema);
mongoose.model("User", UserSchema);
