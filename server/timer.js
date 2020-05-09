// const io = require ('./index')
const gameValues = require('./gameValues')

//create object to store each room's counter as room: counter key value pair.
//each room's counter can then be called and modified with secondCounter[room]
let secondCounter = {}

//push new room counter to object and give it a start time value
function createRoomCounter(room) {
    secondCounter[room] = gameValues.timerStart
}
// decrease a rooms counter by any amount of time.
function decreaseTime(room, amount) {
    secondCounter[room] = (secondCounter[room] - amount)
}

function timeDisp(room, io) {
    let minutes = parseInt(secondCounter[room] / 60)
    let seconds = () => {
        let secs = secondCounter[room] % 60          
        if (secs < 10) {
            return `0${secs}`
        } else {
            return parseInt(secs)
        }
    }

    io.to(room).emit('timer', `${minutes}:${seconds()}`)
}

function timer(room, io) {const tick = setInterval(() => {
    timeDisp(room, io)
    decreaseTime(room, 1)
    
    if(secondCounter[room] < 0) {
        clearInterval(tick)
        //1. find alien in room - > emit to that socket get the task data from Alien front end
        //emit to the whole room (game over, (task data))
        delete secondCounter[room]}
    }, 1000)
}
  
 module.exports = {
    timeDisp,
    timer,
    decreaseTime,
    createRoomCounter
 }