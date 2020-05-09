let votes = {}

function collateVotes(io, room, vote) {

  if (votes[room]) {
    votes[room].push(vote)
  } else {
    votes[room] = [vote]
  }

  let clients = io.sockets.adapter.rooms[room]

  //If unanimous, returns true.  Otherwise returns false
  // if (votes[room].length === clients.length - 1) {
  //   io.to(room).emit('voteResult', votes[room].every(el => el === true))
  // }

  if(votes[room].length === clients.length) {
    const aye = votes[room].filter(el => el.motion)

    io.to(room).emit('voteResult', {result: (aye.length > votes[room].length / 2), person: votes[room][0].person})
  }
}

function clear(room) {
  delete votes[room]
}

module.exports = {
  collateVotes,
  clear
}