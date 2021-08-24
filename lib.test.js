const stringLength = require('./lib.js');

test('Returns string length between 1 and 9 characters', () => {
  expect(stringLength('angel')).toEqual(5);
});

test('Throws error if string is longer than 10 characters', () => {
  expect(() => stringLength('thisalongstring')).toThrow('Strings excedes 10 characters');
});

