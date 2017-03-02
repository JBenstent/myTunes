app.controller("uploadtune", function(taskFactory, $scope, $location, Upload) {

  $scope.add = function(){
    Upload.upload(
      {url: '/uploadtune',data: {'tune': $scope.file}})


    // var f = document.getElementById('file').files[0],
    //     r = new FileReader();
    // r.onloadend = function(e){
    //   var data = e.target.result;
    //   console.log("Found Data, but it was large", data.length);
    //   // console.log('THIS IS THE DATA', data)
    //   taskFactory.uploadtune({data: data}, function(response){
    //
    //   });
    //
    //   //send your binary data via $http or $resource or do anything else with it
    // }
    // r.readAsBinaryString(f);

  }
  console.log('created upload tune page')
});
