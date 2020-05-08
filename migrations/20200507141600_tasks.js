exports.up = function(knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary
        table.string('task')
        table.string('hint')
    })
  
}

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
}