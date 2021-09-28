import calculator from '../code/calculator';

test('Adds two numbers', () => {
    expect(calculator.add(10, 5)).toBe(15);
});

test('Subtracts two numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test('Multiply two numbers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
});

test('Divides two numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});
