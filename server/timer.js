// const io = require ('./index')
// const room = require ('./index')
const gameValues = require('./gameValues')

let secondCounter = {}

//push new {room: counter} key value pair to object
function createRoomCounter(room) {
    secondCounter[room] = gameValues.timerStart
}
// const taskTimeValue = gameValues.taskCompleteTimeReward

function decreaseTime(room, amount) {
    secondCounter[room] = (secondCounter[room] - amount)
}

function timeDisp(room) {
    let minutes = parseInt(secondCounter[room] / 60)
    let seconds = () => {
        let secs = secondCounter[room] % 60          
        if (secs < 10) {
            return `0${secs}`
        } else {
            return parseInt(secs)
        }
    }
    // io.to(room).emit('timer', `${minutes}:${seconds()}`)
    console.log(`${room}timer => ${minutes}:${seconds()}`)
}

function timer(room) {const tick = setInterval(() => {
    timeDisp(room)
    decreaseTime(room, 1)
    if(secondCounter[room] < 0) {
        clearInterval(tick)
        delete secondCounter[room]}
    }, 1000)
}
   //in index on start run timer()
   //in index on successful task call decreaseTime(taskTimeValue))
  



 module.exports = {
    timeDisp,
    timer,
    decreaseTime,
    createRoomCounter
 }