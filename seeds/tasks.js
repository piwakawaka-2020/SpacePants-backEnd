
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, 
        task: '', 
        hint: '', 
        category: 'action' 
        },
        {id: 2, 
        task: '', 
        hint: '', 
        category: 'word' 
        },    
        {id: 3, 
        task: '', 
        hint: '', 
        category: 'word' 
        },  
        {id: 4, 
        task: '', 
        hint: '', 
        category: 'action' 
        },
        {id: 5, 
        task: '', 
        hint: '', 
        category: 'action' 
        },
        {id: 6, 
        task: '', 
        hint: '', 
        category: 'word' 
        },  
        {id: 7, 
        task: '', 
        hint: '', 
        category: 'action' 
        }
      ])
    })
}
