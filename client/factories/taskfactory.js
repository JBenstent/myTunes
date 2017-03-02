/*
/client/factories/item.js
The "Client side DB" / connnection between the client and the server (where the client can request additional data)
*/
app.factory("taskFactory", function($http) {


  var factory = {};

factory.createuser = function(data, callback) {
  $http.post('/createuser', data).then(function(response) {
    console.log(response);
    var myid = response.data.user._id
    var username = response.data.user.username
    factory.userID = myid
    factory.username = username
    callback(response)
  })
}

factory.uploadtune = function (data, callback) {
  $http.post('/uploadtune', { userId: factory.user._id, tune: data}).then(function(response) {
    console.log('THIS IS THE RESPONSE IN THE SERVER', response)
    callback(response)
  })

}

factory.ValidateUser = function(user, callback) {
  $http.post('/loginuser', user).then(function(response) {
    console.log('THIS IS THE RESPONSE IN FAC', response);
    var myid = response.data._id
    var username = response.data.username
    factory.userID = myid
    factory.username = username
    callback(response.data)
  })
}

factory.Followuser = function(user_id, callback){
  console.log(user_id);
  $http.post('/follow/'+ user_id).then(function(response){
    callback(response.data);
  })
}

factory.UNfollow = function(user_id, callback){
  console.log("user to unfollow:", user_id);
  $http.put('/unfollow/'+ user_id).then(function(response){
    callback(response.data);
  })
}


factory.whoisloggedin = function(loggedinUser){
  $http.get('/loggedin').then(function(userloggedin){
    console.log('yess',userloggedin);
    var myid = userloggedin.data.user._id
    var username = userloggedin.data.user.username
    loggedinUser(userloggedin, myid,username);
    factory.myid = myid;
    factory.username = username;
  })
}

factory.getUsers = function(allUsers){
  $http.get('/users').then(function(theUsers){
    allUsers(theUsers.data);
    console.log('These are all:', theUsers);
  })
}

factory.userprofile = function(user_id, profile){
  $http.get("/profile/" + user_id).then(function(profilegotten){
    profile(profilegotten);
  })
}
return factory;

})
