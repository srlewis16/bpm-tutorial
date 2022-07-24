input.onButtonPressed(Button.A, function () {
    BPM = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(6 * BPM)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    BPM += 1
})
let BPM = 0
BPM = 0
