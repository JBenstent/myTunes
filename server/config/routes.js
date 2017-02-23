/*

/server/config/routes.js
configure the routes (listen for routes, connect to controllers)
*/

console.log("loaded /server/config/routes.js")

var TasksController = require("../controllers/items") //exporting the results of routes

module.exports = function(app) {

    // app.get("/items", TasksController.index) //Controller get items
    app.post("/create", TasksController.create), //Controller create items
    app.get("/alltasks", TasksController.retrieve)
    app.put("/task", TasksController.update)
    app.post('/user', TasksController.createuser)

};
