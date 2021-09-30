import array from '../code/array';

test('Check for min value', () => {
    expect(array([1, 4, 5, 6, 8, 12]).min).toBe(1);
});

test('Check for max value', () => {
    expect(array([1, 4, 5, 6, 8, 12]).min).toBe(12);
});

test('Check for average value', () => {
    expect(array([1, 4, 5, 6, 8, 12]).min).toBe(6);
});

test('Check for length', () => {
    expect(array([1, 4, 5, 6, 8, 12]).min).toBe(6);
});
