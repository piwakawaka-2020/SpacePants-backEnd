const http = require('http')
const socket = require('socket.io')

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

const dbFunc = require('./db/db')
const randFunc = require('./random')
const gameValues = require('./gameValues')
const timerFunc = require('./timer')

io.on('connection', function (socket) {
  socket.on('user', (userData) => {

    userData = {
      ...userData,
      socketId: socket.id
    }

    dbFunc.addUser(userData)
      .then(() => {
        socket.join(userData.room, () => {

          dbFunc.getUsersByRoom(userData.room)
            .then(users => {
              const names = users.map(user => user.username)
              return io.to(userData.room).emit('user', names)
            })
        })
      })
  })

  socket.on('startGame', room => {
    dbFunc.getUsersByRoom(room)
      .then(users => {
        roles = randFunc.getRoles(users.length)

        users.forEach((user, i) => {
          user.role = roles[i]
          io.to(user.socketId).emit('role', user.role)

          dbFunc.updateUser(user)
            .then(res => console.log(res))
        })
      })
  })

  socket.on('getTask', () => {
    getTask(socket)
  })

  socket.on('completeTask', () => {
    //update time
    getTask(socket)
  })

  socket.on('skipTask', () => {
    //Pass message to alien saying you've been penalised
    setTimeout(() => {
      getTask(socket)
    }, gameValues.skipTime)
  })

  socket.on('getHint', () => {
    io.to(socket.id).emit('getHint', getBadHint())
  })

  //Random task comes in
  //Emit task to alien
  //Random number to check if actual hint or other hint should be sent
  // hintArray = [hint...]
  //Random number to decide time at which hint should be sent

  socket.on('startGame', room => {
    dbFunc.getUsersByRoom(room)
      .then(users => {
        roles = randFunc.getRoles(users.length)
      
        users.forEach((user, i) => {
          user.role = roles[i]
          io.to(user.socketId).emit('role', user.role)

          dbFunc.updateUser(user)
            .then(res => console.log(res))
        })
      })
    timerFunc.createRoomCounter(room)
    timerFunc.timer(room, io)
  })

  // socket.on('taskComplete', room)

  socket.on('disconnect', function () {
    console.log('disconnect socket:', socket.id)
    dbFunc.removeUser(socket.id)
      .then(res => console.log(res))
  })
})

function getTask(socket) {
  dbFunc.getTasksId()
    .then(taskId => {
      const idArray = taskId.map(objId => objId.id)

      const id = randFunc.randNum(1, idArray.length)
      dbFunc.getTaskById(id)
        .then(task => {
          io.to(socket.id).emit('task', task.task)

          let room = Object.keys(socket.rooms)[0];
          let clients = io.sockets.adapter.rooms[room]

          let humans = Object.keys(clients.sockets).filter(client => client != socket.id)

          //Pick which human receives message
          let human = humans[randFunc.randNum(0, humans.length)]

          setTimeout(() => {
            if (randFunc.randNum(10) > gameValues.hintChance) {
              io.to(human).emit('hint', task.hint)
            } else {
              getBadHint(human)
            }
          }, randFunc.randNum(gameValues.hintTime))
        })
    })
}

function getBadHint(human) {
  dbFunc.getHintsId()
    .then(hintId => {
      const idArray = hintId.map(objId => objId.id)
      const id = randFunc.randNum(1, idArray.length)

      dbFunc.getHintsById(id)
        .then(hint => {
          io.to(human).emit('hint', hint.hint)
        })
    })
}

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

module.exports = io