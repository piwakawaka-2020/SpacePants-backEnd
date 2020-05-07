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
      .then(() => {
        socket.join(userData.room, () => {
          let room = userData.room

          dbFunc.getUsersByRoom(room)
            .then(users => {
              const names = users.map(user => user.username)
              return io.to(room).emit('user', names)
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

