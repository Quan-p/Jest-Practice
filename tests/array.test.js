import arrayAnalysis from '../code/array';

test('Check for min value', () => expect(arrayAnalysis([1, 4, 5, 6, 8, 12]).min).toBe(1));

test('Check for max value', () => expect(arrayAnalysis([1, 4, 5, 6, 8, 12]).max).toBe(12));

test('Check for average value', () => expect(arrayAnalysis([1, 4, 5, 6, 8, 12]).average).toBe(6));

test('Check for length', () => expect(arrayAnalysis([1, 4, 5, 6, 8, 12]).length).toBe(6));
