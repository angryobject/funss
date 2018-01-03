import createStyleElement from './create_style_element';

class StyleSheet {
  constructor() {
    this.style = createStyleElement();
    this.sheet = this.style.sheet;
    this.index = {};
  }

  addRule(selector, rules) {
    if (this.index[selector] != null) {
      const existingRule = this.sheet.cssRules[this.index[selector]];
      existingRule.style.cssText += rules;
    } else {
      this.index[selector] = this.sheet.insertRule(
        selector + '{' + rules + '}',
        this.sheet.cssRules.length
      );
    }
  }

  removeRule(selector) {
    if (!this.index[selector]) {
      return;
    }

    this.sheet.deleteRule(this.index[selector]);
    delete this.index[selector];
  }

  destroy() {
    this.style.parentNode.removeChild(this.style);
  }
}

export default function createStyleSheet() {
  return new StyleSheet();
}
