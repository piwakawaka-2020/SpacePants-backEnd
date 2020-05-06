
exports.up = function(knex) {
    return knex.schema.createTable('userSockets', (table) => {
        table.increment('id').primary
        table.string('username')
        table.string('role')
        table.string('userId')
        table.string('roomId')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
