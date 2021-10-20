const { addNumbers } = require('./api.js');

test('adds two numbers', () => {
  console.log('sumtest ran');
  expect(addNumbers(1, 2)).toBe(3);
})