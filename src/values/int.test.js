import int from './int';

test('int value', () => {
  expect(int.value(55)).toBe('55');
  expect(int.value('-55')).toBe('-55');
  expect(int.value('0')).toBe('0');

  expect(() => int.value(5.5)).toThrow();
  expect(() => int.value('5.5')).toThrow();
  expect(() => int.value('5f')).toThrow();
});

test('int decorator', () => {
  jest.spyOn(int, 'value');

  const obj = { fn: jest.fn() };
  const dec = Object.getOwnPropertyDescriptor(obj, 'fn');

  int.decorator()(obj, 'fn', dec);

  expect(dec.value.matcher).toBeInstanceOf(RegExp);

  dec.value(55);
  dec.value(55);

  expect(int.value).toHaveBeenCalledTimes(2);
  expect(int.value).toHaveBeenCalledWith(55);

  expect(obj.fn).toHaveBeenCalledTimes(2);
  expect(obj.fn).toHaveBeenCalledWith('55');

  int.value.mockReset();
  int.value.mockRestore();
});
