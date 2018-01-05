const int = {
  value(v) {
    const n = +v;

    if (isNaN(n) || n % 1 !== 0) {
      throw new Error('Incrorrect value');
    }

    return '' + v;
  },

  decorator(opts = {}) {
    return (target, key, descriptor) => {
      const fn = descriptor.value;
      descriptor.value = v => fn(int.value(v));

      if (opts.positive) {
        descriptor.value.matcher = new RegExp(`^(${key})(\\d+)$`);
      } else {
        descriptor.value.matcher = new RegExp(`^(${key})(-?\\d+)$`);
      }
    };
  },
};

export default int;
