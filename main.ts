radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
    basic.pause(100)
})
