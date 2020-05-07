const http = require('http')
const socket = require('socket.io')
const dbFunc = require('./db/db')

const randFunc = require('./random')

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

io.on('connection', function(socket) {
  console.log('Socket id:', socket.id)
  
  socket.on('user', (userData) =>{
    console.log(userData.name + ' is in room ' + userData.room)

    dbFunc.addUser(userData)
    .then(() =>{
      socket.join(userData.room, () =>{
        let room = userData.room
  
        dbFunc.getUsersByRoom(room)
        .then(users =>{
          const names = users.map(user => user.username)
          return io.to(room).emit('user', names)
        })
      })
    })
  })

  socket.on('startGame', room => {
    console.log('startGame')
    dbFunc.getUsersByRoom(room)
      .then(users => {
        // console.log(randFunc.giveRoles(users))

        users.forEach(user => {
          console.log(user.socketId)
          socket.to(user.socketId).emit('role', user.role)
        })

        // io.broadcast.to(room).emit('role', randFunc.giveRoles(users))
      })
  })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
