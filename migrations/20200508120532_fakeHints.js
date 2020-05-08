exports.up = function(knex) {
    return knex.schema.createTable('fakeHints', (table) => {
        table.increments('id').primary
        table.string('hint')
    })
  
}

exports.down = function(knex) {
    return knex.schema.dropTable('fakeHints')
}