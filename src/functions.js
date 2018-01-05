import { length, int } from './values/index';

export default {
  /* MARGIN */
  @length
  m(v) {
    return `margin: ${v};`;
  },
  @length
  mx(v) {
    return `margin-left: ${v}; margin-right: ${v};`;
  },
  @length
  my(v) {
    return `margin-top: ${v}; margin-bottom: ${v};`;
  },
  @length
  ml(v) {
    return `margin-left: ${v};`;
  },
  @length
  mr(v) {
    return `margin-right: ${v};`;
  },
  @length
  mt(v) {
    return `margin-top: ${v};`;
  },
  @length
  mb(v) {
    return `margin-bottom: ${v};`;
  },

  /* PADDING */
  @length
  p(v) {
    return `padding: ${v};`;
  },
  @length
  px(v) {
    return `padding-left: ${v}; padding-right: ${v};`;
  },
  @length
  py(v) {
    return `padding-top: ${v}; padding-bottom: ${v};`;
  },
  @length
  pl(v) {
    return `padding-left: ${v};`;
  },
  @length
  pr(v) {
    return `padding-right: ${v};`;
  },
  @length
  pt(v) {
    return `padding-top: ${v};`;
  },
  @length
  pb(v) {
    return `padding-bottom: ${v};`;
  },

  /* POSITION */
  @length
  l(v) {
    return `left: ${v};`;
  },
  @length
  r(v) {
    return `right: ${v};`;
  },
  @length
  t(v) {
    return `top: ${v};`;
  },
  @length
  b(v) {
    return `bottom: ${v};`;
  },

  /* SIZE */
  @length
  w(v) {
    return `width: ${v};`;
  },
  @length
  h(v) {
    return `height: ${v};`;
  },
  @length
  maw(v) {
    return `max-width: ${v};`;
  },
  @length
  mah(v) {
    return `max-height: ${v};`;
  },
  @length
  miw(v) {
    return `min-width: ${v};`;
  },
  @length
  mih(v) {
    return `min-height: ${v};`;
  },

  /* Z-INDEX */
  @int
  z(v) {
    return `z-index: ${v};`;
  },
};
