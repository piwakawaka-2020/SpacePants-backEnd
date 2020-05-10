exports.up = knex => {
  return knex.schema.createTable('hints', (table) => {
    table.increments('id').primary
    table.string('hint')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('tasks')
}