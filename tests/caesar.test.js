import caesar from '../code/caesar';

test('caesar shifts letters with a given number', () => {
    expect(caesar('hellow world', 2)).toBe('jgnnq yqtnf');
});
