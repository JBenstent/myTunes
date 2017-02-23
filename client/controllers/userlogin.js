app.controller("Login", function(taskFactory, $scope, $location) {
    $scope.createUser = function() {
      taskFactory.ValidateUser({username: $scope.username}, function(response) {
        console.log(response)
      })
    }
});
