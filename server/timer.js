const socket = require ('socket.io')

let secCounter = 300
const taskTimeValue = 30

function decreaseTime(amount) {
secCounter -= amount
}

function timeDisp () {
    let minutes = parseInt(secCounter / 60)
    let seconds = () => {
        let secs = secCounter % 60          
        if (secs < 10) {
            return `0${secs}`
        } else {
            return parseInt(secs)
        }
    }
    io.to(room).emit('timer', `${minutes}:${seconds()}`)
}

function timer() {const tick = setInterval(() => {
    timeDisp()
    decreaseTime(1)
    if(secCounter < 0) {
        clearInterval(tick)}
    }, 1000)
}
   document.getElementById('start').addEventListener("click", timer)
   document.getElementById('decrease').addEventListener("click", () => decreaseTime(taskTimeValue))
  



 module.exports = {
    timeDisp,
    timer,
    decreaseTime,
    secCounter
 }