const http = require('http')
const socket = require('socket.io')

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

const randFunc = require('./random')
const gameValues = require('./gameValues')
const timerFunc = require('./timer')
const voteFunc = require('./votes')
const taskFunc = require('././tasks')
const util = require('./util')

io.on('connection', function (socket) {

  socket.on('user', (userData) => {
    socket.username = userData.name

    socket.join(userData.room, () => {
      let users = util.getUsersByRoom(io, userData.room)
      io.to(userData.room).emit('user', users)
      console.log('user')
    })
  })

  socket.on('leaveRoom', room => {
    socket.leave(room, () => {
      if (util.getAllRooms(io).includes(room)) {
        let users = util.getUsersByRoom(io, room)
        io.to(room).emit('user', users)
        console.log('leaveRoom')
      }
    })
  })

  socket.on('getRoomList', () => {
    io.to(socket.id).emit('roomList', util.getAllRooms(io))
  })

  socket.on('checkUsers', room => {
    let users = util.getUsersByRoom(io, room)
    let inProgress = timerFunc.secondCounter[room] ? true : false
    let waitingData = {
      users,
      inProgress,
    }
    io.to(socket.id).emit('usersWaiting', waitingData)
  })

  socket.on('setRoomCategory', category => {
    const room = util.getRoomBySocket(socket)
    io.sockets.adapter.rooms[room].category = category
  })

  socket.on('preloadTasks', () => {
    const room = util.getRoomBySocket(socket)
    const category = util.getCategoryByRoom(room)
    console.log('preload category', category)

    if(category === 'remote') {
      taskFunc.getRemoteTasks(io, socket, room)
    } else {
      taskFunc.getAllTasks(io, socket, room)
    }
    console.log('preloadTasks')
  })

  socket.on('startGame', room => {

    let users = util.getSocketsByRoom(io, room)

    roles = randFunc.getRoles(users.length)

    users.forEach((user, i) => {
      io.to(user).emit('role', roles[i])
    })

    timerFunc.createRoomCounter(room)
    timerFunc.timer(room, io)
  })

  socket.on('getTask', () => {
    taskFunc.getTask(socket, io)
  })

  socket.on('completeTask', room => {
    let t = gameValues.taskCompleteTimeReward
    let counter = timerFunc.secondCounter[room]
    let limit = 30
    counter - t < limit ? timerFunc.decreaseTime(room, (counter - limit)) : timerFunc.decreaseTime(room, t)
    timerFunc.timeDisp(room, io)
    taskFunc.getTask(socket, io)
  })

  socket.on('skipTask', () => {
    setTimeout(() => { taskFunc.getTask(socket, io) }, gameValues.skipTime)
  })

  socket.on('getBadHint', () => {
    setTimeout(() => {
      io.to(socket.id).emit('hint', taskFunc.sendBadHint(socket.id, io))
    }, randFunc.randNum(0, gameValues.fakeHintTime))
  })

  socket.on('disableVote', () => {
    const room = util.getRoomBySocket(socket)
    io.to(room).emit('disableVote')
  })

  //Takes vote call from humans and sends vote request to room
  socket.on('triggerVote', ({ room, voteData }) => {
    io.to(room).emit('receiveVote', voteData)
  })

  //Takes each vote and sends a final result
  socket.on('sendVote', ({ room, voteData }) => {
    voteFunc.collateVotes(io, room, voteData)
  })

  socket.on('alienHistory', endData => {
    io.to(endData.room).emit('finalScreen', endData)
  })

  socket.on('playAgain', (room) => {
    io.to(util.getRoomBySocket(socket)).emit('playAgain')
    io.to(`${room} - game in progress`).emit('waitOver', room)
  })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
