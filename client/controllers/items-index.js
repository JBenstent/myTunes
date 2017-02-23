/*
/client/controllers/items-index.js
the logic for items-index partial, will connect the factory with the template
*/

app.controller("all-Tasks", function(taskFactory, $scope) {

taskFactory.getData(function(tasks) {
  $scope.tasks = tasks
})

$scope.updateStatus = function(task, status) {
  taskFactory.FacUpdateStatus(task, status, function(recievedResponse) {
    console.log('THIS IS THE RECIEVED RESPONSE:', recievedResponse )
    task.status = status
  })

}



  console.log('created all tasks page')
});
