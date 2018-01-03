/* Decorators */

export function lengthDecorator(opts) {
  return (target, key, descriptor) => {
    const fn = descriptor.value;
    descriptor.value = v => fn(lengthValue(v, opts.defaultLengthUnit));
  };
}

/* Values */

export function lengthValue(v, defaultUnit = 'px') {
  if (!isNaN(v)) {
    return `${v}${defaultUnit}`;
  }

  const units = {
    p: '%',
    e: 'em',
    x: 'ex',
  };

  const [, n, u] = v.match(/(-?\d+(?:.\d+)?)(\w+)?/);

  return units[u] ? `${n}${units[u]}` : v;
}
