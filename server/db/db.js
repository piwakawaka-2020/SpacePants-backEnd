const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getAllTasks(db = connection) {
  return db('tasks').select('task', 'hint_id')
}

function getAllRemoteTasks(db = connection) {
  return db('tasks')
    .where('tasks.category', 'remote')
    .select('task', 'hint_id')
}

function getHintById(hintId, db = connection) {
  return db('hints')
    .where('hints.id', hintId)
    .first()
}

module.exports = {
  getAllTasks,
  getAllRemoteTasks,
  getHintById,
}

