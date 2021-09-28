const capitalize = require('../code/capitalize');

test('return capitalized string', () => {
    expect(capitalize('potato chips')).toBe('Potato chips');
});
