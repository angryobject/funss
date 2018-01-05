import lengthValue from './length';
import intValue from './int';

function createDecorator(value) {
  return (target, key, descriptor) => {
    const fn = descriptor.value;
    descriptor.value = v => {
      v = value(v);
      if (v === null) return null;
      return fn(v);
    };
  };
}

const length = createDecorator(lengthValue);
const int = createDecorator(intValue);

export { length, int };
