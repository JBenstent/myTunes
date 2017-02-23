/*
/server/controllers/items.js
Main logic for connecting http requests with database requests, delivering
responses
*/

console.log("Loaded: /server/controllers/items.js")
var mongoose = require('mongoose')
var Task = mongoose.model("Task")

module.exports = {
    index: function(request, response) {
        console.log("Items Index");

    },
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


    retrieve: function(request, response) {
      Task.find({}, function(err, tasks) {
        console.log("This is all task information", tasks)
        response.json({tasks: tasks})
        })
      },

      update: function(request, response) {
        Task.findOne({_id:request.body.task_id}, function(err, task){
          console.log('TASK', task)
          task.status = request.body.NewStatus

          task.save(function(err) {
            if (err) {
              console.log('this is an error:', err)
            } else {
              console.log('SUCCESSFULLY UDPATED TASK STATUS:')
              response.json(task)
            }
        })

        })

      },

      createuser: function(request, response) {
      //   User.find({username: request.body.username}, function(err, user) {
      //     if (err) {
      //       console.log(err)
      //     } else if (user){
      //       request.session.userID = user._id
      //       // request.session.name = username.
      //
      //
      //     }
      //
      //
      //   })
      }
    }
