
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary
        table.string('username')
        table.string('role')
        table.string('socketId')
        table.string('roomId')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
