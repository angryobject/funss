import { lengthDecorator } from './values';

export const options = {
  defaultLengthUnit: 'px',
};

export default {
  /* MARGIN */
  @lengthDecorator(options)
  m(v) {
    return `margin: ${v};`;
  },
  @lengthDecorator(options)
  mx(v) {
    return `margin-left: ${v}; margin-right: ${v};`;
  },
  @lengthDecorator(options)
  my(v) {
    return `margin-top: ${v}; margin-bottom: ${v};`;
  },
  @lengthDecorator(options)
  ml(v) {
    return `margin-left: ${v};`;
  },
  @lengthDecorator(options)
  mr(v) {
    return `margin-right: ${v};`;
  },
  @lengthDecorator(options)
  mt(v) {
    return `margin-top: ${v};`;
  },
  @lengthDecorator(options)
  mb(v) {
    return `margin-bottom: ${v};`;
  },

  /* PADDING */
  @lengthDecorator(options)
  p(v) {
    return `padding: ${v};`;
  },
  @lengthDecorator(options)
  px(v) {
    return `padding-left: ${v}; padding-right: ${v};`;
  },
  @lengthDecorator(options)
  py(v) {
    return `padding-top: ${v}; padding-bottom: ${v};`;
  },
  @lengthDecorator(options)
  pl(v) {
    return `padding-left: ${v};`;
  },
  @lengthDecorator(options)
  pr(v) {
    return `padding-right: ${v};`;
  },
  @lengthDecorator(options)
  pt(v) {
    return `padding-top: ${v};`;
  },
  @lengthDecorator(options)
  pb(v) {
    return `padding-bottom: ${v};`;
  },

  /* POSITION */
  @lengthDecorator(options)
  l(v) {
    return `left: ${v};`;
  },
  @lengthDecorator(options)
  r(v) {
    return `right: ${v};`;
  },
  @lengthDecorator(options)
  t(v) {
    return `top: ${v};`;
  },
  @lengthDecorator(options)
  b(v) {
    return `bottom: ${v};`;
  },

  /* SIZE */
  @lengthDecorator(options)
  w(v) {
    return `width: ${v};`;
  },
  @lengthDecorator(options)
  h(v) {
    return `height: ${v};`;
  },
  @lengthDecorator(options)
  maw(v) {
    return `max-width: ${v};`;
  },
  @lengthDecorator(options)
  mah(v) {
    return `max-height: ${v};`;
  },
  @lengthDecorator(options)
  miw(v) {
    return `min-width: ${v};`;
  },
  @lengthDecorator(options)
  mih(v) {
    return `min-height: ${v};`;
  },

  /* Z-INDEX */
  z(v) {
    return `z-index: ${v};`;
  },
};
