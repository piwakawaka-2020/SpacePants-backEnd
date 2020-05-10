exports.up = knex => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary
    table.string('task')
    table.integer('hint_id')
  })

}

exports.down = knex => {
  return knex.schema.dropTable('tasks')
}