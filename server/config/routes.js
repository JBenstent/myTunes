/*

/server/config/routes.js
configure the routes (listen for routes, connect to controllers)
*/

console.log("loaded /server/config/routes.js")

var ItemsController = require("../controllers/items") //exporting the results of routes

module.exports = function(app) {

    app.get("/items", ItemsController.index) //Controller get items
    app.post("/items", ItemsController.create) //Controller create items

};
