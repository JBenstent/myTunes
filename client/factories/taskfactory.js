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
    }

//     factory.bnewTask = function(TaskFormInfo, callback) {
//         $http.post('/create', TaskFormInfo).then(function(response) {
//             alert('Task has been posted!')
//             callback(response.data)
//         })
//     }
//
//     factory.getData = function(callback) {
//       $http.get('/alltasks').then(function(response) {
//         console.log('this is response', response)
//         callback(response.data.tasks)
//       })
//     }
//
//     factory.FacUpdateStatus = function(task, status, callback) {
//         $http.put('/task', {task_id:task._id, NewStatus:status}).then(function(response) {
//           console.log('this is the response', response)
//           // console.log('this is the task status:', status)
//           callback(response)
//         alert('Status has been updated')
//     })
// }
//

factory.uploadtune = function (data, callback) {
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
