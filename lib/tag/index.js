"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

var _CheckableTag = _interopRequireDefault(require("./CheckableTag"));

var _configProvider = require("../config-provider");

var _colors = require("../_util/colors");

var _wave = _interopRequireDefault(require("../_util/wave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));

var InternalTag = function InternalTag(props, ref) {
  var configProps = React.useContext(_configProvider.ConfigContext);

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    var color = props.color;

    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var getTagStyle = function getTagStyle() {
    var color = props.color,
        style = props.style;
    return _extends({
      backgroundColor: color && !isPresetColor() ? color : undefined
    }, style);
  };

  var getTagClassName = function getTagClassName(_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        color = props.color;
    var presetColor = isPresetColor();
    var prefixCls = getPrefixCls('tag', customizePrefixCls);
    return (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), _defineProperty(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), _defineProperty(_classNames, "".concat(prefixCls, "-hidden"), !visible), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  };

  var handleIconClick = function handleIconClick(e) {
    e.stopPropagation();
    var onClose = props.onClose;

    if (onClose) {
      onClose(e);
    }

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    var closable = props.closable;
    return closable ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
      onClick: handleIconClick
    }) : null;
  };

  var children = props.children,
      icon = props.icon,
      otherProps = __rest(props, ["children", "icon"]);

  var isNeedWave = 'onClick' in otherProps || children && children.type === 'a';
  var tagProps = (0, _omit["default"])(otherProps, ['onClose', 'color', 'visible', 'closable', 'prefixCls']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  return isNeedWave ? /*#__PURE__*/React.createElement(_wave["default"], null, /*#__PURE__*/React.createElement("span", _extends({}, tagProps, {
    ref: ref,
    className: getTagClassName(configProps),
    style: getTagStyle()
  }), kids, renderCloseIcon())) : /*#__PURE__*/React.createElement("span", _extends({}, tagProps, {
    ref: ref,
    className: getTagClassName(configProps),
    style: getTagStyle()
  }), kids, renderCloseIcon());
};

var Tag = React.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.defaultProps = {
  closable: false
};
Tag.CheckableTag = _CheckableTag["default"];
var _default = Tag;
exports["default"] = _default;