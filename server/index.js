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

  // setTimeout(() => socket.disconnect(true), 15000)
  
  socket.on('user', (userData) =>{
    console.log(userData.name + ' is in room ' + userData.room)
    userData = {
      ...userData,
      socketId: socket.id}
    console.log(userData)


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

  socket.on('tasks', () =>{
    dbFunc.getTasksId()
    .then(taskId => {
      const idArray = taskId.map(objId => objId.id)

      const id = randomNumber(0, idArray.length)
      dbFunc.getTasksById(id)
      .then(task =>{
        return socket.emit(task)
      })
    })
  })

  socket.on('disconnect', function(){
    console.log('disconnect socket:',socket.id)
    dbFunc.removeUser(socket.id)
    .then(res => {})
  })
})

function randomNumber (min, max) {
  return (
  Math.floor(Math.random()*(max-min+1))+min
  )
}

function timer (mins) {
  let secondCounter = mins*60
  let time = setInterval(() => {
      let minutes = parseInt(secondCounter / 60)
      const seconds = () => {
          let secs = secondCounter % 60          
          if (secs < 10) {
              return `0${secs}`
          } else {
              return parseInt(secs)
          }
      }
      secondCounter--

      console.log( `${minutes}:${seconds()}`)
      if(secondCounter < 1) {clearInterval(time)}
  }, 0.1)
  
  return time
}


const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
