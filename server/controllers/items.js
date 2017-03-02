/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/
console.log("Loaded: /server/controllers/items.js")
var mongoose = require('mongoose')
var fs = require('fs')
var sessions = require('express-session')
var User = mongoose.model("User")
var Tune = mongoose.model("Tune")

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

      getdata:  function(request, response) {
        Tune.find({}, function (err, tune) {
          if (err) {
            console.log(err);
          } else {
            // console.log('THIS IS THE TUNE', tune, 'end of TUNE');
            response.json(tune)
          }
        })
      },

      createuser: function(request, response) {


        var user = new User({
          username: request.body.username,
          password: request.body.password
        })
        user.save(function(err) {
          if (err) {
            console.log('Error Occurred', err)
          } else {
            request.session.userID = user._id
            request.session.username = user.username
            response.json(request.body)
          }
        })

      },

      loginuser: function(request, response) {
        User.findOne({username: request.body.username}, function(err, user) {
          if (err) {
            console.log('ERROR', err);
          } else if (user) {
            console.log('THIS IS USER',user);
            request.session.userID = user._id
            request.session.username = user.username
            request.session.user = user

            response.json(user)
          }
        });
      },

      uploadtune: function(request, response) {
        // console.log('this is the factory user',taskFactory.user);
        console.log('THIS IS THE REQUEST', request.file);
        var tune = new Tune({
          user: request.session.user,
          file: {
            originalname: request.file.originalname,
            encoding: request.file.encoding,
            mimetype: request.file.mimetype,
            destination: request.file.destination,
            filename: request.file.filename,
            path: request.file.path,
            size: request.file.size
          }
        })
        tune.save(function(err, tune) {
          if (err) {
            console.log(err);
          }

          fs.writeFile('testFile.mp3', request.file, "base64", function(err) {
            if (err) {
              console.log(err)
            } else {
              response.json(tune)
            }
          })
        })
      },
    }
