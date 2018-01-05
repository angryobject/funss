import int from './int';

test('int value', () => {
  expect(int(55)).toBe('55');
  expect(int('-55')).toBe('-55');
  expect(int('0')).toBe('0');
  expect(int(5.5)).toBeNull();
  expect(int('5.5')).toBeNull();
  expect(int('5f')).toBeNull();
});
