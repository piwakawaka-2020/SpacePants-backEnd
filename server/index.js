const http = require('http')
const socket = require('socket.io')

const server = require('./server')

const httpServer = http.createServer(server)

const io = socket(httpServer)

const dbFunc = require('./db/db')
const randFunc = require('./random')
const gameValues = require('./gameValues')
const timerFunc = require('./timer')
const voteFunc = require('./votes')
const util = require('./util')

io.on('connection', function (socket) {

  socket.on('user', (userData) => {
    socket.username = userData.name

    socket.join(userData.room, () => {
      let users = util.getUsersByRoom(io, userData.room)
      io.to(userData.room).emit('user', users)
    })
  })

  socket.on('leaveRoom', room => {
    socket.leave(room, () => {

      if(util.getAllRooms(io).includes(room)) {
        let users = util.getUsersByRoom(io, room)
        io.to(room).emit('user', users)
      }
    })
  })

  socket.on('getRoomList', () => {
    io.to(socket.id).emit('roomList', util.getAllRooms(io))
  })

  socket.on('checkUsers', room => {
    let users = util.getUsersByRoom(io, room)
    io.to(socket.id).emit('usersWaiting', users)
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
    getTask(socket)
  })

  socket.on('completeTask', room => {
    let t = gameValues.taskCompleteTimeReward
    timerFunc.decreaseTime(room, t)
    getTask(socket)
  })

  socket.on('skipTask', () => {
    setTimeout(() => { getTask(socket) }, gameValues.skipTime)
  })

  socket.on('getBadHint', () => {
    setTimeout(() => {
      io.to(socket.id).emit('hint', sendBadHint(socket.id))
    }, randFunc.randNum(0, gameValues.fakeHintTime))
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

  socket.on('playAgain', () => {
    io.to(util.getRoomBySocket(socket)).emit('playAgain')
  })
})

function getTask(socket) {
  const id = randFunc.randNum(1, gameValues.numTasks)
  dbFunc.getTaskById(id)
    .then(task => {

      //Send task to the Alien
      io.to(socket.id).emit('task', task.task)

      //Maybe send corresponding hint to a human
      sendRealHint(socket, task.hint_id)
    })
}

function sendRealHint(socket, hintId) {
  let room = util.getRoomBySocket(socket)
  let users = util.getUsersByRoom(io, room)

  //Filter out Alien socket
  let humans = users.filter(user => user != socket.id)

  //Pick one lucky human to maybe receive a good hint
  let human = humans[randFunc.randNum(0, humans.length)]

  setTimeout(() => {
    if (randFunc.randNum(0, 1) < gameValues.hintChance) {
      dbFunc.getHintById(hintId)
        .then(hint => {
          io.to(human).emit('hint', hint.hint)
        })
    }
  }, randFunc.randNum(0, gameValues.hintTime))
}

function sendBadHint(human) {
  const id = randFunc.randNum(1, gameValues.numFakeHints)

  dbFunc.getHintById(id)
    .then(hint => {
      io.to(human).emit('hint', hint.hint)
    })
}

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
