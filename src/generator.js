import functions from './functions';

const matcher = new RegExp(
  '^(' +
    Object.keys(functions)
      .sort((a, b) => b.length - a.length)
      .join('|') +
    ')(.+)'
);

export default {
  isValidClassName(className) {
    return matcher.test(className);
  },

  generateCSS(className) {
    const [, name, value] = className.match(matcher);
    return functions[name](value);
  },
};
