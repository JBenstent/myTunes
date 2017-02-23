/*

/client/controllers/new_item.js
the logic for new-item partial, will connect the factory with the template

*/
app.controller("Create-Task", function(taskFactory, $scope, $location) {
    $scope.createTask = function() {
        taskFactory.bnewTask({
            task: $scope.TaskFormInfo
        }, function(task) {
            $scope.TaskFormInfo = ""
            $location.url("/")
        })
    }
});
