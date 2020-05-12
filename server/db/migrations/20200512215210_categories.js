exports.up = knex => {
  return knex.schema.table('tasks', (table) => {
    table.string('category')

  })

}

exports.down = knex => {
  return knex.schema.dropTable('tasks')
}