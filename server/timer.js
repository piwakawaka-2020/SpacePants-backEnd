function randomNumber (min, max) {
   return (
   Math.floor(Math.random()*(max-min+1))+min
   )
}
let secCounter = 10

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
    document.getElementById('timer').innerHTML = `${minutes}:${seconds()}`

}

function timer() {const tick = setInterval(() => {
    timeDisp()
    decreaseTime(1)
    if(secCounter < 0) {
        clearInterval(tick)}
    }, 1000)
}
   document.getElementById('start').addEventListener("click", timer)
   document.getElementById('decrease').addEventListener("click", () => decreaseTime(15))
  



 module.exports = {
    timeDisp,
    timer,
    decreaseTime,
    secCounter
 }