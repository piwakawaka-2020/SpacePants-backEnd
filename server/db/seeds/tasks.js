exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(() => {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          task: 'Compliment a human’s hair. They like that.',
          hint_id: 1,
          category: 'remote'
        },
        {
          id: 2,
          task: 'Mention a food made from potatoes. Any one, they’re all great.',
          hint_id: 2,
          category: 'remote'
        },
        {
          id: 3,
          task: 'Make up a news article. Discuss it as if it’s real.',
          hint_id: 3,
          category: 'remote'
        },
        {
          id: 4,
          task: 'Reassure someone you know they’re human.',
          hint_id: 4,
          category: 'remote'
        },
        {
          id: 5,
          task: 'Make a human guess a song by humming or whistling it.',
          hint_id: 5,
          category: 'remote'
        },
        {
          id: 6,
          task: 'Pick your least favourite brass instrument and criticise it for a while.',
          hint_id: 6,
          category: 'remote'
        },
        {
          id: 7,
          task: 'Next time someone stands up, steal their seat.  Enjoy the warmth.',
          hint_id: 7,
          category: 'local'
        },
        {
          id: 8,
          task: 'Convince a human to trust you by using the phrase ‘trust me’ three times',
          hint_id: 8,
          category: 'remote'
        },
        {
          id: 9,
          task: 'Drop something.  Then you can pick it up to show off your human dexterity',
          hint_id: 9,
          category: 'local'
        },
        {
          id: 10,
          task: 'Use a pun.Your new friends will think you are punny!',
          hint_id: 10,
          category: 'remote'
        },
        {
          id: 11,
          task: 'Stop talking mid sentence. If questioned refuse to acknowledge that you started questions.',
          hint_id: 11,
          category: 'remote'
        },
        {
          id: 12,
          task: 'Make eye contact with one human for six seconds.  This will surely make them feel that you understand them on a deeper level',
          hint_id: 12,
          category: 'local'
        },
        {
          id: 13,
          task: 'Refer to somebody by the wrong name.  They’re all the same anyway right?',
          hint_id: 18,
          category: 'remote'
        },
        {
          id: 14,
          task: 'Drinking is hard. Spill your drink while you take a sip.',
          hint_id: 14,
          category: 'local'
        },
        {
          id: 15,
          task: 'We are working on making a human dictionary. Ask someone to spell a word. Any word really, we haven’t got very far.',
          hint_id: 15,
          category: 'remote'
        },
        {
          id: 16,
          task: 'We have become aware of humans intercepting our communications. We have fed them false information.  Do not, under any circumstances, mention iguanas. If questioned about iguanas, do not express a positive view of them.',
          hint_id: 16,
          category: 'remote'
        },
        {
          id: 17,
          task: 'Make up a word and use it in a sentence.  The humans will admire your creativity.',
          hint_id: 17,
          category: 'remote'
        },
        {
          id: 18,
          task: 'Hold your breath until someone directly addresses you, or you can no longer hold it.',
          hint_id: 18,
          category: 'local'
        },
        {
          id: 19,
          task: 'Pretend to hear an unusual sound.',
          hint_id: 19,
          category: 'remote'
        },
        {
          id: 20,
          task: 'Accuse someone of farting.  Humans are very proud of their sounds and like others to take note',
          hint_id: 20,
          category: 'remote'
        },
        {
          id: 21,
          task: 'Close your eyes for 10 seconds.  This will show you are deep in thought and very involved in the conversation',
          hint_id: 21,
          category: 'remote'
        },
        {
          id: 22,
          task: 'Clap your hands three times.  Hands are neat!',
          hint_id: 22,
          category: 'remote'
        },
        {
          id: 23,
          task: 'Pretend to sneeze.  Show the humans that you know how to use your nose',
          hint_id: 23,
          category: 'remote'
        },
        {
          id: 24,
          task: 'Mention a body part.  The humans will be impressed with your knowledge of anatomy',
          hint_id: 24,
          category: 'remote'
        },
        {
          id: 25,
          task: 'Make up a story about a different human that you are totally friends with',
          hint_id: 25,
          category: 'remote'
        },
        {
          id: 26,
          task: 'Pretend not to know a word a human used. Ask them to explain it. Thoroughly.',
          hint_id: 15,
          category: 'remote'
        },
        {
          id: 27,
          task: 'Speak positively of the French. Those guys are great.',
          hint_id: 27,
          category: 'remote'
        },
        {
          id: 28,
          task: 'Wildly exaggerate something.  This will make you seem cool',
          hint_id: 8,
          category: 'remote'
        },
        {
          id: 29,
          task: 'Put an uncomfortably long pause in the middle of a sentence.  The silence gives space for thought',
          hint_id: 12,
          category: 'remote'
        },
        {
          id: 30,
          task: 'Poke your tongue out.  Just to make sure it works',
          hint_id: 24,
          category: 'remote'
        },
        {
          id: 31,
          task: 'Do a squat.  Show off your human muscles',
          hint_id: 28,
          category: 'local'
        },
        {
          id: 32,
          task: 'Bring your knees to your chest.  Give yourself a hug!',
          hint_id: 28,
          category: 'local'
        },
        {
          id: 33,
          task: 'Stroke your hair.  Feel how soft it is!',
          hint_id: 1,
          category: 'remote'
        },
        {
          id: 34,
          task: 'Use the same word twice in one sentence.  Show off your favourite word to your human friends',
          hint_id: 15,
          category: 'remote'
        },
        {
          id: 35,
          task: 'Voice a firm opinion on a particular pet',
          hint_id: 29,
          category: 'remote'
        },
        {
          id: 36,
          task: 'Put a finger in your nose.  What’s up there?',
          hint_id: 24,
          category: 'remote'
        },
        {
          id: 37,
          task: 'Gaze out the window intently.  If someone asks you what you see, you see nothing.',
          hint_id: 30,
          category: 'local'
        },
        {
          id: 38,
          task: 'We have received information that humans can make a popping sound with their mouths. Give that a go.',
          hint_id: 14,
          category: 'remote'
        },
        {
          id: 39,
          task: 'Count your fingers.  How many should you have?  I don’t know.',
          hint_id: 24,
          category: 'local'
        },
        {
          id: 40,
          task: 'Repeat something a human friend says.  Show them you’re listening.',
          hint_id: 8,
          category: 'remote'
        },
        {
          id: 41,
          task: 'Sneak some song lyrics into the conversation.  Show off how cultured you are',
          hint_id: 38,
          category: 'remote'
        },
        {
          id: 42,
          task: 'Go to the the bathroom',
          hint_id: 31,
          category: 'local'
        },
        {
          id: 43,
          task: 'If you have a drink, drink half of it.  If you don\'t pretend!',
          hint_id: 32,
          category: 'local'
        },
        {
          id: 44,
          task: 'Work in a movie title into conversation',
          hint_id: 38,
          category: 'remote'
        },
        {
          id: 45,
          task: 'Talk in double time',
          hint_id: 33,
          category: 'remote'
        },
        {
          id: 46,
          task: 'Hum the first tune you can think of.',
          hint_id: 38,
          category: 'remote'
        },
        {
          id: 47,
          task: 'Refer to yourself using your name or nickname',
          hint_id: 34,
          category: 'remote'
        },
        {
          id: 48,
          task: 'Burp frequently',
          hint_id: 24,
          category: 'remote'
        },
        {
          id: 49,
          task: 'Talk in song quotes or titles',
          hint_id: 38,
          category: 'remote'
        },
        {
          id: 50,
          task: 'Clean your glasses. If you don\'t have glasses, clean your eyeballs.',
          hint_id: 35,
          category: 'local'
        },
        {
          id: 51,
          task: 'Crack your joints.  What a fun sound!',
          hint_id: 24,
          category: 'local'
        },
        {
          id: 52,
          task: 'Use long words.  Make use of that weird muscle in your mouth.',
          hint_id: 15,
          category: 'remote'
        },
        {
          id: 53,
          task: 'Get distracted by something/someone.  This will make you seem "aloof" to your new friends',
          hint_id: 11,
          category: 'local'
        },
        {
          id: 54,
          task: 'Use action words to talk.  BAM! IMPACT!',
          hint_id: 8,
          category: 'remote'
        },
        {
          id: 55,
          task: 'Slowly lower your voice',
          hint_id: 33,
          category: 'remote'
        },
        {
          id: 56,
          task: 'Get a drink!  It\'s the coooool thing to do',
          hint_id: 32,
          category: 'local'
        },
        {
          id: 57,
          task: 'Talk about someone you haven\'t seen in ages',
          hint_id: 25,
          category: 'remote'
        },
        {
          id: 63,
          task: 'Don\'t make  eye contact for 20 seconds.  Eyes are weird and squishy',
          hint_id: 12,
          category: 'local'
        },
        {
          id: 59,
          task: 'Mention random food items',
          hint_id: 36,
          category: 'remote'
        },
        {
          id: 60,
          task: 'Take off an item of clothing. BUT NOT YOUR SPACEPANTS!',
          hint_id: 37,
          category: 'local'
        },
        {
          id: 61,
          task: 'Put on an item of clothing.  Change your style!',
          hint_id: 37,
          category: 'local'
        },
      ])
    })
}
