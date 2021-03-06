function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
import omit from 'omit.js';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import Wave from '../_util/wave';
import { ConfigContext } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';
import warning from '../_util/warning';
var Switch = React.forwardRef(function (props, ref) {
  var _classNames;

  warning('checked' in props || !('value' in props), 'Switch', '`value` is not a valid prop, do you mean `checked`?');
  var customizePrefixCls = props.prefixCls,
      customizeSize = props.size,
      loading = props.loading,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      disabled = props.disabled;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(SizeContext);
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = loading ? /*#__PURE__*/React.createElement(LoadingOutlined, {
    className: "".concat(prefixCls, "-loading-icon")
  }) : null;
  var classes = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/React.createElement(Wave, {
    insertExtraNode: true
  }, /*#__PURE__*/React.createElement(RcSwitch, _extends({}, omit(props, ['loading']), {
    prefixCls: prefixCls,
    className: classes,
    disabled: disabled || loading,
    ref: ref,
    loadingIcon: loadingIcon
  })));
});
Switch.__ANT_SWITCH = true;
export default Switch;