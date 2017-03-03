app.controller("uploadtune", function(taskFactory, $scope, $location, Upload) {

console.log('THIS IS THE FACTORY USER',taskFactory.user);

  if (!taskFactory.user) {
    $location.url('/createaccount')
  }

  $scope.add = function(){
    console.log('USER!!', taskFactory.user);
    Upload.upload({
      url: '/uploadtune',
      data: {user: taskFactory.user, tune: $scope.file, artist: $scope.artist, song: $scope.song}
    }).then(function(response){
      console.log('this is the response',response);
      $location.url('/')
    });
   }
  });
