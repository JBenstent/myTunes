/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/

console.log("Loaded: /server/controllers/items.js")
var mongoose = require('mongoose')
var fs = require('fs')
var User = mongoose.model("User")

module.exports = {

    create: function(request, response) {
        var task = new Task({
            task: request.body.task,
            status: 'ToDo'
        })
        task.save(function(err) {
            if (err) {
                console.log('Error occured:', err)
            } else {
                response.json(task)
            }
        })
      },

      createuser: function(request, response) {

        console.log('This is the request.body', request.body)

        var user = new User({
          username: request.body.username,
          password: request.body.password
        })
        user.save(function(err) {
          if (err) {
            console.log('Error Occurred', err)
          } else {
            response.json(request.body)
          }
        })

      },

      loginuser: function(request, response) {
        User.findOne({username: request.body.username}, function(err, user) {
          if (err) {
            console.log('ERROR', err);
          } else {
            response.json(user)
          }
        });
      },

      uploadtune: function(request, response) {
        console.log('this is the file',request.file);
        console.log(typeof(request.file));

        var file = new User({
          file: request.file
        })
        user.save(function(err, file) {
          if (err) {
            console.log(err);
          }
        })

        fs.writeFile('testFile.mp3', request.file, "base64", function(err) {
          if (err) {
            console.log(err)
          } else {
            response.json({})
          }
        })


        // console.log("SIZE OF FILE:", request.body.tune.data.length);
      },
    }
