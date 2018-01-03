import StyleSheet from './style_sheet/index';
import generator from './generator';

export default function funss() {
  const styleSheet = new StyleSheet();

  function addMultipleClassNames(className) {
    className.split(/\s/).forEach(addSingleClassName);
  }

  function addSingleClassName(className) {
    if (!generator.isValidClassName(className)) return;
    styleSheet.addRule(`.${className}`, generator.generateCSS(className));
  }

  function parse(target) {
    [].slice
      .call(target.querySelectorAll('[class]'))
      .forEach(node => addMultipleClassNames(node.className));
  }

  function observe(target) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          addMultipleClassNames(m.target.getAttribute('class'));
        }
      });
    });

    observer.observe(target, {
      attributes: true,
      subtree: true,
    });

    return observer;
  }

  return {
    styleSheet,
    parse,
    observe,
    addClassName: addMultipleClassNames,
  };
}
