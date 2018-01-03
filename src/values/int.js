const int = {
  value(v) {
    const n = +v;

    if (isNaN(n) || n % 1 !== 0) {
      throw new Error('Incrorrect value');
    }

    return '' + v;
  },

  decorator(target, key, descriptor) {
    const fn = descriptor.value;
    descriptor.value = v => fn(int.value(v));
    descriptor.value.matcher = new RegExp(`^(${key})(-?\\d+)$`);
  },
};

export default int;
