
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hints').del()
    .then(function () {
      // Inserts seed entries
      return knex('hints').insert([
        {id: 1, hint: 'What\'s that sound?'},
        {id: 2, hint: 'That seems familiar?!'},
        {id: 3, hint: 'Movies?'},
        {id: 4, hint: 'Are you hungry?'},
        {id: 5, hint: 'Thirsty much?'},
        {id: 6, hint: 'Ohhhh smelly!'},
        {id: 7, hint: 'What are you looking at?'},
        {id: 8, hint: 'I know that quote!'},
        {id: 9, hint: 'What a weird word.'},
        {id: 10, hint: 'Why are you doing that?'},
        {id: 11, hint: 'Think - snacks.'},
        {id: 12, hint: 'Would you eat that?'},
        {id: 13, hint: 'It\'s getting hot in here!'},
        {id: 14, hint: 'Can they see?'},
        {id: 15, hint: 'Why are you talking alot?'},
        {id: 16, hint: 'You\'re not making sense.'},
        {id: 17, hint: 'Who\'s itchy?'},
        {id: 18, hint: 'Who are you?'},
        {id: 19, hint: 'Holdiay mode?'},
        {id: 20, hint: 'I\'ve never used that word!'},
        {id: 21, hint: 'Do you even talk to them anymore?'},
        {id: 22, hint: 'You\'ve never been there!'},
        {id: 23, hint: 'Slow down!'},
        {id: 24, hint: 'Do you always talk that way?'},
        {id: 25, hint: 'You\'d never do that?!'},
        {id: 26, hint: 'Why are you drinking so much?'},
        {id: 27, hint: 'Do you like comics?'},
        {id: 28, hint: 'Have you ever done that?'},
        {id: 29, hint: 'Think - music.'},
        {id: 30, hint: 'Dreaming?'},
        {id: 31, hint: 'Speed up!'},
        {id: 32, hint: 'You aren\'t your usual self?'},
        {id: 33, hint: 'Is that an interest of yours?'},
        {id: 34, hint: 'Think - short term.'},
        {id: 35, hint: 'Do you watch movies?'},
        {id: 36, hint: 'Musical talent?'},
        {id: 37, hint: 'Who\'s touchy?'},
        {id: 38, hint: 'That doesn\'t seem normal'},
        {id: 39, hint: 'Smells like?'},
        {id: 40, hint: 'Do you even talk?'},
        {id: 41, hint: 'Is it cold?'},
        {id: 42, hint: 'Getting fidgety?'},
        {id: 43, hint: 'What\'s that tv show?'},
        {id: 44, hint: 'It\'s not normal!'},
        {id: 45, hint: 'Think - drinks.'}
      ])
    })
}
