const http = require('http')
const socket = require('socket.io')

// const envConfig = require('dotenv').config()
// if(envConfig.error) throw envConfig.error

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

io.on('connection', function(socket){
  console.log('Socket id:', socket.id)
  
  // socket.on('chat', function(data){
  //   console.log(data)
  //   io.sockets.emit('chat', data)
  // })

  // socket.on('typing', function(data){
  //   console.log(data)
  //   socket.broadcast.emit('typing', data)
  // })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
