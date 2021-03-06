// Start value of game timer in seconds
const timerStart = 300

// Time penalty for skipping task
const skipTime = 30000

// How likely to deliver actual clue (0-1)
const hintChance = 0.5

//Max wait to deliver hint in milliseconds
const hintTime = 10000

//Max wait to deliver fake hint in milliseconds
const fakeHintTime = 10000

//Time bonus on successful completion of task in seconds
const taskCompleteTimeReward = 30

//Floor limit that time can be reduced to on task completion in seconds
const timeFloor = 30

//Number of entries in task db
const numTasks = 61

//Number of entries in remote category
const numRemote = 43

//Number of entries in fakeHint db
const numFakeHints = 58

module.exports = {
  timerStart,
  skipTime,
  hintChance,
  hintTime,
  fakeHintTime,
  taskCompleteTimeReward,
  numTasks,
  numFakeHints,
  timeFloor
}