const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRemoteIds(db = connection) {
  return db('tasks')
    .select('tasks.id')
    .where('tasks.category', 'remote')
}

function getTaskById(taskId, category, db = connection) {
  if (category === 'remote') {
    console.log('yes')
    return db('tasks')
    .orderBy('tasks.category', 'asc')
    .offset(taskId)
    .first()
  } else {
    return db('tasks')
      .where('tasks.id', taskId).first()
  }
}

function getHintById(hintId, db = connection) {
  return db('hints')
    .where('hints.id', hintId)
    .first()
}

module.exports = {
  getRemoteIds,
  getTaskById,
  getHintById
}

