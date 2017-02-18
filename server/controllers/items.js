/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/

console.log("Loaded: /server/controllers/items.js")

module.exports = {
    index: function(request, response) {
        console.log("Items Index");

    },
    create: function(request, response) {
        console.log("Items Create");
    }
};
