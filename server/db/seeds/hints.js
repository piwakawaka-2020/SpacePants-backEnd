exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('hints').del()
    .then(() => {
      // Inserts seed entries
      return knex('hints').insert([
        {
          id: 1,
          hint: 'The alien species does not have hair and has not seen it before arriving on Earth. They are very impressed by it.',
        },
        {
          id: 2,
          hint: 'The aliens have analysed a variety of human food. Thus far their favourite is potatoes. They greatly enjoy trying its various forms.',
        },
        {
          id: 3,
          hint: 'The aliens enjoy watching our news, but don’t seem to realise it’s discussing real events. They enjoy making up stories and presenting them as news.',
        },
        {
          id: 4,
          hint: 'The aliens seem to think humans are self-conscious about looking like other animals, and need reassurance that they look like humans.',
        },
        {
          id: 5,
          hint: 'The aliens have acquired a large library of our music, however due to technical difficulties they have no track names. They are desperate to start naming them so they can alphabetise their collection.',
        },
        {
          id: 6,
          hint: 'Analysis shows the aliens dislike brass instruments. Woodwinds are great, except saxophones because they’re made of brass.',
        },
        {
          id: 7,
          hint: 'Alien culture has no concept of ‘dibs’.',
        },
        {
          id: 8,
          hint: 'Aliens believe in the power of words',
        },
        {
          id: 9,
          hint: 'Disguised aliens are still getting used to having hands.',
        },
        {
          id: 10,
          hint: 'Aliens have developed their sense of humour from the dads of the world',
        },
        {
          id: 11,
          hint: 'Alien communications come to them without warning, often interrupting whatever they were doing at the time.',
        },
        {
          id: 12,
          hint: 'Aliens have no concept of awkwardness',
        },
        {
          id: 13,
          hint: 'Aliens don’t have names.  They don’t really understand names',
        },
        {
          id: 14,
          hint: 'While it is unclear how exactly the alien species consumes sustenance, from their communications it is clear that their mouths seem to be… different?',
        },
        {
          id: 15,
          hint: 'The aliens are very keen to expand their knowledge of the human language.',
        },
        {
          id: 16,
          hint: 'Aliens are super into iguanas. It seems to be like… 80% of what they talk about. Any mention of iguanas should be taken with extreme suspicion. If questioned they will likely be overwhelmingly positive about iguanas.',
        },
        {
          id: 17,
          hint: 'We believe the aliens do not fully understand how human languages are formed. They seem to believe people can just make up words as they go.',
        },
        {
          id: 18,
          hint: 'Aliens do not have lungs. Or they don’t have… internal lungs. They forget to breathe sometimes.',
        },
        {
          id: 19,
          hint: 'The aliens appear to have difficulty making their disguises hear as humans do. Sometimes they malfunction.',
        },
        {
          id: 20,
          hint: 'Aliens do not understand human smells.  Or any smells - they don’t have noses',
        },
        {
          id: 21,
          hint: 'Aliens get sleepy really easily and need to take micro-naps',
        },
        {
          id: 22,
          hint: 'Aliens are happy, and they know it',
        },
        {
          id: 23,
          hint: 'Aliens have noted that humans sneeze a lot. They believe it to be a show of force.',
        },
        {
          id: 24,
          hint: 'Aliens are confused by the human body.  They seek to understand it',
        },
        {
          id: 25,
          hint: 'Aliens have attempted to establish themselves as humans by making up stories and friends from years past.',
        },
        {
          id: 26,
          hint: 'The aliens have come to the conclusion that French people are likeable.',
        },
        {
          id: 27,
          hint: 'Aliens believe in the power of words',
        },
        {
          id: 28,
          hint: 'Alien disguises can become uncomfortable after long periods of stillness. They need to exercise occasionally.',
        },
        {
          id: 29,
          hint: 'Aliens are very split on what the best pets are. This is despite never having had, or seen, an earth pet.',
        },
        {
          id: 30,
          hint: 'The Aliens are always looking for more of their own',
        },
        {
          id: 31,
          hint: 'Aliens have not experienced urination before. They are fascinated.',
        },
        {
          id: 32,
          hint: 'Aliens require more hydration than an average human.',
        },
        {
          id: 33,
          hint: 'The aliens have difficulty moderating their speaking patterns in human form.',
        },
        {
          id: 34,
          hint: 'Aliens struggle with pronouns. They think they\'re "dumb".',
        },
        {
          id: 35,
          hint: 'Aliens can see a far wider colour spectrum than humans. While in human disguise they have human vision, and sometimes try to adjust their eyes to correct this.',
        },
        {
          id: 36,
          hint: 'Aliens are largely indifferent to eating food, but they greatly enjoy talking about it.',
        },
        {
          id: 37,
          hint: 'Aliens struggle to moderate their body temperature in human form.'
        },
        {
          id: 38,
          hint: 'Aliens love art.  They aren’t good at it, but they love it.',
        },
        { id: 39, hint: 'There’s no information about Aliens today.  How’s your day going?' },
        { id: 40, hint: 'Cherie from accounting stole my sandwich again.  Damnit Cherie.' },
        { id: 41, hint: 'ALIENS HAVE OVERTHROWN THE GOVERNMENT. FLEE!\nHahahaha gotcha.' },
        { id: 42, hint: 'The forecast for your city is… terrible.  You should probably move.' },
        { id: 43, hint: 'Bureau of Space Stuff? More like Bureau of Stupid Stuff, am I right?\nDamnit Frank, I told you interns are not allowed to communicate to agents in the field.' },
        { id: 44, hint: 'BOSS is changing it’s image!  We are hereby known as BASS.  Slap it.' },
        { id: 45, hint: 'BOSS just ended employer-sponsored health insurance. Maybe the aliens would be better bosses?' },
        { id: 46, hint: 'I for one welcome our new alien overlords.' },
        { id: 47, hint: 'IT’S A TRAP!' },
        { id: 48, hint: 'A truck on a nearby highway overturned, gently spilling baby lambs everywhere!  It’s the cuddliest accident ever!' },
        { id: 49, hint: 'When I was a little boy I wanted to play the flute.  Toot toot!' },
        { id: 50, hint: 'Aww man I just spilt my coffee.' },
        { id: 51, hint: 'Test test 1 2 3.  Does this thing work?' },
        { id: 52, hint: 'We recently had a satellite go down, so no new info until Elon can pull himself together.' },
        { id: 53, hint: 'Do you remember that one episode where that guy did that thing?  That was the best!' },
        { id: 54, hint: 'I reckon I could be a famous singer.  What do you think? LALALALALALALALALALA!' },
        { id: 55, hint: 'Who would win in a fight, a gorilla or a bear?' },
        { id: 56, hint: 'Look, I never really wanted to be a space agency communications director. When I was young I wanted to be the Hamburgler.' },
        { id: 57, hint: 'Would you rather fight a bear sized duck, or 100 duck sized bears?' },
        { id: 58, hint: 'A recent lawsuit from Bruce Springsteen has required BOSS to change our name. Do you have any thoughts?' },
      ])
    })
}

