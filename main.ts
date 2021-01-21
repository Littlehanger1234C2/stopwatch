let Start = 0
let ELAPSED = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    ELAPSED = input.runningTime() - Start
    basic.showNumber(ELAPSED / 1000)
})
basic.forever(function () {
	
})
