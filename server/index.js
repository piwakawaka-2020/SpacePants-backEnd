const http = require('http')
const socket = require('socket.io')

// const envConfig = require('dotenv').config()
// if(envConfig.error) throw envConfig.error

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

io.on('connection', function(socket){
  console.log('Socket id:', socket.id)

  db.addUser({userName: 'Simon', role: 'Human', userId: socket.id, roomId: ''})
  .then(res => res)

  socket.on("disconnect", (socket) => {
    console.log(socket.id)
    db.removeUser(socket.id)
    .then(res => res)
  })
  
  socket.on('user', (userData) =>{
    console.log(userData.room)
    socket.join(userData, () =>{
      let room = userData.room
      let name = userData.name
      socket.broadcast.to(room).emit(name)
    })
  })

  socket.on('room', function(roomData){
    console.log(roomData)
    io.sockets.emit('room', roomData)
  })

  // socket.on('typing', function(data){
  //   console.log(data)
  //   socket.broadcast.emit('typing', data)
  // })

})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
