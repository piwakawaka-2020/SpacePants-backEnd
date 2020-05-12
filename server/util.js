//Returns array of four letter room codes
function getAllRooms(io) {
  return (Object.keys(io.sockets.adapter.rooms).filter(key => key.length === 4))
}

//Returns four letter room code
function getRoomBySocket(socket) {
  return Object.keys(socket.rooms)[1]
}

//Returns array of socket ids
function getSocketsByRoom(io, room) {
  return Object.keys(io.sockets.adapter.rooms[room].sockets)
}

//Returns array of names
function getUsersByRoom(io, room) {
  let keys = Object.keys(io.sockets.adapter.rooms[room].sockets)

  return keys.map(key => io.sockets.connected[key].username)
}

function getCategoryBySocket(io, socket) {
  const room = getRoomBySocket(socket)
  return io.sockets.adapter.rooms[room].category
}

module.exports = {
  getAllRooms,
  getRoomBySocket,
  getSocketsByRoom,
  getUsersByRoom,
  getCategoryBySocket
}