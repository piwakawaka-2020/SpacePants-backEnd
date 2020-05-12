const util = require('./util')
const timerFunc = require('./timer.js')

let votes = {}

function collateVotes(io, room, vote) {

  if (votes[room]) {
    votes[room].push(vote)
  } else {
    votes[room] = [vote]
  }

  let users = util.getUsersByRoom(io, room)

  if (votes[room].length === users.length) {
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
}

module.exports = {
  collateVotes,
}