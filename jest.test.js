import stringLength from './string_length.js';
import reverseString from './reverse_string.js';
import capitalize from './capitalize.js';

describe('Checks the two possible outputs', () => {
  test('Returns string length between 1 and 9 characters', () => {
    expect(stringLength('angel')).toEqual(5);
  });
  
  test('Throws error if string is longer than 10 characters', () => {
    expect(() => stringLength('thisalongstring')).toThrow('Strings excedes 10 characters');
  });
});

describe('Returns a reverse string', () => {
  test('Returns a reverse string', () => {
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });
});

describe('Returns a capitalized string', () => {
  const integer = 150;

  test('Capitalizes a string', () => {
    expect(capitalize('jest')).toEqual('JEST');
  });

  test('Capitalizes a string with a non ASCII character', () => {
    expect(capitalize('león')).toEqual('LEÓN');
  });

  test('Capitalizes a string with a number', () => {
    expect(capitalize('h5')).toEqual('H5');
  });

  test('Throws error if string is longer than 10 characters', () => {
    expect(() => capitalize(integer)).toThrow(`${integer} is not a string.`);
  });
});

