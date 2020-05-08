
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fakeHints').del()
    .then(function () {
      // Inserts seed entries
      return knex('fakeHints').insert([
        { id: 1, hint: 'There’s no information about Aliens today.  How’s your day going?' },
        { id: 2, hint: 'Cherie from accounting stole my sandwich again.  Damnit Cherie.' },
        {
          id: 3, hint: 'ALIENS HAVE OVERTHROWN THE GOVERNMENT. FLEE!\nHahahaha gotcha.'
        },
        { id: 4, hint: 'The forecast for your city is… terrible.  You should probably move.' },
        {
          id: 5, hint: 'Bureau of Space Stuff? More like Bureau of Stupid Stuff, am I right?\nDamnit Frank, I told you interns are not allowed to communicate to agents in the field.'
        },
        { id: 6, hint: 'BOSS is changing it’s image!  We are hereby known as BASS.  Slap it.' },
        { id: 7, hint: 'BOSS just ended employer-sponsored health insurance. Maybe aliens would be better bosses?' },
        { id: 8, hint: 'I for one welcome our new alien overlords' },
        { id: 9, hint: 'IT’S A TRAP.' },
        { id: 10, hint: 'A recent lawsuit from Bruce Springsteen has required BOSS to change our name. Do you have any thoughts?' },
        { id: 11, hint: 'A truck on a nearby highway overturned, gently spilling baby lambs everywhere!  It’s the cuddliest accident ever!.' },
        { id: 12, hint: 'When I was a little boy I wanted to play the flute.  Toot toot!' },
        { id: 13, hint: 'Aww man I just spilt my coffee.' },
        { id: 14, hint: 'Test test 1 2 3.  Does this thing work?' },
        { id: 15, hint: 'We recently had a satellite go down, so no new info until Elon can pull himself together.' },
        { id: 16, hint: 'Do you remember that one episode where that guy did that thing?  That was the best!.' },
        { id: 17, hint: 'I reckon I could be a famous singer.  What do you think? LALALALALALALALALALA' },
        { id: 18, hint: 'Who would win in a fight, a gorilla or a bear?' },
        { id: 19, hint: 'Look, I never really wanted to be a space agency communications director. When I was young I wanted to be the Hamburgler.' },
        { id: 20, hint: 'Would you rather fight a bear sized duck, or 100 duck sized bears?' },
      ])
    })
}
