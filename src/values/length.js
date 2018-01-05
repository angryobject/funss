const units = {
  p: '%',
  e: 'em',
  x: 'ex',
  r: 'rem',
  default: 'px',
};

const _num_any_ = '-?\\d+(?:.\\d+)?';
const _num_positive_ = '\\d+(?:.\\d+)?';
const _unit_ = Object.keys(units)
  .filter(k => k !== 'default')
  .join('|');

const valueMatcher = new RegExp(`^(${_num_any_})(${_unit_})?$`);

const length = {
  value(v) {
    const match = `${v}`.match(valueMatcher);

    if (match === null) {
      throw new Error('Incrorrect value');
    }

    return `${match[1]}${units[match[2]] || units.default}`;
  },

  decorator(opts = {}) {
    return (target, key, descriptor) => {
      const fn = descriptor.value;
      descriptor.value = v => fn(length.value(v));

      if (opts.positive) {
        descriptor.value.matcher = new RegExp(
          `^(${key})(${_num_positive_}(?:${_unit_})?)$`
        );
      } else {
        descriptor.value.matcher = new RegExp(
          `^(${key})(${_num_any_}(?:${_unit_})?)$`
        );
      }
    };
  },
};

export default length;
