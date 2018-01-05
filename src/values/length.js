const units = {
  p: '%',
  e: 'em',
  x: 'ex',
  r: 'rem',
  default: 'px',
};

const _number_ = '-?\\d+(?:.\\d+)?';
const _unit_ = Object.keys(units)
  .filter(k => k !== 'default')
  .join('|');

const matcher = new RegExp(`^(${_number_})(${_unit_})?$`);

export default function length(v) {
  const match = `${v}`.match(matcher);

  if (match === null) {
    return null;
  }

  return `${match[1]}${units[match[2]] || units.default}`;
}
