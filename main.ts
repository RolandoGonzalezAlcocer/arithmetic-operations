input.onButtonPressed(Button.A, function () {
    basic.showNumber(perimeter)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(area)
})
let area = 0
let perimeter = 0
basic.clearScreen()
let suma = 1 + 1
basic.showNumber(suma)
basic.clearScreen()
let resta = 3 - 2
basic.showNumber(resta)
basic.clearScreen()
let multiplication = 5 * 3
basic.showNumber(multiplication)
basic.clearScreen()
let division = 6 / 2
basic.showNumber(division)
basic.clearScreen()
let exponent = 2 ** 3
basic.showNumber(exponent)
basic.clearScreen()
let remainder = 5 % 3
basic.showNumber(remainder)
basic.clearScreen()
let square_root = Math.sqrt(0)
basic.showNumber(square_root)
basic.clearScreen()
let round = Math.round(5.4)
basic.showNumber(round)
basic.clearScreen()
let ceiling = Math.ceil(-3.63)
basic.showNumber(ceiling)
basic.clearScreen()
let floor = Math.floor(1.7623)
basic.showNumber(floor)
basic.clearScreen()
let truncate = Math.trunc(1.547)
basic.showNumber(truncate)
basic.clearScreen()
let lado_1 = 6
let lado_2 = 4
perimeter = 2 * lado_1 + 2 * lado_2
area = lado_1 * lado_2
