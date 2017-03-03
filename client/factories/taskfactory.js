/*
/client/factories/item.js
The "Client side DB" / connnection between the client and the server (where the client can request additional data)
*/
app.factory("taskFactory", function($http) {


    var factory = {};

    factory.createuser = function(data, callback) {
      $http.post('/createuser', data).then(function(response) {
        factory.user = response.data
        console.log('THIS IS THE RESPONSE.DATA', response.data);
        callback(response)
      })
    }


factory.uploadtune = function (data, callback) {
  console.log('THIS IS THE FACTORY USER ID', factory.user._id);
  $http.post('/uploadtune', {userId: factory.user._id, tune: data}).then(function(response) {
    console.log('THIS IS THE RESPONSE IN THE SERVER', response)
    callback(response)
  });
}

factory.getdata = function(callback) {
  $http.get('/uploadtune').then(function(response) {
    console.log('THIS IS THE RESPONSE FROM FACTORY!!', response, 'END OF FAC REPONSE');
    callback(response)
  });
}


factory.ValidateUser = function(user, callback) {
  $http.post('/loginuser', user).then(function(response) {
    console.log('THIS IS THE RESPONSE IN FAC', response.data);
    factory.user = response.data
    callback(response.data)
  })
}

factory.updatecounter = function(tune, callback) {
  $http.post('/updatecounter', {tune: tune}).then(function(response) {
    console.log('this is the response',response.data.tune.count);
    callback(response.data.tune.count)
  })
}

factory.Delete = function(tune, callback) {
  console.log('TUNE ID',tune._id);
  $http.remove('/deletetune/'+tune._id).then(function(response) {
    callback(response)
  })
}


return factory;

})
