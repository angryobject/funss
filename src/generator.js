import functions from './functions';

const matcher = new RegExp(
  '^(' +
    Object.keys(functions)
      .sort((a, b) => b.length - a.length)
      .join('|') +
    ')(.+)$'
);

export default {
  generateCSS(className) {
    const match = className.match(matcher);

    if (match === null) return null;

    return functions[match[1]](match[2]);
  },
};
