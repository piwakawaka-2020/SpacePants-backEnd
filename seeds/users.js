
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1,userName: 'Harry', role: 'Human', userId: '', roomId: ''},
        {id: 2,userName: 'Zayn', role: 'Human', userId: '', roomId: ''},
        {id: 3,userName: 'Louis', role: 'Human', userId: '', roomId: ''},
        {id: 4,userName: 'Zayn', role: 'Human', userId: '', roomId: ''},
        {id: 5,userName: 'Niall', role: 'Alien', userId: '', roomId: ''}
      ]);
    });
};
