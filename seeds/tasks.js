
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          task: 'Compliment a human’s hair. They like that.',
          hint: 'The alien species does not have hair and has not seen it before arriving on Earth. They are very impressed by it.',
        },
        {
          id: 2,
          task: 'Mention a food made from potatoes. Any one, they’re all great.',
          hint: 'The aliens have analysed a variety of human food. Thus far their favourite is potatoes. They greatly enjoy trying its various forms.',
        },
        {
          id: 3,
          task: 'Make up a news article. Discuss it as if it’s real.',
          hint: 'The aliens enjoy watching our news, but don’t seem to realise it’s discussing real events. They enjoy making up stories and presenting them as news.',
        },
        {
          id: 4,
          task: 'Reassure someone you know they’re human.',
          hint: 'The aliens seem to think humans are self-conscious about looking like other animals, and need reassurance that they look like humans.',
        },
        {
          id: 5,
          task: 'Make guess a song by humming or whistling it.',
          hint: 'The aliens have acquired a large library of our music, however due to technical difficulties they have no track names. They are desperate to start naming them so they can alphabetise their collection.',
        },
        {
          id: 6,
          task: 'Pick your least favourite brass instrument and criticise it for a while.',
          hint: 'Analysis shows the aliens dislike brass instruments. Woodwinds are great, except saxophones because they’re made of brass.',
        },
        {
          id: 7,
          task: 'Next time someone stands up, steal their seat.  Enjoy the warmth.',
          hint: 'Alien culture has no concept of ‘dibs’.',
        },
        {
          id: 8,
          task: 'Convince a human to trust you by using the phrase ‘trust me’ three times',
          hint: 'Aliens believe in the power of words',
        },
        {
          id: 9,
          task: 'Drop something.  Then you can pick it up to show off your human exterity',
          hint: 'Disguised aliens are still getting used to having hands.',
        },
        {
          id: 10,
          task: 'Use a pun.Your new friends will think you are punny!',
          hint: 'Aliens have developed their sense of humour from the dads of the world',
        },
        {
          id: 11,
          task: 'Stop talking mid sentence. If questioned refuse to acknowledge that you started questions.',
          hint: 'Alien communications come to them without warning, often interrupting whatever they were doing at the time.',
        },
        {
          id: 12,
          task: 'Make eye contact with one human for six seconds.  This will surely make them feel that you understand them on a deeper level',
          hint: 'Aliens have no concept of awkwardness',
        },
        {
          id: 13,
          task: 'Refer to somebody by the wrong name.  They’re all the same anyway right?',
          hint: 'Aliens don’t have names.  They don’t really… get names',
        },
        {
          id: 14,
          task: 'Drinking is hard. Spill your drink while you take a sip.',
          hint: 'While it is unclear how exactly the alien species consumes sustenance, from their communications it is clear that their mouths seem to be… different?',
        },
        {
          id: 15,
          task: 'We are working on making a human dictionary. Ask someone to spell a word. Any word really, we haven’t got very far.',
          hint: 'The aliens are very keen to expand their knowledge of the human language.',
        },
        {
          id: 16,
          task: 'We have become aware of humans intercepting our communications. We have fed them false information.  Do not, under any circumstances, mention iguanas. If questioned about iguanas, do not express a positive view of them.',
          hint: 'Aliens are super into iguanas. It seems to be like… 80% of what they talk about. Any mention of iguanas should be taken with extreme suspicion. If questioned they will likely be overwhelmingly positive about iguanas.',
        },
        {
          id: 17,
          task: 'Make up a word and use it in a sentence.  The humans will admire your creativity.',
          hint: 'We believe the aliens do not fully understand how human languages are formed. They seem to believe people can just make up words as they go.',
        },
        {
          id: 18,
          task: 'Hold your breath until someone directly addresses you, or you can no longer hold it.',
          hint: 'Aliens do not have lungs. Or they don’t have… internal lungs. They forget to breathe sometimes.',
        },
        {
          id: 19,
          task: 'Pretend to hear an unusual sound.',
          hint: 'The aliens appear to have difficulty making their disguises hear as humans do. Sometimes they malfunction.',
        },
        {
          id: 20,
          task: 'Accuse someone of farting.  Humans are very proud of their sounds and like others to take note',
          hint: 'Aliens do not understand human smells.  Or any smells - they don’t have noses',
        },
        {
          id: 21,
          task: 'Close your eyes for 10 seconds.  This will show you are deep in thought and very involved in the conversation',
          hint: 'Aliens get sleepy really easily and need to take micro-naps',
        },
        {
          id: 22,
          task: 'Clap your hands three times.  Hands are neat!',
          hint: 'Aliens are happy, and they know it',
        },
        {
          id: 23,
          task: 'Pretend to sneeze.  Show the humans that you know how to use your nose',
          hint: 'Aliens have noted that humans sneeze a lot. They believe it to be a show of force.',
        },
        {
          id: 24,
          task: 'Mention a body part.  The humans will be impressed with your knowledge of anatomy',
          hint: 'Aliens are confused by the human body.  They seek to understand it',
        },
        {
          id: 25,
          task: 'Make up a story about a different human that you are totally friends with',
          hint: 'The aliens are keen to promote friendship.  Perhaps to disguise their more sinister goal?',
        },
        {
          id: 26,
          task: 'Pretend not to know a word a human used. Ask them to explain it. Thoroughly.',
          hint: 'The aliens are very keen to expand their knowledge of the human language.',
        },
        {
          id: 27,
          task: 'Speak positively of the French. Those guys are great.',
          hint: 'The aliens have come to the conclusion that French people are likeable.',
        },
        {
          id: 28,
          task: 'Wildly exaggerate something.  This will make you seem cool',
          hint: 'Aliens believe in the power of words',
        },
        {
          id: 29,
          task: 'Put an uncomfortably long pause in the middle of a sentence.  The silence gives space for thought',
          hint: 'Aliens have no concept of awkwardness',
        },
        {
          id: 30,
          task: 'Poke your tongue out.  Just to make sure it works',
          hint: 'Aliens are confused by the human body.  They seek to understand it',
        },
        {
          id: 31,
          task: 'Do a squat.  Show off your human muscles',
          hint: 'Alien disguises can become uncomfortable after long periods of stillness. They need to exercise occasionally.',
        },
        {
          id: 32,
          task: 'Bring your knees to your chest.  Give yourself a hug!',
          hint: 'Alien disguises can become uncomfortable after long periods of stillness. They need to exercise occasionally.',
        },
        {
          id: 33,
          task: 'Stroke your hair.  Feel how soft it is!',
          hint: 'The alien species does not have hair and has not seen it before arriving on Earth. They are very impressed by it.',
        },
        {
          id: 34,
          task: 'Use the same word twice in one sentence.  Show off your favourite word to your human friends',
          hint: 'The aliens are very keen to expand their knowledge of the human language.',
        },
        {
          id: 35,
          task: 'Voice a firm opinion on a particular pet',
          hint: 'Aliens are very split on what the best pets are. This is despite never having had, or seen, an earth pet.',
        },
        {
          id: 36,
          task: 'Put a finger in your nose.  What’s up there?',
          hint: 'Aliens are confused by the human body.  They seek to understand it',
        },
        {
          id: 37,
          task: 'Gaze out the window intently.  If someone asks you what you see, you see nothing.',
          hint: 'The Aliens are always looking for more of their own',
        },
        {
          id: 38,
          task: 'We have received information that humans can make a popping sound with their mouths. Give that a go.',
          hint: 'While it is unclear how exactly the alien species consumes sustenance, from their communications it is clear that their mouths seem to be… different?',
        },
        {
          id: 39,
          task: 'Count your fingers.  How many should you have?  I don’t know.',
          hint: 'Aliens are confused by the human body.  They seek to understand it',
        },
        {
          id: 40,
          task: 'Repeat something a human friend says.  Show them you’re listening.',
          hint: 'Aliens believe in the power of words',
        },
        {
          id: 41,
          task: 'Sneak some song lyrics into the conversation.  Show off how cultured you are',
          hint: 'Aliens love art.  They aren’t good at it, but they love it.',
        },
        {
          id: 42,
          task: 'Go to the the bathroom',
          hint: 'They can\'t wait'
        },
        {
          id: 43,
          task: 'Consume half your beverage',
          hint: 'They might be consuming'
        },
        {
          id: 44,
          task: 'Work in a movie title into conversation',
          hint: 'It\'s in long form',
        },
        {
          id: 45,
          task: 'Talk in double time',
          hint: 'Speed kills'
        },
        {
          id: 46,
          task: 'Hum the catchiest tune',
          hint: 'One hit wonder?'
        },
        {
          id: 47,
          task: 'Refer to yourself using your name or nickname',
          hint: 'Third person shooter',
        },
        {
          id: 48,
          task: 'Burp frequently',
          hint: 'Gas explodes'
        },
        {
          id: 49,
          task: 'Talk in song quotes or titles',
          hint: 'What\'s that song again',
        },
        {
          id: 50,
          task: 'Clean your glasses',
          hint: 'I can\'t see'
        },
        {
          id: 51,
          task: 'Crack your joints',
          hint: 'Snap, crackle, pop'
        },
        {
          id: 52,
          task: 'Use long words',
          hint: 'Did you really say that?',
        },
        {
          id: 53,
          task: 'Get distracted by something/someone',
          hint: 'Concentrate'
        },
        {
          id: 54,
          task: 'Use action words to talk',
          hint: 'Batman \'66',
        },
        {
          id: 55,
          task: 'Slowly lower your voice',
          hint: 'What\'s that?'
        },
        {
          id: 56,
          task: 'Get a drink',
          hint: 'They might be consuming'
        },
        {
          id: 57,
          task: 'Talk about someone you haven\'t seen in ages',
          hint: 'Blast from the past',
        },
        {
          id: 58,
          task: 'Only look at the opposite sex',
          hint: 'Look at me'
        },
        {
          id: 59,
          task: 'Mention random food items',
          hint: 'You hungry?',
        },
        {
          id: 60,
          task: 'Take off clothe items',
          hint: 'You hot?'
        },
        {
          id: 61,
          task: 'Use the sentence \"Trust me\" as much as possible',
          hint: 'Do you?',
        },
        {
          id: 62,
          task: 'Put on clothe items',
          hint: 'Tauros',
        },
        {
          id: 63,
          task: 'No eye contact',
          hint: 'Concentrate'
        }
      ])
    })
}
