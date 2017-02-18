/*
/server/models/item.js
create database schema for "item"
*/

console.log("Loaded: /server/models/item.js")

var mongoose = require("mongoose")
var ItemSchema = mongoose.Schema({
    title: String,
    price: Number
});

mongoose.model("Item", ItemSchema);
