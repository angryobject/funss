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



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
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

/* Decorators */

function lengthDecorator(opts) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    descriptor.value = function (v) {
      return fn(lengthValue(v, opts.defaultLengthUnit));
    };
  };
}

/* Values */

function lengthValue(v) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (!isNaN(v)) {
    return '' + v + defaultUnit;
  }

  var units = {
    p: '%',
    e: 'em',
    x: 'ex'
  };

  var _v$match = v.match(/(-?\d+(?:.\d+)?)(\w+)?/),
      _v$match2 = slicedToArray(_v$match, 3),
      n = _v$match2[1],
      u = _v$match2[2];

  return units[u] ? '' + n + units[u] : v;
}

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

var options = {
  defaultLengthUnit: 'px'
};

var functions = (_dec = lengthDecorator(options), _dec2 = lengthDecorator(options), _dec3 = lengthDecorator(options), _dec4 = lengthDecorator(options), _dec5 = lengthDecorator(options), _dec6 = lengthDecorator(options), _dec7 = lengthDecorator(options), _dec8 = lengthDecorator(options), _dec9 = lengthDecorator(options), _dec10 = lengthDecorator(options), _dec11 = lengthDecorator(options), _dec12 = lengthDecorator(options), _dec13 = lengthDecorator(options), _dec14 = lengthDecorator(options), _dec15 = lengthDecorator(options), _dec16 = lengthDecorator(options), _dec17 = lengthDecorator(options), _dec18 = lengthDecorator(options), _dec19 = lengthDecorator(options), _dec20 = lengthDecorator(options), _dec21 = lengthDecorator(options), _dec22 = lengthDecorator(options), _dec23 = lengthDecorator(options), _dec24 = lengthDecorator(options), _obj = {
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


  /* Z-INDEX */
  z: function z(v) {
    return 'z-index: ' + v + ';';
  }
}, _applyDecoratedDescriptor(_obj, 'm', [_dec], Object.getOwnPropertyDescriptor(_obj, 'm'), _obj), _applyDecoratedDescriptor(_obj, 'mx', [_dec2], Object.getOwnPropertyDescriptor(_obj, 'mx'), _obj), _applyDecoratedDescriptor(_obj, 'my', [_dec3], Object.getOwnPropertyDescriptor(_obj, 'my'), _obj), _applyDecoratedDescriptor(_obj, 'ml', [_dec4], Object.getOwnPropertyDescriptor(_obj, 'ml'), _obj), _applyDecoratedDescriptor(_obj, 'mr', [_dec5], Object.getOwnPropertyDescriptor(_obj, 'mr'), _obj), _applyDecoratedDescriptor(_obj, 'mt', [_dec6], Object.getOwnPropertyDescriptor(_obj, 'mt'), _obj), _applyDecoratedDescriptor(_obj, 'mb', [_dec7], Object.getOwnPropertyDescriptor(_obj, 'mb'), _obj), _applyDecoratedDescriptor(_obj, 'p', [_dec8], Object.getOwnPropertyDescriptor(_obj, 'p'), _obj), _applyDecoratedDescriptor(_obj, 'px', [_dec9], Object.getOwnPropertyDescriptor(_obj, 'px'), _obj), _applyDecoratedDescriptor(_obj, 'py', [_dec10], Object.getOwnPropertyDescriptor(_obj, 'py'), _obj), _applyDecoratedDescriptor(_obj, 'pl', [_dec11], Object.getOwnPropertyDescriptor(_obj, 'pl'), _obj), _applyDecoratedDescriptor(_obj, 'pr', [_dec12], Object.getOwnPropertyDescriptor(_obj, 'pr'), _obj), _applyDecoratedDescriptor(_obj, 'pt', [_dec13], Object.getOwnPropertyDescriptor(_obj, 'pt'), _obj), _applyDecoratedDescriptor(_obj, 'pb', [_dec14], Object.getOwnPropertyDescriptor(_obj, 'pb'), _obj), _applyDecoratedDescriptor(_obj, 'l', [_dec15], Object.getOwnPropertyDescriptor(_obj, 'l'), _obj), _applyDecoratedDescriptor(_obj, 'r', [_dec16], Object.getOwnPropertyDescriptor(_obj, 'r'), _obj), _applyDecoratedDescriptor(_obj, 't', [_dec17], Object.getOwnPropertyDescriptor(_obj, 't'), _obj), _applyDecoratedDescriptor(_obj, 'b', [_dec18], Object.getOwnPropertyDescriptor(_obj, 'b'), _obj), _applyDecoratedDescriptor(_obj, 'w', [_dec19], Object.getOwnPropertyDescriptor(_obj, 'w'), _obj), _applyDecoratedDescriptor(_obj, 'h', [_dec20], Object.getOwnPropertyDescriptor(_obj, 'h'), _obj), _applyDecoratedDescriptor(_obj, 'maw', [_dec21], Object.getOwnPropertyDescriptor(_obj, 'maw'), _obj), _applyDecoratedDescriptor(_obj, 'mah', [_dec22], Object.getOwnPropertyDescriptor(_obj, 'mah'), _obj), _applyDecoratedDescriptor(_obj, 'miw', [_dec23], Object.getOwnPropertyDescriptor(_obj, 'miw'), _obj), _applyDecoratedDescriptor(_obj, 'mih', [_dec24], Object.getOwnPropertyDescriptor(_obj, 'mih'), _obj), _obj);

var matcher = new RegExp('^(' + Object.keys(functions).sort(function (a, b) {
  return b.length - a.length;
}).join('|') + ')(.+)');

var generator = {
  isValidClassName: function isValidClassName(className) {
    return matcher.test(className);
  },
  generateCSS: function generateCSS(className) {
    var _className$match = className.match(matcher),
        _className$match2 = slicedToArray(_className$match, 3),
        name = _className$match2[1],
        value = _className$match2[2];

    return functions[name](value);
  }
};

function funss() {
  var styleSheet = new createStyleSheet();

  function addMultipleClassNames(className) {
    className.split(/\s/).forEach(addSingleClassName);
  }

  function addSingleClassName(className) {
    if (!generator.isValidClassName(className)) return;
    styleSheet.addRule('.' + className, generator.generateCSS(className));
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
