const capitalize = require('../code/capitalize');

test('return capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello');
});
