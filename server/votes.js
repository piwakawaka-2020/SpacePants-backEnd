let votes = {}

function collateVotes(io, room, vote) {

  if (votes[room]) {
    votes[room].push(vote)
  } else {
    votes[room] = [vote]
  }

  let clients = io.sockets.adapter.rooms[room]

  //If unanimous, returns true.  Otherwise returns false
  if (votes[room].length === clients.length - 1) {
    io.to(room).emit('voteResult', votes[room].every(el => el === true))
  }
}

module.exports = {
  collateVotes
}