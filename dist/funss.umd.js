(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.funss = factory());
}(this, (function () { 'use strict';

// thanks to https://davidwalsh.name/add-rules-stylesheets
function createStyleElement(media) {
  var style = document.createElement('style');

  if (media) {
    style.setAttribute('media', media);
  }

  // WebKit hack :(
  style.appendChild(document.createTextNode(''));

  document.head.appendChild(style);

  return style;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var StyleSheet = function () {
  function StyleSheet() {
    classCallCheck(this, StyleSheet);

    this.style = createStyleElement();
    this.sheet = this.style.sheet;
    this.index = {};
  }

  createClass(StyleSheet, [{
    key: 'addRule',
    value: function addRule(selector, rules) {
      if (this.index[selector] != null) {
        var existingRule = this.sheet.cssRules[this.index[selector]];
        existingRule.style.cssText += rules;
      } else {
        this.index[selector] = this.sheet.insertRule(selector + '{' + rules + '}', this.sheet.cssRules.length);
      }
    }
  }, {
    key: 'removeRule',
    value: function removeRule(selector) {
      if (!this.index[selector]) {
        return;
      }

      this.sheet.deleteRule(this.index[selector]);
      delete this.index[selector];
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.style.parentNode.removeChild(this.style);
    }
  }]);
  return StyleSheet;
}();

function createStyleSheet() {
  return new StyleSheet();
}

var units = {
  p: '%',
  e: 'em',
  x: 'ex',
  r: 'rem',
  default: 'px'
};

var _number_ = '-?\\d+(?:.\\d+)?';
var _unit_ = Object.keys(units).filter(function (k) {
  return k !== 'default';
}).join('|');

var matcher$1 = new RegExp('^(' + _number_ + ')(' + _unit_ + ')?$');

function length$1(v) {
  var match = ('' + v).match(matcher$1);

  if (match === null) {
    return null;
  }

  return '' + match[1] + (units[match[2]] || units.default);
}

function int$1(v) {
  var n = +v;

  if (isNaN(n) || n % 1 !== 0) {
    return null;
  }

  return '' + v;
}

function createDecorator(value) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    descriptor.value = function (v) {
      v = value(v);
      if (v === null) return null;
      return fn(v);
    };
  };
}

var length = createDecorator(length$1);
var int = createDecorator(int$1);

var _obj;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var functions = (_obj = {
  m: function m(v) {
    return 'margin: ' + v + ';';
  },
  mx: function mx(v) {
    return 'margin-left: ' + v + '; margin-right: ' + v + ';';
  },
  my: function my(v) {
    return 'margin-top: ' + v + '; margin-bottom: ' + v + ';';
  },
  ml: function ml(v) {
    return 'margin-left: ' + v + ';';
  },
  mr: function mr(v) {
    return 'margin-right: ' + v + ';';
  },
  mt: function mt(v) {
    return 'margin-top: ' + v + ';';
  },
  mb: function mb(v) {
    return 'margin-bottom: ' + v + ';';
  },
  p: function p(v) {
    return 'padding: ' + v + ';';
  },
  px: function px(v) {
    return 'padding-left: ' + v + '; padding-right: ' + v + ';';
  },
  py: function py(v) {
    return 'padding-top: ' + v + '; padding-bottom: ' + v + ';';
  },
  pl: function pl(v) {
    return 'padding-left: ' + v + ';';
  },
  pr: function pr(v) {
    return 'padding-right: ' + v + ';';
  },
  pt: function pt(v) {
    return 'padding-top: ' + v + ';';
  },
  pb: function pb(v) {
    return 'padding-bottom: ' + v + ';';
  },
  l: function l(v) {
    return 'left: ' + v + ';';
  },
  r: function r(v) {
    return 'right: ' + v + ';';
  },
  t: function t(v) {
    return 'top: ' + v + ';';
  },
  b: function b(v) {
    return 'bottom: ' + v + ';';
  },
  w: function w(v) {
    return 'width: ' + v + ';';
  },
  h: function h(v) {
    return 'height: ' + v + ';';
  },
  maw: function maw(v) {
    return 'max-width: ' + v + ';';
  },
  mah: function mah(v) {
    return 'max-height: ' + v + ';';
  },
  miw: function miw(v) {
    return 'min-width: ' + v + ';';
  },
  mih: function mih(v) {
    return 'min-height: ' + v + ';';
  },
  z: function z(v) {
    return 'z-index: ' + v + ';';
  }
}, _applyDecoratedDescriptor(_obj, 'm', [length], Object.getOwnPropertyDescriptor(_obj, 'm'), _obj), _applyDecoratedDescriptor(_obj, 'mx', [length], Object.getOwnPropertyDescriptor(_obj, 'mx'), _obj), _applyDecoratedDescriptor(_obj, 'my', [length], Object.getOwnPropertyDescriptor(_obj, 'my'), _obj), _applyDecoratedDescriptor(_obj, 'ml', [length], Object.getOwnPropertyDescriptor(_obj, 'ml'), _obj), _applyDecoratedDescriptor(_obj, 'mr', [length], Object.getOwnPropertyDescriptor(_obj, 'mr'), _obj), _applyDecoratedDescriptor(_obj, 'mt', [length], Object.getOwnPropertyDescriptor(_obj, 'mt'), _obj), _applyDecoratedDescriptor(_obj, 'mb', [length], Object.getOwnPropertyDescriptor(_obj, 'mb'), _obj), _applyDecoratedDescriptor(_obj, 'p', [length], Object.getOwnPropertyDescriptor(_obj, 'p'), _obj), _applyDecoratedDescriptor(_obj, 'px', [length], Object.getOwnPropertyDescriptor(_obj, 'px'), _obj), _applyDecoratedDescriptor(_obj, 'py', [length], Object.getOwnPropertyDescriptor(_obj, 'py'), _obj), _applyDecoratedDescriptor(_obj, 'pl', [length], Object.getOwnPropertyDescriptor(_obj, 'pl'), _obj), _applyDecoratedDescriptor(_obj, 'pr', [length], Object.getOwnPropertyDescriptor(_obj, 'pr'), _obj), _applyDecoratedDescriptor(_obj, 'pt', [length], Object.getOwnPropertyDescriptor(_obj, 'pt'), _obj), _applyDecoratedDescriptor(_obj, 'pb', [length], Object.getOwnPropertyDescriptor(_obj, 'pb'), _obj), _applyDecoratedDescriptor(_obj, 'l', [length], Object.getOwnPropertyDescriptor(_obj, 'l'), _obj), _applyDecoratedDescriptor(_obj, 'r', [length], Object.getOwnPropertyDescriptor(_obj, 'r'), _obj), _applyDecoratedDescriptor(_obj, 't', [length], Object.getOwnPropertyDescriptor(_obj, 't'), _obj), _applyDecoratedDescriptor(_obj, 'b', [length], Object.getOwnPropertyDescriptor(_obj, 'b'), _obj), _applyDecoratedDescriptor(_obj, 'w', [length], Object.getOwnPropertyDescriptor(_obj, 'w'), _obj), _applyDecoratedDescriptor(_obj, 'h', [length], Object.getOwnPropertyDescriptor(_obj, 'h'), _obj), _applyDecoratedDescriptor(_obj, 'maw', [length], Object.getOwnPropertyDescriptor(_obj, 'maw'), _obj), _applyDecoratedDescriptor(_obj, 'mah', [length], Object.getOwnPropertyDescriptor(_obj, 'mah'), _obj), _applyDecoratedDescriptor(_obj, 'miw', [length], Object.getOwnPropertyDescriptor(_obj, 'miw'), _obj), _applyDecoratedDescriptor(_obj, 'mih', [length], Object.getOwnPropertyDescriptor(_obj, 'mih'), _obj), _applyDecoratedDescriptor(_obj, 'z', [int], Object.getOwnPropertyDescriptor(_obj, 'z'), _obj), _obj);

var matcher = new RegExp('^(' + Object.keys(functions).sort(function (a, b) {
  return b.length - a.length;
}).join('|') + ')(.+)$');

var generator = {
  generateCSS: function generateCSS(className) {
    var match = className.match(matcher);

    if (match === null) return null;

    return functions[match[1]](match[2]);
  }
};

function funss() {
  var styleSheet = new createStyleSheet();

  function addMultipleClassNames(className) {
    className.split(/\s/).forEach(addSingleClassName);
  }

  function addSingleClassName(className) {
    var css = generator.generateCSS(className);

    if (css) {
      styleSheet.addRule('.' + className, css);
    }
  }

  function parse(target) {
    [].slice.call(target.querySelectorAll('[class]')).forEach(function (node) {
      return addMultipleClassNames(node.className);
    });
  }

  function observe(target) {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          addMultipleClassNames(m.target.getAttribute('class'));
        }
      });
    });

    observer.observe(target, {
      attributes: true,
      subtree: true
    });

    return observer;
  }

  return {
    styleSheet: styleSheet,
    parse: parse,
    observe: observe,
    addClassName: addMultipleClassNames
  };
}

return funss;

})));
