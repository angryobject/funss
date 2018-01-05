jest.mock('./length');
jest.mock('./int');

import * as decorators from './index';
import length from './length';
import int from './int';

test('length decorator', () => {
  const obj = { fn: jest.fn() };
  const dec = Object.getOwnPropertyDescriptor(obj, 'fn');

  decorators.length(obj, 'fn', dec);

  length.mockReturnValue('something valid');
  dec.value(55);
  dec.value(55);
  length.mockReturnValue(null);
  dec.value();

  expect(length).toHaveBeenCalledTimes(3);
  expect(obj.fn).toHaveBeenCalledTimes(2);
});

test('int decorator', () => {
  const obj = { fn: jest.fn() };
  const dec = Object.getOwnPropertyDescriptor(obj, 'fn');

  decorators.int(obj, 'fn', dec);

  int.mockReturnValue('something valid');
  dec.value(55);
  dec.value(55);
  int.mockReturnValue(null);
  dec.value();

  expect(int).toHaveBeenCalledTimes(3);
  expect(obj.fn).toHaveBeenCalledTimes(2);
});
