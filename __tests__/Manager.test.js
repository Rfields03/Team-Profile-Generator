const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
  const manager = new Manager('Robert', 90, 'rfields03@gmail.com', 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
  const manager = new Manager('Robert', 90, 'rfields03@gmail.com');

  expect(manager.getRole()).toEqual("Manager");
});