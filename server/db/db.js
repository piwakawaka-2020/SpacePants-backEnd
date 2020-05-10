const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTaskById(taskId, db = connection){
  return db('tasks')
  .where('tasks.id', taskId).first()
}

function getHintById(hintId, db = connection){
  return db('hints')
  .where('hints.id', hintId).first()
}

module.exports = {
  getTaskById,
  getHintById
}

