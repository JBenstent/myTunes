/*

/server/config/routes.js
configure the routes (listen for routes, connect to controllers)
*/

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


console.log("loaded /server/config/routes.js")

var TunesController = require("../controllers/items") //exporting the results of routes

module.exports = function(app) {

    // app.get("/items", TasksController.index) //Controller get items
    app.post("/create", TunesController.create),
    app.post("/createuser", TunesController.createuser) //Controller create items
    app.post("/loginuser", TunesController.loginuser)
    app.post("/uploadtune", upload.single('tune'), TunesController.uploadtune)

};
