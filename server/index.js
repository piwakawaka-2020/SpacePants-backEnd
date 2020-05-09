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

  socket.on('getRoomList', () => {
    dbFunc.getRoomList()
      .then(roomsData => {
        const rooms = [...new Set(roomsData.map(room => room.roomId))]
        return io.to(socket.id).emit('roomList', rooms)
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
            .then(res => res)
        })
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

  socket.on('getFakeHint', () => {
    setTimeout(() => {
      io.to(socket.id).emit('hint', getFakeHint(socket.id))
    }, randFunc.randNum(0, gameValues.fakeHintTime))
  })

  //Takes vote call from humans and sends vote request to room
  socket.on('triggerVote', (voteData) => {
    io.to(voteData.room).emit('receiveVote', voteData)
  })

  //Takes the result of each vote
  socket.on('sendVote', ({ room, vote }) => {
    voteFunc.collateVotes(io, room, vote)
  })

  socket.on('alienHistory', ({ tasks, room }) => {
    voteFunc.clear(room)
    io.to(room).emit('taskList', tasks)
  })

  socket.on('disconnect', function () {
    dbFunc.removeUser(socket.id)
      .then(res => { })
  })
})

function getTask(socket) {
  const id = randFunc.randNum(1, gameValues.numTasks)
  dbFunc.getTaskById(id)
    .then(task => {

      //Send task to the Alien
      io.to(socket.id).emit('task', task.task)

      //Maybe send corresponding hint to a human
      sendRealHint(socket, task.hint)
    })
  // })
}

function sendRealHint(socket, hint) {
  //Get room code
  let room = Object.keys(socket.rooms)[1]

  //Get all sockets in room
  let clients = io.sockets.adapter.rooms[room].sockets

  //Filter out Alien socket
  let humans = Object.keys(clients).filter(client => client != socket.id)

  //Pick one lucky human to maybe receive a good hint
  let human = humans[randFunc.randNum(0, humans.length)]

  setTimeout(() => {
    if (randFunc.randNum(0, 1) < gameValues.hintChance) {
      io.to(human).emit('hint', hint)
    }
  }, randFunc.randNum(0, gameValues.hintTime))
}

function getFakeHint(human) {
  const id = randFunc.randNum(1, gameValues.numFakeHints)

  dbFunc.getHintsById(id)
    .then(hint => {
      io.to(human).emit('hint', hint.fakeHint)
    })
}

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

module.exports = io
