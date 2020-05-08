// Start value of game timer in milliseconds
const timerStart = 3000

// How likely to deliver actual clue (0-1)
const hintChance = 0.5

//Max wait to deliver hint in milliseconds
const hintTime = 1000

//Max wait to deliver fake hint in milliseconds
const fakeHintTime = 45000

//Time bonus on successful completion of task in seconds
const taskCompleteTimeReward = 30

module.exports = {
  timerStart,
  hintChance,
  hintTime,
  fakeHintTime,
  taskCompleteTimeReward
}