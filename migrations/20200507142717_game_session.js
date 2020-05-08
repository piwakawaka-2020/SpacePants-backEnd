exports.up = function(knex) {
    return knex.schema.createTable('game_session', (table) => {
        table.increments('id').primary
        table.string('room_code')
        table.string('player_code')
    })
  
}

exports.down = function(knex) {
    return knex.schema.dropTable('game_session')
}