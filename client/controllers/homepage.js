app.controller("homepage", function(taskFactory, $scope, $location) {
  taskFactory.getdata(function(tunedata) {
    console.log('THIS IS TUNE DATA!',tunedata, 'END OF TUNE');
    $scope.tunedata = tunedata


    for (var i = 0; i < tunedata.data.length; i++) {
       console.log($scope.tunedata.data[i].file.filename);
     }


})
})
