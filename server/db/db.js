const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = {
  getUsers,
  addUser,
  getUsersByRoom,
  removeUser
}

function addUser(userObj, db = connection) {
  return db('users')
  .insert({
    username: userObj.name,
    roomId: userObj.room,
    socketId: userObj.socketId
  })
}

function getUsers(db = connection){
  return db('users').select()
}

function getUsersByRoom(roomId, db = connection){
  // console.log(roomId)
  return db('users')
    .where('users.roomId', '=', roomId)
}

function removeUser(socketId, db=connection){
  console.log(typeof socketId)
  return db('users')
    .where('users.socketId', socketId)
    .del()
}


