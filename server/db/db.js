const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = {
  getUsers,
  addUser,
  getUsersByRoom,

  getTasks,
  getTasksRandomById
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

// TASKS AND HINTS

function getTasks(db = connection){
  return db('tasks').select('*')
}

function getTasksRandomById(taskId,db = connection){
  return db('tasks')
    .where('tasks.id', taskId)
}