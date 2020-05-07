const http = require('http')
const socket = require('socket.io')
const dbFunc = require('./db/db')

// const envConfig = require('dotenv').config()
// if(envConfig.error) throw envConfig.error

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

io.on('connection', function(socket) {
  console.log('Socket id:', socket.id)


  setTimeout(() => socket.disconnect(true), 5000)
  
  socket.on('user', (userData) =>{
    console.log(userData.name + ' is in room ' + userData.room)

    dbFunc.addUser(userData)
    .then(() =>{
      socket.join(userData.room, () =>{
        let room = userData.room
  
        dbFunc.getUsersByRoom(room)
        .then(users =>{
          const names = users.map(user => user.username)
          // console.log(users)
          return io.to(room).emit('user', names)
        })
      })
      // DB.getName() get all names match getNameByRoom
    })
  })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
