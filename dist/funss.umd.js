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

var _num_any_ = '-?\\d+(?:.\\d+)?';
var _num_positive_ = '\\d+(?:.\\d+)?';
var _unit_ = Object.keys(units).filter(function (k) {
  return k !== 'default';
}).join('|');

var valueMatcher = new RegExp('^(' + _num_any_ + ')(' + _unit_ + ')?$');

var length$1 = {
  value: function value(v) {
    var match = ('' + v).match(valueMatcher);

    if (match === null) {
      throw new Error('Incrorrect value');
    }

    return '' + match[1] + (units[match[2]] || units.default);
  },
  decorator: function decorator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (target, key, descriptor) {
      var fn = descriptor.value;
      descriptor.value = function (v) {
        return fn(length$1.value(v));
      };

      if (opts.positive) {
        descriptor.value.matcher = new RegExp('^(' + key + ')(' + _num_positive_ + '(?:' + _unit_ + ')?)$');
      } else {
        descriptor.value.matcher = new RegExp('^(' + key + ')(' + _num_any_ + '(?:' + _unit_ + ')?)$');
      }
    };
  }
};

var int$1 = {
  value: function value(v) {
    var n = +v;

    if (isNaN(n) || n % 1 !== 0) {
      throw new Error('Incrorrect value');
    }

    return '' + v;
  },
  decorator: function decorator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (target, key, descriptor) {
      var fn = descriptor.value;
      descriptor.value = function (v) {
        return fn(int$1.value(v));
      };

      if (opts.positive) {
        descriptor.value.matcher = new RegExp('^(' + key + ')(\\d+)$');
      } else {
        descriptor.value.matcher = new RegExp('^(' + key + ')(-?\\d+)$');
      }
    };
  }
};

var length = length$1.decorator;
var int = int$1.decorator;

var _dec;
var _dec2;
var _dec3;
var _dec4;
var _dec5;
var _dec6;
var _dec7;
var _dec8;
var _dec9;
var _dec10;
var _dec11;
var _dec12;
var _dec13;
var _dec14;
var _dec15;
var _dec16;
var _dec17;
var _dec18;
var _dec19;
var _dec20;
var _dec21;
var _dec22;
var _dec23;
var _dec24;
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

var functions = (_dec = length(), _dec2 = length(), _dec3 = length(), _dec4 = length(), _dec5 = length(), _dec6 = length(), _dec7 = length(), _dec8 = length(), _dec9 = length(), _dec10 = length(), _dec11 = length(), _dec12 = length(), _dec13 = length(), _dec14 = length(), _dec15 = length(), _dec16 = length(), _dec17 = length(), _dec18 = length(), _dec19 = length({ positive: true }), _dec20 = length({ positive: true }), _dec21 = length({ positive: true }), _dec22 = length({ positive: true }), _dec23 = length({ positive: true }), _dec24 = length({ positive: true }), _obj = {
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
}, _applyDecoratedDescriptor(_obj, 'm', [_dec], Object.getOwnPropertyDescriptor(_obj, 'm'), _obj), _applyDecoratedDescriptor(_obj, 'mx', [_dec2], Object.getOwnPropertyDescriptor(_obj, 'mx'), _obj), _applyDecoratedDescriptor(_obj, 'my', [_dec3], Object.getOwnPropertyDescriptor(_obj, 'my'), _obj), _applyDecoratedDescriptor(_obj, 'ml', [_dec4], Object.getOwnPropertyDescriptor(_obj, 'ml'), _obj), _applyDecoratedDescriptor(_obj, 'mr', [_dec5], Object.getOwnPropertyDescriptor(_obj, 'mr'), _obj), _applyDecoratedDescriptor(_obj, 'mt', [_dec6], Object.getOwnPropertyDescriptor(_obj, 'mt'), _obj), _applyDecoratedDescriptor(_obj, 'mb', [_dec7], Object.getOwnPropertyDescriptor(_obj, 'mb'), _obj), _applyDecoratedDescriptor(_obj, 'p', [_dec8], Object.getOwnPropertyDescriptor(_obj, 'p'), _obj), _applyDecoratedDescriptor(_obj, 'px', [_dec9], Object.getOwnPropertyDescriptor(_obj, 'px'), _obj), _applyDecoratedDescriptor(_obj, 'py', [_dec10], Object.getOwnPropertyDescriptor(_obj, 'py'), _obj), _applyDecoratedDescriptor(_obj, 'pl', [_dec11], Object.getOwnPropertyDescriptor(_obj, 'pl'), _obj), _applyDecoratedDescriptor(_obj, 'pr', [_dec12], Object.getOwnPropertyDescriptor(_obj, 'pr'), _obj), _applyDecoratedDescriptor(_obj, 'pt', [_dec13], Object.getOwnPropertyDescriptor(_obj, 'pt'), _obj), _applyDecoratedDescriptor(_obj, 'pb', [_dec14], Object.getOwnPropertyDescriptor(_obj, 'pb'), _obj), _applyDecoratedDescriptor(_obj, 'l', [_dec15], Object.getOwnPropertyDescriptor(_obj, 'l'), _obj), _applyDecoratedDescriptor(_obj, 'r', [_dec16], Object.getOwnPropertyDescriptor(_obj, 'r'), _obj), _applyDecoratedDescriptor(_obj, 't', [_dec17], Object.getOwnPropertyDescriptor(_obj, 't'), _obj), _applyDecoratedDescriptor(_obj, 'b', [_dec18], Object.getOwnPropertyDescriptor(_obj, 'b'), _obj), _applyDecoratedDescriptor(_obj, 'w', [_dec19], Object.getOwnPropertyDescriptor(_obj, 'w'), _obj), _applyDecoratedDescriptor(_obj, 'h', [_dec20], Object.getOwnPropertyDescriptor(_obj, 'h'), _obj), _applyDecoratedDescriptor(_obj, 'maw', [_dec21], Object.getOwnPropertyDescriptor(_obj, 'maw'), _obj), _applyDecoratedDescriptor(_obj, 'mah', [_dec22], Object.getOwnPropertyDescriptor(_obj, 'mah'), _obj), _applyDecoratedDescriptor(_obj, 'miw', [_dec23], Object.getOwnPropertyDescriptor(_obj, 'miw'), _obj), _applyDecoratedDescriptor(_obj, 'mih', [_dec24], Object.getOwnPropertyDescriptor(_obj, 'mih'), _obj), _applyDecoratedDescriptor(_obj, 'z', [int], Object.getOwnPropertyDescriptor(_obj, 'z'), _obj), _obj);

var keyMatcher = new RegExp('^(' + Object.keys(functions).sort(function (a, b) {
  return b.length - a.length;
}).join('|') + ')(.+)$');

function keyMatch(className) {
  var match = className.match(keyMatcher);
  if (match === null) return null;
  return match[1];
}

function valueMatch(className, key) {
  var match = className.match(functions[key].matcher);
  if (match === null) return null;
  return match[2];
}

var generator = {
  generateCSS: function generateCSS(className) {
    var key = keyMatch(className);

    if (!key) return null;

    var value = valueMatch(className, key);

    if (!value) return null;

    return functions[key](value);
  }
};

function funss() {
  var styleSheet = new createStyleSheet();

  function addMultipleClassNames(className) {
    className.split(/\s/).forEach(addSingleClassName);
  }

  function addSingleClassName(className) {
    var css = generator.generateCSS(className);

    if (css !== null) {
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
