const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

TestWatcher('creates an employee object', () => {
  const employee = new Employee('Robert', 90, 'rfields03@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
  const employee = new Employee('Robert', 90, 'rfields03@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
  const employee = new Employee('Robert', 90. 'rfields03@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee('Robert', 90, 'rfields03@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
  const employee = new Employee('Robert', 90, 'rfields03@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});