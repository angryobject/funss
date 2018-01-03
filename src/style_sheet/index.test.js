import createStyleSheet from './index';

beforeAll(() => {
  document.body.innerHTML = `<h1 class="one two" /><span />`;
});

beforeEach(() => {
  // remove all style elements
  document.head.childNodes.forEach(
    node => node.nodeName === 'STYLE' && node.remove()
  );
});

test('adds style element to head on creation', () => {
  createStyleSheet();
  expect(document.querySelectorAll('style').length).toBe(1);
});

test('removes style element from head on destruction', () => {
  const ss = createStyleSheet();
  ss.destroy();
  expect(document.querySelectorAll('style').length).toBe(0);
});

test('basic rules', () => {
  const ss = createStyleSheet();

  ss.addRule('h1', 'font-weight: normal; font-size: 99px');
  ss.addRule('span', 'font-weight: bold; font-style: italic');

  const h1 = window.getComputedStyle(document.querySelector('h1'));
  const span = window.getComputedStyle(document.querySelector('span'));

  expect(h1.fontWeight).toBe('normal');
  expect(h1.fontSize).toBe('99px');
  expect(span.fontWeight).toBe('bold');
  expect(span.fontStyle).toBe('italic');
});

test('rules precedence', () => {
  const ss = createStyleSheet();

  ss.addRule('.one', 'font-weight: normal; font-size: 99px');
  ss.addRule('.two', 'font-weight: bold; font-style: italic');

  const h1 = window.getComputedStyle(document.querySelector('h1'));

  expect(h1.fontWeight).toBe('bold');
  expect(h1.fontSize).toBe('99px');
  expect(h1.fontStyle).toBe('italic');
});

test('rules for same selector', () => {
  const ss = createStyleSheet();

  ss.addRule('h1', 'font-weight: 800; font-size: 99px');
  ss.addRule('h1', 'font-weight: 700; font-style: italic');

  const h1 = window.getComputedStyle(document.querySelector('h1'));

  expect(h1.fontWeight).toBe('700');
  expect(h1.fontSize).toBe('99px');
  expect(h1.fontStyle).toBe('italic');
});
