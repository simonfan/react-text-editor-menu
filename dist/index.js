'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classnames = _interopDefault(require('classnames'));
var reactDom = require('react-dom');
var insertCss = _interopDefault(require('insert-css'));

var menuStyles = ".text-editor-menu {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n";

var menuButtonStyles = ".text-editor__menu-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 30px;\n\n  padding: 4px;\n  border: 0;\n  margin: 0 1px;\n  background-color: white;\n  color: rgba(0, 0, 0, 0.5);\n\n  cursor: pointer;\n\n  border-radius: 2px;\n\n  outline: none;\n}\n\n.text-editor__menu-button:disabled {\n  opacity: .2;\n}\n\n.text-editor__menu-button:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.text-editor__menu-button:active,\n.text-editor__menu-button.active {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.9);\n}\n\n/**\n * Icon\n */\n.text-editor__menu-button.text-editor__menu-button--icon {\n  width: 30px;\n}\n\n.text-editor__menu-button.text-editor__menu-button--icon > svg {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.text-editor__menu-button.text-editor__menu-button--icon:hover > svg {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.text-editor__menu-button.text-editor__menu-button--icon.active > svg {\n  color: rgba(0, 0, 0, 0.9);\n}\n";

var menuGroupStyles = ".text-editor__menu-group {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\tpadding: 0 3px;\n}\n\n.text-editor__menu-group:first-of-type {\n\tpadding-left: 0;\n}\n\n.text-editor__menu-group:last-of-type {\n\tpadding-right: 0;\n}\n";

var menuSelectStyles = ".text-editor__menu-select {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n\n  display: flex;\n\n  border-radius: 2px;\n}\n\n.text-editor__menu-select > .text-editor__menu-select__selected {\n  display: flex;\n  align-items: center;\n\n  user-select: none;\n\n  padding: 0 10px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.text-editor__menu-select > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  position: absolute;\n  z-index: 100;\n  top: 100%;\n  left: -1px;\n\n  display: none;\n  /*display: flex;*/\n  flex-direction: column;\n\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: white;\n}\n\n.text-editor__menu-select.open > ul {\n  display: flex;\n}\n\n.text-editor__menu-select > ul > li {\n  padding: 4px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  white-space: nowrap;\n\n  display: flex;\n  align-items: center;\n\n  min-height: 30px;\n}\n\n.text-editor__menu-select > ul > li:first-child {\n  padding-top: 6px;\n}\n\n.text-editor__menu-select > ul > li:last-child {\n  padding-bottom: 6px;\n}\n\n.text-editor__menu-select > ul > li:hover:not(.disabled) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.text-editor__menu-select > ul > li.disabled {\n  opacity: 0.6;\n}\n\n.text-editor__menu-select > ul > li > * {\n  margin: 0;\n  white-space: nowrap;\n}\n";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var renderLabel = function renderLabel(label) {
  return typeof label === 'function' ? label() : label;
};

var MenuButton = function MenuButton(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      enabled = _ref.enabled,
      active = _ref.active,
      _onMouseDown = _ref.onMouseDown,
      style = _ref.style,
      className = _ref.className;
  return React.createElement("button", {
    className: classnames({
      'text-editor__menu-button': true,
      'text-editor__menu-button--icon': icon ? true : false,
      active: active,
      enabled: enabled
    }),
    style: style,
    disabled: !enabled,
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();

      _onMouseDown();
    }
  }, icon ? renderLabel(icon) : renderLabel(label));
};

MenuButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  enabled: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired
};

var MenuSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuSelect, _React$Component);

  function MenuSelect(props) {
    var _this;

    _classCallCheck(this, MenuSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuSelect).call(this, props));
    _this.state = {
      open: props.open || false
    };
    _this.mounted = false;
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MenuSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      if (this.mounted) {
        if (!reactDom.findDOMNode(this).contains(event.target)) {
          if (this.state.open) {
            this.setState({
              open: false
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          value = _this$props.value,
          onChange = _this$props.onChange,
          style = _this$props.style;
      var selected = options.find(function (option) {
        return option.value === value;
      }) || false;
      var open = this.state.open;
      return React.createElement("div", {
        className: classnames({
          'text-editor__menu-select': true,
          open: open
        }),
        style: style
      }, React.createElement("div", {
        className: "text-editor__menu-select__selected",
        onClick: function onClick() {
          _this2.setState({
            open: !open
          });
        }
      }, selected ? selected.label : ''), React.createElement("ul", null, options.map(function (option) {
        return React.createElement("li", {
          onClick: function onClick() {
            if (option.value !== selected.value) {
              onChange(option.value, selected.value);
            }

            _this2.setState({
              open: false
            });
          },
          key: option.value
        }, renderLabel(option.preview));
      })));
    }
  }]);

  return MenuSelect;
}(React.Component);

MenuSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

var MenuGroup = function MenuGroup(_ref) {
  var items = _ref.items,
      style = _ref.style;
  return React.createElement("div", {
    className: "text-editor__menu-group",
    style: style
  }, items.map(function (item) {
    switch (item.type) {
      case 'button':
        return React.createElement(MenuButton, _extends({}, item, {
          key: item.name,
          active: false,
          onMouseDown: item.command
        }));

      case 'toggle':
        return React.createElement(MenuButton, _extends({}, item, {
          key: item.name,
          active: item.value,
          onMouseDown: function onMouseDown() {
            item.command(!item.value);
          }
        }));

      case 'select':
        return React.createElement(MenuSelect, _extends({}, item, {
          key: item.name,
          onChange: item.command
        }));

      default:
        console.warn("MenuGroup: unrecognized item type: '".concat(item.type, "'"));
    }
  }));
};

MenuGroup.propTypes = {
  items: PropTypes.array.isRequired
};

var Menu = function Menu(_ref) {
  var groups = _ref.groups,
      style = _ref.style;
  return React.createElement("div", {
    className: "text-editor-menu",
    style: style
  }, groups.map(function (group) {
    return React.createElement(MenuGroup, {
      key: group.name,
      items: group.items
    });
  }));
};

Menu.propTypes = {
  groups: PropTypes.array.isRequired
};

insertCss([menuStyles, menuButtonStyles, menuGroupStyles, menuSelectStyles].join('\n'));

exports.Menu = Menu;
exports.MenuButton = MenuButton;
exports.MenuGroup = MenuGroup;
exports.MenuSelect = MenuSelect;
