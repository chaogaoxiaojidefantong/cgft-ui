"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ScrollNumber = _interopRequireDefault(require("./ScrollNumber"));

var _colors = require("../_util/colors");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function isPresetColor(color) {
  return _colors.PresetColorTypes.indexOf(color) !== -1;
}

var Badge = function Badge(props) {
  var getNumberedDisplayCount = function getNumberedDisplayCount() {
    var count = props.count,
        overflowCount = props.overflowCount;
    var displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
    return displayCount;
  };

  var hasStatus = function hasStatus() {
    var status = props.status,
        color = props.color;
    return !!status || !!color;
  };

  var isZero = function isZero() {
    var numberedDisplayCount = getNumberedDisplayCount();
    return numberedDisplayCount === '0' || numberedDisplayCount === 0;
  };

  var isDot = function isDot() {
    var dot = props.dot;
    return dot && !isZero() || hasStatus();
  };

  var getDisplayCount = function getDisplayCount() {
    // dot mode don't need count
    if (isDot()) {
      return '';
    }

    return getNumberedDisplayCount();
  };

  var getScrollNumberTitle = function getScrollNumberTitle() {
    var title = props.title,
        count = props.count;

    if (title) {
      return title;
    }

    return typeof count === 'string' || typeof count === 'number' ? count : undefined;
  };

  var getStyleWithOffset = function getStyleWithOffset() {
    var offset = props.offset,
        style = props.style;
    return offset ? _extends({
      right: -parseInt(offset[0], 10),
      marginTop: offset[1]
    }, style) : style;
  };

  var getBadgeClassName = function getBadgeClassName(prefixCls) {
    var _classNames;

    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';
    var className = props.className,
        children = props.children;
    return (0, _classnames["default"])(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-status"), hasStatus()), _defineProperty(_classNames, "".concat(prefixCls, "-not-a-wrapper"), !children), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
  };

  var isHidden = function isHidden() {
    var showZero = props.showZero;
    var displayCount = getDisplayCount();
    var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
    return (isEmpty || isZero() && !showZero) && !isDot();
  };

  var renderStatusText = function renderStatusText(prefixCls) {
    var text = props.text;
    var hidden = isHidden();
    return hidden || !text ? null : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-status-text")
    }, text);
  };

  var renderDisplayComponent = function renderDisplayComponent() {
    var count = props.count;
    var customNode = count;

    if (!customNode || _typeof(customNode) !== 'object') {
      return undefined;
    }

    return React.cloneElement(customNode, {
      style: _extends(_extends({}, getStyleWithOffset()), customNode.props && customNode.props.style)
    });
  };

  var renderBadgeNumber = function renderBadgeNumber(prefixCls, scrollNumberPrefixCls) {
    var _classNames2;

    var status = props.status,
        count = props.count,
        color = props.color;
    var displayCount = getDisplayCount();
    var dot = isDot();
    var hidden = isHidden();
    var scrollNumberCls = (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-dot"), dot), _defineProperty(_classNames2, "".concat(prefixCls, "-count"), !dot), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple-words"), !dot && count && count.toString && count.toString().length > 1), _defineProperty(_classNames2, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames2, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames2));
    var statusStyle = getStyleWithOffset();

    if (color && !isPresetColor(color)) {
      statusStyle = statusStyle || {};
      statusStyle.background = color;
    }

    return hidden ? null : /*#__PURE__*/React.createElement(_ScrollNumber["default"], {
      prefixCls: scrollNumberPrefixCls,
      "data-show": !hidden,
      className: scrollNumberCls,
      count: displayCount,
      displayComponent: renderDisplayComponent() // <Badge status="success" count={<Icon type="xxx" />}></Badge>
      ,
      title: getScrollNumberTitle(),
      style: statusStyle,
      key: "scrollNumber"
    });
  };

  var renderBadge = function renderBadge(_ref) {
    var _classNames3;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        customizeScrollNumberPrefixCls = props.scrollNumberPrefixCls,
        children = props.children,
        status = props.status,
        text = props.text,
        color = props.color,
        restProps = __rest(props, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color"]);

    var omitArr = ['count', 'showZero', 'overflowCount', 'className', 'style', 'dot', 'offset', 'title'];
    var prefixCls = getPrefixCls('badge', customizePrefixCls);
    var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    var scrollNumber = renderBadgeNumber(prefixCls, scrollNumberPrefixCls);
    var statusText = renderStatusText(prefixCls);
    var statusCls = (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-status-dot"), hasStatus()), _defineProperty(_classNames3, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames3, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames3));
    var statusStyle = {};

    if (color && !isPresetColor(color)) {
      statusStyle.background = color;
    } // <Badge status="success" />


    if (!children && hasStatus()) {
      var styleWithOffset = getStyleWithOffset();
      var statusTextColor = styleWithOffset && styleWithOffset.color;
      return /*#__PURE__*/React.createElement("span", _extends({}, (0, _omit["default"])(restProps, omitArr), {
        className: getBadgeClassName(prefixCls, direction),
        style: styleWithOffset
      }), /*#__PURE__*/React.createElement("span", {
        className: statusCls,
        style: statusStyle
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: statusTextColor
        },
        className: "".concat(prefixCls, "-status-text")
      }, text));
    }

    return /*#__PURE__*/React.createElement("span", _extends({}, (0, _omit["default"])(restProps, omitArr), {
      className: getBadgeClassName(prefixCls, direction)
    }), children, /*#__PURE__*/React.createElement(_rcAnimate["default"], {
      component: "",
      showProp: "data-show",
      transitionName: children ? "".concat(prefixCls, "-zoom") : '',
      transitionAppear: true
    }, scrollNumber), statusText);
  };

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderBadge);
};

Badge.defaultProps = {
  count: null,
  showZero: false,
  dot: false,
  overflowCount: 99
};
var _default = Badge;
exports["default"] = _default;