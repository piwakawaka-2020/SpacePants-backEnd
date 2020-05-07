
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          task: 'Go to the the bathroom',
          hint: 'They can\'t wait',
          category: 'action'
        },
        {
          id: 2,
          task: 'Consume half your beverage',
          hint: 'They might be consuming',
          category: 'action'
        },
        {
          id: 3,
          task: 'Work in a movie title into conversation',
          hint: 'It\'s in long form',
          category: 'word'
        },
        {
          id: 4,
          task: 'Talk in double time',
          hint: 'Speed kills',
          category: 'action'
        },
        {
          id: 5,
          task: 'Hum the catchiest tune',
          hint: 'One hit wonder?',
          category: 'action'
        },
        {
          id: 6,
          task: 'Refer to yourself using your name or nickname',
          hint: 'Third person shooter',
          category: 'word'
        },
        {
          id: 7,
          task: 'Burp frequently',
          hint: 'Gas explodes',
          category: 'action'
        },
        {
          id: 8,
          task: 'Talk in song quotes or titles',
          hint: 'What\'s that song again',
          category: 'word'
        },
        {
          id: 9,
          task: 'Clean your glasses',
          hint: 'I can\'t see',
          category: 'action'
        },
        {
          id: 10,
          task: 'Crack your joints',
          hint: 'Snap, crackle, pop',
          category: 'action'
        },
        {
          id: 11,
          task: 'Use long words',
          hint: 'Did you really say that?',
          category: 'word'
        },
        {
          id: 12,
          task: 'Get distracted by something/someone',
          hint: 'Concentrate',
          category: 'action'
        },
        {
          id: 13,
          task: 'Use action words to talk',
          hint: 'Batman \'66',
          category: 'word'
        },
        {
          id: 14,
          task: 'Slowly lower your voice',
          hint: 'What\'s that?',
          category: 'action'
        },
        {
          id: 15,
          task: 'Get a drink',
          hint: 'They might be consuming',
          category: 'action'
        },
        {
          id: 16,
          task: 'Talk about someone you haven\'t seen in ages',
          hint: 'Blast from the past',
          category: 'word'
        },
        {
          id: 17,
          task: 'Only look at the opposite sex',
          hint: 'Look at me',
          category: 'action'
        },
        {
          id: 18,
          task: 'Mention random food items',
          hint: 'You hungry?',
          category: 'word'
        },
        {
          id: 19,
          task: 'Take off clothe items',
          hint: 'You hot?',
          category: 'action'
        },
        {
          id: 20,
          task: 'Use the sentence \"Trust me\" as much as possible',
          hint: 'Do you?',
          category: 'word'
        },
        {
          id: 21,
          task: 'Put on clothe items',
          hint: 'Tauros',
          category: 'word'
        },
        {
          id: 22,
          task: 'No eye contact',
          hint: 'Concentrate',
          category: 'action'
        }
      ])
    })
}
