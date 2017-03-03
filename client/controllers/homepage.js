app.controller("homepage", function(taskFactory, $scope, $location) {

    console.log('created like controller')
    console.log('___________________',taskFactory.user);

    $scope.user = taskFactory.user

    taskFactory.getdata(function(tunedata) {
      console.log('THIS IS TUNE DATA!',tunedata, 'END OF TUNE');
      $scope.tunedata = tunedata


      for (var i = 0; i < tunedata.data.length; i++) {
        console.log($scope.tunedata.data[i].file.filename);
      }
    })

    $scope.updateCounter = function(tune) {
      if (!taskFactory.user) {
        $location.url('/homepaage')
      } else {
        taskFactory.updatecounter(tune, function(response){
          console.log('THIS IS RESPONSE', response);
          taskFactory.getdata(function(tunedata) {
            console.log('THIS IS TUNE DATA!',tunedata, 'END OF TUNE');
            $scope.tunedata = tunedata


            for (var i = 0; i < tunedata.data.length; i++) {
              console.log($scope.tunedata.data[i].file.filename);
            }
          })
        })

      }
    }

    $scope.Delete = function(tune) {
      console.log('THIS IS THE TUNE ID',tune._id);
      taskFactory.Delete(function(tune, callback) {
        console.log(response)
      })
    }
  })
