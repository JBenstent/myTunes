app.controller("uploadtune", function(taskFactory, $scope, $location, Upload) {
  if (!taskFactory.user) {
    $location.url('/createaccount')
  }

  $scope.add = function(){
    console.log('USER!!', taskFactory.user);
    Upload.upload({
      url: '/uploadtune',
      data: {user: taskFactory.user, tune: $scope.file}
    }).then(function(response){
      console.log('this is the response',response);
      $location.url('/')
    });
  }
})
