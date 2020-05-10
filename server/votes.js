const dbFunc = require('./db/db')

let votes = {}

function collateVotes(io, room, vote) {

  if (votes[room]) {
    votes[room].push(vote)
  } else {
    votes[room] = [vote]
  }

  let clients = io.sockets.adapter.rooms[room]

  if (votes[room].length === clients.length) {
    const aye = votes[room].filter(el => el.motion)

    let result = aye.length > votes[room].length / 2

    if (result) {
      dbFunc.getUserByNameAndRoom(votes[room][0].person, room)
        .then(user => {
          io.to(room).emit('gameOver', { winner: user.role === 'Alien' ? 'Humans' : 'Alien' })
        })
    } else {
      io.to(room).emit('voteFailed')
    }

    delete votes[room]
  }
}

module.exports = {
  collateVotes,
}