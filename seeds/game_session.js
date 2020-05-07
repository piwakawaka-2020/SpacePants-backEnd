
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game_session').del()
    .then(function () {
      // Inserts seed entries
      return knex('game_session').insert([
        {id: 1, 
        room_code: '', 
        player_code: ''
        },
        {id: 2, 
        room_code: '', 
        player_code: ''
        },
        {id: 3, 
        room_code: '', 
        player_code: ''
        },
        {id: 4, 
        room_code: '', 
        player_code: ''
        },
        {id: 5, 
        room_code: '', 
        player_code: ''
        },
        {id: 6, 
        room_code: '', 
        player_code: ''
        },
        {id: 7, 
        room_code: '', 
        player_code: ''
        },
        {id: 8, 
        room_code: '', 
        player_code: ''
        }
      ])
    })
}
