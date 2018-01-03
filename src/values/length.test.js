import l from './length';

test('length value', () => {
  expect(l.value(55)).toBe('55px');
  expect(l.value(-55)).toBe('-55px');
  expect(l.value('-55')).toBe('-55px');
  expect(l.value('55p')).toBe('55%');
  expect(l.value('-5.5p')).toBe('-5.5%');
  expect(l.value('5.5e')).toBe('5.5em');
  expect(l.value('-5.5x')).toBe('-5.5ex');
  expect(l.value('55r')).toBe('55rem');

  expect(() => l.value('55rr')).toThrow();
  expect(() => l.value('55m')).toThrow();
  expect(() => l.value('5.5-')).toThrow();
});

test('length decorator', () => {
  jest.spyOn(l, 'value');

  const obj = { fn: jest.fn() };
  const dec = Object.getOwnPropertyDescriptor(obj, 'fn');

  l.decorator(obj, 'fn', dec);

  expect(dec.value.matcher).toBeInstanceOf(RegExp);

  dec.value(55);
  dec.value(55);

  expect(l.value).toHaveBeenCalledTimes(2);
  expect(l.value).toHaveBeenCalledWith(55);

  expect(obj.fn).toHaveBeenCalledTimes(2);
  expect(obj.fn).toHaveBeenCalledWith('55px');

  l.value.mockReset();
  l.value.mockRestore();
});
