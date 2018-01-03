const units = {
  p: '%',
  e: 'em',
  x: 'ex',
  r: 'rem',
  default: 'px',
};

const _num_ = '-?\\d+(?:.\\d+)?';
const _unit_ = Object.keys(units)
  .filter(k => k !== 'default')
  .join('|');

const valueMatcher = new RegExp(`^(${_num_})(${_unit_})?$`);

const length = {
  value(v) {
    const match = `${v}`.match(valueMatcher);

    if (match === null) {
      throw new Error('Incrorrect value');
    }

    return `${match[1]}${units[match[2]] || units.default}`;
  },

  decorator(target, key, descriptor) {
    const fn = descriptor.value;
    descriptor.value = v => fn(length.value(v));
    descriptor.value.matcher = new RegExp(`^(${key})(${_num_}(?:${_unit_})?)$`);
  },
};

export default length;
