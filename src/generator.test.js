import gen from './generator';
import f from './functions';

Object.keys(f).forEach(k => {
  const m = f[k].matcher;
  jest.spyOn(f, k);
  f[k].matcher = m;
});

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

test('invalid selectors', () => {
  expect(gen.generateCSS('mtt20')).toBeNull();
  expect(f.mt).not.toHaveBeenCalled();

  expect(gen.generateCSS('mt20pp')).toBeNull();
  expect(f.mt).not.toHaveBeenCalled();

  expect(gen.generateCSS('mihe20e')).toBeNull();
  expect(f.mih).not.toHaveBeenCalled();
});
