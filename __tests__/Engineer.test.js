const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Robert', 90, 'rfields@gmail.com', 'rfields03');

  expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
  const engineer = new Engineer('Robert', 90, 'rfields03@gmail.com', 'Rfields03');

  expect(engineer.gitGithub()).toEqual
  (expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
  const engineer = new Engineer('Robert', 90, 'rfields03@gmail.com', 'Rfields03');

  expect(engineer.getRole()).toEqual("Engineer");
});

