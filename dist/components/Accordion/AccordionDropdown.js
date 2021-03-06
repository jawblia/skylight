"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./Accordion.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccordionDropdown = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion__list ".concat(props.className),
    style: props.style
  }, props.children);
};

AccordionDropdown.propTypes = {
  /** Custom classname */
  className: _propTypes.PropTypes.string,

  /** Custom styles */
  style: _propTypes.PropTypes.object
};
var _default = AccordionDropdown;
exports.default = _default;