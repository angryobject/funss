import createStyleElement from './create_style_element';

const last = arr => arr[arr.length - 1];

test('adds a style elemnt to <head> and returns it', () => {
  const style = createStyleElement();
  expect(last(document.head.children)).toBe(style);
});

test('adds media attribute if specified', () => {
  const media = '(min-width: 600px)';
  createStyleElement(media);
  expect(last(document.head.children).media).toBe(media);
});
