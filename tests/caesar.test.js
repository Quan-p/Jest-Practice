import caesar from '../code/caesar';

test('caesar shifts letters with a given number', () => {
    expect(caesar('hello world', 2)).toBe('jgnnq yqtnf');
});
