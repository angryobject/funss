import functions from './functions';

const shallowMatcher = new RegExp(
  '^(' +
    Object.keys(functions)
      .sort((a, b) => b.length - a.length)
      .join('|') +
    ')(.+)$'
);

function keyMatch(className) {
  const match = className.match(shallowMatcher);
  if (match === null) return null;
  return match[1];
}

function valueMatch(className, key) {
  const match = className.match(functions[key].matcher);
  if (match === null) return null;
  return match[2];
}

export default {
  generateCSS(className) {
    const key = keyMatch(className);

    if (!key) return null;

    const value = valueMatch(className, key);

    if (!value) return null;

    return functions[key](value);
  },
};
