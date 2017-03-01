/*
/client/factories/item.js
The "Client side DB" / connnection between the client and the server (where the client can request additional data)
*/
app.factory("taskFactory", function($http) {


    var factory = {};

    factory.createuser = function(data, callback) {
      $http.post('/createuser', data).then(function(response) {
        callback(response)
      })
    },


factory.uploadtune = function (data, callback) {
  console.log('THIS IS THE FACTORY USER ID', factory.user._id);
  $http.post('/uploadtune', { userId: factory.user._id, tune: data}).then(function(response) {
    console.log('THIS IS THE RESPONSE IN THE SERVER', response)
    callback(response)
  })

},

factory.ValidateUser = function(user, callback) {
  $http.post('/loginuser', user).then(function(response) {
    console.log('THIS IS THE RESPONSE IN FAC', response.data);
    factory.user = response.data
    callback(response.data)
  })
}
return factory;

})
