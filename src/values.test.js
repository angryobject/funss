import { lengthValue, lengthDecorator } from './values';

test('length value', () => {
  expect(lengthValue(55)).toBe('55px');
  expect(lengthValue(55, 'em')).toBe('55em');
  expect(lengthValue('55')).toBe('55px');
  expect(lengthValue('55p')).toBe('55%');
  expect(lengthValue('55p', 'em')).toBe('55%');
  expect(lengthValue('5.5e')).toBe('5.5em');
  expect(lengthValue('-5.5x')).toBe('-5.5ex');
  expect(lengthValue('55cm')).toBe('55cm');
});

test('length decorator', () => {
  const dec = lengthDecorator({ defaultLengthUnit: 'em' });

  expect(dec).toBeInstanceOf(Function);
  expect(dec.length).toBe(3);

  const fn = jest.fn();
  const obj = { foo: fn };
  const desc = Object.getOwnPropertyDescriptor(obj, 'foo');

  dec(obj, 'foo', desc);
  // call modified descriptor value
  desc.value(55);

  expect(fn.mock.calls[0][0]).toBe('55em');
});
