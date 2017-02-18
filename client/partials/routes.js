/*

client/partials/config.js
Configure client routes, and really anything

*/

var app = angular.module("itemsApp", ["ngRoute"]);
console.log("creating app")

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/items-index.html",
        controller: "itemsIndex"
    });
    console.log("Configuring routes")
});
