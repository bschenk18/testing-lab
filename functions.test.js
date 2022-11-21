let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James.')
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.')
})

test("Addition Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
})

test("Addition Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})

describe("Math functions", () => {
    test("Add", () => {
        expect(myFunctions.add(12, 8)).toBe(20)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(12, 4)).toBe(8)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(myFunctions.divide(12, 4)).toBe(3)
    })
})

