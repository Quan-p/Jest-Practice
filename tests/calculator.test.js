const calculator = require('../code/calculator');

test('Adds 1 and 2 to equal 3', () => {
    expect(calculator.add(1, 2).toBe(3));
});

test('Subtract 1 and 2 to equal -1', () => {
    expect(calculator.subtract(1, 2).toBe(-1));
});

test('Multiply 5 and 2 to equal ', () => {
    expect(calculator.multiply(5, 2).toBe(10));
});

test('Divide 100 and 2 to equal 50', () => {
    expect(calculator.divide(100, 2).toBe(50));
});
