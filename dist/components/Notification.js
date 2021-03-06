"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./layout/Flex"));

var _Blur = _interopRequireDefault(require("./atoms/Blur"));

const _excluded = ["message"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Notification = _ref => {
  let {
    message
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "notification ".concat(!props.read ? 'notification--unread' : ''),
    onClick: props.handleClick
  }, !props.read ? /*#__PURE__*/_react.default.createElement(_Blur.default, {
    bg: 'var(--accent2)'
  }) : /*#__PURE__*/_react.default.createElement(_Blur.default, {
    bg: ""
  }), /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true
  }, /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("h6", {
    className: "light"
  }, props.time)));
};

var _default = Notification;
exports.default = _default;