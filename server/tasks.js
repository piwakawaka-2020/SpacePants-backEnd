const util = require('./util')
const dbFunc = require('./db/db')
const randFunc = require('./random')
const gameValues = require('./gameValues')

const tasks = []

function getAllTasks(io, socket, room) {
  const category = util.getCategoryByRoom(io, room)

  if (category === 'remote') {
    dbFunc.getAllRemoteTasks()
      .then(allTasks => {
        tasks[room] = allTasks
        getTask(socket, io)
      })
  } else {
    dbFunc.getAllTasks()
      .then(allTasks => {
        tasks[room] = allTasks
        getTask(socket, io)
      })
  }
}

function getTask(socket, io) {

  const room = util.getRoomBySocket(socket)

  const id = randFunc.randNum(0, tasks[room].length - 1)

  io.to(socket.id).emit('task', tasks[room][id].task)

  sendRealHint(socket, io, tasks[room][id].hint_id)

  tasks[room].splice(id, 1)
}

function sendRealHint(socket, io, hintId) {

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

function sendBadHint(human, io) {
  const id = randFunc.randNum(1, gameValues.numFakeHints)

  dbFunc.getHintById(id)
    .then(hint => {
      io.to(human).emit('hint', hint.hint)
    })
}

module.exports = {
  getAllTasks,
  getTask,
  sendRealHint,
  sendBadHint
}