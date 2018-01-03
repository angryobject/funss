import f from './functions';

test('functions return correct properties', () => {
  expect(f.m(1)).toMatch(/margin:.+;/);
  expect(f.mx(1)).toMatch(/margin-left:.+; margin-right:.+;/);
  expect(f.ml(1)).toMatch(/margin-left:.+;/);
  expect(f.mr(1)).toMatch(/margin-right:.+;/);
  expect(f.mt(1)).toMatch(/margin-top:.+;/);
  expect(f.mb(1)).toMatch(/margin-bottom:.+;/);

  expect(f.p(1)).toMatch(/padding:.+;/);
  expect(f.px(1)).toMatch(/padding-left:.+; padding-right:.+;/);
  expect(f.pl(1)).toMatch(/padding-left:.+;/);
  expect(f.pr(1)).toMatch(/padding-right:.+;/);
  expect(f.pt(1)).toMatch(/padding-top:.+;/);
  expect(f.pb(1)).toMatch(/padding-bottom:.+;/);

  expect(f.l(1)).toMatch(/left:.+;/);
  expect(f.r(1)).toMatch(/right:.+;/);
  expect(f.t(1)).toMatch(/top:.+;/);
  expect(f.b(1)).toMatch(/bottom:.+;/);

  expect(f.w(1)).toMatch(/width:.+;/);
  expect(f.h(1)).toMatch(/height:.+;/);
  expect(f.maw(1)).toMatch(/max-width:.+;/);
  expect(f.mah(1)).toMatch(/max-height:.+;/);
  expect(f.miw(1)).toMatch(/min-width:.+;/);
  expect(f.mih(1)).toMatch(/min-height:.+;/);

  expect(f.z(1)).toMatch(/z-index:.+;/);
});
