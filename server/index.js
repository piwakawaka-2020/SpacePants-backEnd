const http = require('http')
const socket = require('socket.io')
const dbFunc = require('./db/db')

const randFunc = require('./random')

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

io.on('connection', function (socket) {
  socket.on('user', (userData) => {
    
    userData = {
      ...userData,
      socketId: socket.id
    }

    dbFunc.addUser(userData)
    .then(() =>{
      socket.join(userData.room, () =>{

        dbFunc.getUsersByRoom(userData.room)
        .then(users =>{
          const names = users.map(user => user.username)
          return io.to(userData.room).emit('user', names)
        })
      })
    })
  })

  socket.on('tasks', () =>{
    dbFunc.getTasksId()
    .then(taskId => {
      const idArray = taskId.map(objId => objId.id)

      const id = randFunc.randNum(idArray.length)
      dbFunc.getTasksById(id)
      .then(task =>{
        // console.log(task)
        socket.emit('task', task.task)

        let room = Object.keys(socket.rooms)[0];
        let clients = io.sockets.adapter.rooms[room]

        let humans = Object.keys(clients.sockets).filter(client => client != socket.id)

        //Pick which human receives message
        let human = humans[randFunc.randNum(humans.length)]

        setTimeout(() => {
          if(randFunc.randNum(100) < 50) {
            io.to(human).emit('hint', task.hint) 
          } else {
            io.to(human).emit('hint', 'fakeHint')
          }
        }, randFunc.randNum(10000000))
      })
    })
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
  })

  socket.on('disconnect', function () {
    console.log('disconnect socket:', socket.id)
    dbFunc.removeUser(socket.id)
      .then(res => console.log(res))
  })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

