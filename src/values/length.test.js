import length from './length';

test('length', () => {
  expect(length(55)).toBe('55px');
  expect(length(-55)).toBe('-55px');
  expect(length('-55')).toBe('-55px');
  expect(length('55p')).toBe('55%');
  expect(length('-5.5p')).toBe('-5.5%');
  expect(length('5.5e')).toBe('5.5em');
  expect(length('-5.5x')).toBe('-5.5ex');
  expect(length('55r')).toBe('55rem');
  expect(length('55rr')).toBeNull();
  expect(length('55m')).toBeNull();
  expect(length('5.5-')).toBeNull();
});
