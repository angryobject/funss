jest.mock('./functions');

import gen from './generator';
import f from './functions';

test('is valid', () => {
  expect(gen.isValidClassName('mt20')).toBe(true);
  expect(gen.isValidClassName('t20')).toBe(true);
  expect(gen.isValidClassName('px20')).toBe(true);
  expect(gen.isValidClassName('my20e')).toBe(true);
  expect(gen.isValidClassName('miw20p')).toBe(true);

  expect(gen.isValidClassName('foo20')).toBe(false);
  expect(gen.isValidClassName('mf20')).toBe(false);
  expect(gen.isValidClassName('mw20')).toBe(false);
  expect(gen.isValidClassName('maww20')).toBe(false);
  expect(gen.isValidClassName('tt4')).toBe(false);
});

test('generate css', () => {
  gen.generateCSS('mt20');
  expect(f.mt).toHaveBeenCalledWith('20');

  gen.generateCSS('mt20p');
  expect(f.mt).toHaveBeenCalledWith('20p');

  gen.generateCSS('mih20em');
  expect(f.mih).toHaveBeenCalledWith('20em');
});
