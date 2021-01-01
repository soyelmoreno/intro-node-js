// write some tests
const {findUser, deleteUser, fixId} = require('./users');

const testUser4 = {"id":4,"email":"readycoder4@gmail.com"};
const noUser = `Error: No user with id "4"`;

describe('users', () => {
  test('fixId correctly converts string to number', () => {
    expect(fixId('7')).toEqual(7);
  });
  test('findUser returns the correct user object', () => {
    return findUser(4).then(data => {
      expect(data.id).toEqual(testUser4.id);
      expect(data.email).toEqual(testUser4.email);
    });
  });
  test('deleteUser returns the deleted user id', () => {
    return deleteUser(4).then(data => {
      expect(data.id).toBe(4);
    });
  });
  test('deleteUser actually deleted the user', () => {
    return findUser(4).catch(err => {
      expect(err.toString()).toBe(noUser);
    });
  })
})
