/*

/client/factories/item.js
The "Client side DB" / connnection between the client and the server (where the client can request additional data)

*/

app.factory("taskFactory", function($http) {


    var factory = {};

    factory.bnewTask = function(TaskFormInfo, callback) {
        $http.post('/create', TaskFormInfo).then(function(response) {
            alert('Task has been posted!')
            callback(response.data)
        })
    }

    factory.getData = function(callback) {
      $http.get('/alltasks').then(function(response) {
        console.log('this is response', response)
        callback(response.data.tasks)
      })
    }

    factory.FacUpdateStatus = function(task, status, callback) {
        $http.put('/task', {task_id:task._id, NewStatus:status}).then(function(response) {
          console.log('this is the response', response)
          // console.log('this is the task status:', status)
          callback(response)
        alert('Status has been updated')
    })
}

factory.ValidateUser = function(username, callback) {
  $http.post('/user', username).then(function(response) {
    callback(response)
  })
}
return factory;

})
