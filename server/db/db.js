const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

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

function getRoomList(db = connection){
  return db('users')
  .select('users.roomId')
}

function getUsersByRoom(roomId, db = connection){
  return db('users')
    .where('users.roomId', '=', roomId)
}

function updateUser(userObj, db = connection) {
  return db('users')
    .where('users.socketId', userObj.socketId)
    .update({
      ...userObj
    })
}

function removeUser(socketId, db = connection){
  return db('users')
    .where('users.socketId', socketId)
    .del()
}

function getTasksId(db = connection){
  return db('tasks').select('id')
}

function getTaskById(taskId, db = connection){
  return db('tasks')
  .where('tasks.id', taskId).first()
}

function getHintsId(db = connection){
  return db('hints').select('id')
}

function getHintsById(hintId, db = connection){
  return db('hints')
  .where('hints.id', hintId).first()
}

module.exports = {
  getUsers,
  addUser,
  getRoomList,
  getUsersByRoom,
  removeUser,
  updateUser,
  getTasksId,
  getTaskById,
  getHintsId,
  getHintsById
}

