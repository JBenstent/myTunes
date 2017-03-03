/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/
console.log("Loaded: /server/controllers/items.js")
var mongoose = require('mongoose')
var session = require('express-session')
var fs = require('fs')
var sessions = require('express-session')
var User = mongoose.model("User")
var Tune = mongoose.model("Tune")

module.exports = {
      getdata: function(request, response) {
        Tune.find({}, function (err, tune) {
          if (err) {
            console.log(err);
          } else if(tune){
            console.log('THIS IS THE TUNE', tune, 'end of TUNE');
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

          } else if (user){
            request.session.userID = user._id
            request.session.username = user.username
            response.json(user)
          }
        });
      },

      loggedin: function(request, response){
        User.findOne({_id: request.session.userID}, function(err,user){
          if (err){
            console.log("error finding user:", err);
          }
          else if(user){
            console.log('user in session:', user);
            response.json({user:user})
          }
        })
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
              response.json({})
            }
          })
        })
      },

      uploadimage: function(request, response){
        var ext = '.jpg';
        console.log("yess",request.file);
        User.findOne({_id:request.session.userID}, function(err, user){
          console.log('who',user);
          if(err){
            console.log("error finding user");
          }
          else if(user){
            console.log("found user");
            console.log('here',request.file);

            if (request.file.mimetype == 'image/jpeg' || request.file.mimetype == 'image/jpg' || request.file.mimetype == 'png') {
              user.image = request.file.path + ext
            }

            user.save(function(err, user){
              if (err){
                console.log("error uploading image");
              }
              else if(user){
                fs.rename('/uploads/images/'+ request.file.filename, '/uploads/images/', function(err){
                  if(err){
                    console.log("error naming file", err);
                  }
                  else{
                    response.json({})
                    console.log("correctly named file", file);
                    console.log("successfully uploaded image:",file);
                  }
                })
              }
            })
          }
        })
      },

        follow: function(request, response) {
          console.log('in server route');
          console.log('this is the session', request.session.userID);

          User.findOne({_id: request.session.userID}, function(err, user){
            if(err){
              console.log("error at following:", err);
            }
            else if(user){
              console.log(request.params.id);
              user.following.push(request.params.id)
            }
            user.save(function (err, user) {
              if(err){
                console.log("failed to follow:", err);
              }
              else if(user){
                console.log("following user");
            User.findOne({_id:request.params.id}, function(err, user){
              if(err){
                console.log("error finding user:", err);
              }
              else if(user){
                user.followers.push(request.session.userID);
              }
              user.save(function(err, user){
                if(err){
                  console.log("failed to add follower");
                }
                else if(user){
                  console.log("added to followers");
                   response.json(user)
                }
              })
            })
            }
          })
        })


          fs.writeFile('testFile.mp3', request.file, "base64", function(err) {
            if (err) {
              console.log(err)
            } else {
              response.json(tune)
            }
          })
        },



      unfollow: function(request, response){
        User.findOne({_id:request.session.userID}, function(err, user){
          if(err){
            console.log("could not find user:", err);
          }
          else if(user){
            user.following.remove(request.params.id);
          }
          user.save(function(err, user){
            if(err){
              console.log("could not unfollow", err);
            }
            else if(user){
              console.log("unfollowed user", user);
          User.findOne({_id:request.params.id}, function(err, user){
            if(err){
              console.log("Could not find unfollowed user", user);
            }
            else if(user){
              user.followers.remove(request.session.userID);
            }
            user.save(function(err, user){
              if(err){
                console.log("failed to remove", err);
              }
              else if(user){
                console.log("removed from followers");
                response.json(user)
              }
            })
          })
          }
        })
      })
    },

        getAllUsers: function(request, response) {
          User.find({}, function(err, users){
            if(err){
              console.log("Error retrieving Users:", err);
            }
            else if(users){
              console.log("These are all users:", users);
              response.json({users:users})
            }
          })
        },

        userProfile: function (request, response) {
          User.findOne({_id: request.params.id}, function(err, profile){
            if(err){
              console.log("error in profile:", err);
            }
            else if(profile){
              console.log("heres the profile", profile);
              response.json({profile:profile})
            }
          })

        },



        // console.log("SIZE OF FILE:", request.body.tune.data.length);
      }
