import gen from './generator';
import f from './functions';

Object.keys(f).forEach(k => jest.spyOn(f, k));

beforeEach(() => {
  jest.clearAllMocks();
});

test('valid selectors', () => {
  gen.generateCSS('mt20');
  expect(f.mt).toHaveBeenCalledWith('20');

  gen.generateCSS('mt20p');
  expect(f.mt).toHaveBeenCalledWith('20p');

  gen.generateCSS('mih20e');
  expect(f.mih).toHaveBeenCalledWith('20e');
});

test('valid selector invalid value', () => {
  expect(gen.generateCSS('mtt20')).toBeNull();
  expect(f.mt).toHaveBeenCalledWith('t20');
  expect(gen.generateCSS('mt20pp')).toBeNull();
  expect(f.mt).toHaveBeenCalledWith('20pp');
  expect(gen.generateCSS('mihe20e')).toBeNull();
  expect(f.mih).toHaveBeenCalledWith('e20e');
});

test('invalid selector', () => {
  expect(gen.generateCSS('foo')).toBeNull();
  expect(gen.generateCSS('_i8')).toBeNull();
  expect(gen.generateCSS('ddt')).toBeNull();

  Object.keys(f).forEach(k => {
    expect(f[k]).not.toHaveBeenCalled();
  });
});
