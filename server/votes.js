const util = require('./util')
const timerFunc = require('./timer.js')

let votes = {}
let timeOut = {}

function collateVotes(io, room, vote) {

  if (votes[room]) {
    votes[room].push(vote)
  } else {
    votes[room] = [vote]
    timeOut[room] = setTimeout(() => {
      voteTimeout(io, room)
    }, 30000)
  }

  let users = util.getUsersByRoom(io, room)

  if (votes[room].length === users.length) {
    countVotes(io, room)
  }
}

function countVotes(io, room) {
  clearTimeout(timeOut[room])

  const aye = votes[room].filter(el => el.motion)

  let result = aye.length > votes[room].length / 2

  if (result) {
    let accused = votes[room].find(el => el.role)
    io.to(room).emit('gameOver', { winner: accused.role === 'Alien' ? 'Humans' : 'The Alien' })
    timerFunc.secondCounter[room] = null
  } else {
    io.to(room).emit('voteFailed')
  }

  delete votes[room]
}

function voteTimeout(io, room) {
  clearTimeout(timeOut[room])
  delete timeOut[room]
  delete votes[room]

  io.to(room).emit('voteFailed')
}

module.exports = {
  collateVotes,
}