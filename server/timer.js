const gameValues = require('./gameValues')

//create object to store each room's counter as "room: counter" key value pair.
//each room's counter can then be called and modified with syntax secondCounter[room]
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

function endTimer (room, tick, io) {
    clearInterval(tick)
    delete secondCounter[room]
}

function timer(room, io) {const tick = setInterval(() => {
    timeDisp(room, io)
    decreaseTime(room, 1)
    if(secondCounter[room] == null) { //check if game is ended.
        endTimer(room, tick, io)
    }
    if(secondCounter[room] < 0) {
        endTimer(room, tick, io)
        io.to(room).emit('gameOver', {winner: 'Alien'})
        }
    }, 1000)
}
  
 module.exports = {
    timeDisp,
    timer,
    decreaseTime,
    createRoomCounter,
    secondCounter
 }