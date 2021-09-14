import React, { useState, useEffect, PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { List, Modal, Icon, Tabs } from 'antd-mobile';

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

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".PositionSelect_modal__16-ff .am-modal-content .am-modal-close {\n  top: 8px;\n  right: 10px;\n}\n.PositionSelect_modal__16-ff .am-modal-content .am-modal-close .am-modal-close-x {\n  width: 14px;\n  height: 14px;\n}\n.PositionSelect_modal__16-ff .am-modal-content .am-modal-header {\n  padding: 6px;\n}\n.PositionSelect_modal__16-ff .am-modal-content .am-modal-header .am-modal-title {\n  font-size: 0.9rem;\n  color: #333;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe {\n  height: 30rem;\n  background: #efeff4;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj {\n  display: flex;\n  justify-content: flex-start;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .PositionSelect_dotDiv__1nCei {\n  width: 40px;\n  height: 44px;\n  background-color: #fff;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .PositionSelect_dotDiv__1nCei .PositionSelect_lineUp__2WlF9 {\n  width: 1px;\n  height: 18px;\n  position: relative;\n  left: 19px;\n  top: 1px;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .PositionSelect_dotDiv__1nCei .PositionSelect_dot__2xhfF {\n  position: relative;\n  top: 0;\n  left: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .PositionSelect_dotDiv__1nCei .PositionSelect_lineDown__3OBGD {\n  width: 1px;\n  height: 17px;\n  position: relative;\n  left: 19px;\n  top: 0;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .am-list-item {\n  width: calc(100% - 40px);\n  padding-left: 0;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_itemDiv__3pzAj .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n  color: #333;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_addressChildren__2dSHF .am-list {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_addressChildren__2dSHF .am-list .am-list-body {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_addressChildren__2dSHF .am-list .am-list-body .am-list-item {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_addressChildren__2dSHF .am-list .am-list-body .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n  color: #333;\n}\n.PositionSelect_modal__16-ff .PositionSelect_modalDiv__1RLLe .PositionSelect_addressChildren__2dSHF .am-list .am-list-body::after {\n  height: 0;\n}\n.PositionSelect_selectItem__KYD-R {\n  color: #fa8c16;\n}\n";
var styles = {"modal":"PositionSelect_modal__16-ff","modalDiv":"PositionSelect_modalDiv__1RLLe","itemDiv":"PositionSelect_itemDiv__3pzAj","dotDiv":"PositionSelect_dotDiv__1nCei","lineUp":"PositionSelect_lineUp__2WlF9","dot":"PositionSelect_dot__2xhfF","lineDown":"PositionSelect_lineDown__3OBGD","addressChildren":"PositionSelect_addressChildren__2dSHF","selectItem":"PositionSelect_selectItem__KYD-R"};
styleInject(css_248z);

// export const ADDRESS_CHOSE = '#1B84FF'; // 位置选择

var ADDRESS_FREE = '#fff'; // 位置未选择

var ADDRESS_DISABLED = '#9F9F9F'; // 位置置灰

var Item = List.Item;

var PositionSelect = function PositionSelect(_ref) {
  var spaceTree = _ref.spaceTree,
      showPositionSelect = _ref.showPositionSelect,
      onClose = _ref.onClose,
      title = _ref.title,
      selectTip = _ref.selectTip,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue,
      selectColor = _ref.selectColor,
      selectFilter = _ref.selectFilter,
      primaryColor = _ref.primaryColor;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      choseList = _useState2[0],
      setChoseList = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      selectList = _useState4[0],
      setSelectList = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      childrenMap = _useState6[0],
      setChildrenMap = _useState6[1];

  var _useState7 = useState(undefined),
      _useState8 = _slicedToArray(_useState7, 2),
      selectItem = _useState8[0],
      setSelectItem = _useState8[1];
  /**
   *  处理初始化数据
   */


  useEffect(function () {
    if (spaceTree.length === 0) {
      return;
    }

    var data = spaceTree;

    try {
      var _loop = function _loop(i) {
        var tmp = defaultValue[i];
        var parent = data.find(function (v) {
          return v.id === tmp.parentId;
        });

        if (!parent && tmp.parentId === 0) {
          childrenMap[tmp.parentId] = data;
        } else {
          childrenMap[tmp.parentId] = parent.children;
          data = parent.children;
        }

        if (i === defaultValue.length - 1) {
          setSelectItem(tmp);
          setSelectList(parent.children);
        }
      };

      for (var i = 0; i < defaultValue.length; i++) {
        _loop(i);
      }

      setChildrenMap(childrenMap);
      setChoseList(defaultValue);
    } catch (e) {
      console.error("PositionSelect defaultValue error.");
    }
  }, [defaultValue, spaceTree]);
  /**
   *  处理初始化数据
   */

  useEffect(function () {
    if (!showPositionSelect) {
      setChoseList([]);
      setSelectList(undefined);
      setChildrenMap({});
      setSelectItem(undefined);
    }
  }, [showPositionSelect]);
  /**
   *
   * @param v
   * @returns {*}
   */

  var makeItem = function makeItem(v) {
    return /*#__PURE__*/React.createElement(Item, {
      key: v.id,
      onClick: function onClick() {
        handleItemClick(v);
      }
    }, (!selectItem || v.id !== selectItem.id) && v.name, selectItem && v.id === selectItem.id && /*#__PURE__*/React.createElement("span", {
      style: {
        color: selectColor
      }
    }, v.name));
  };
  /**
   *
   * @param v
   */


  var handleItemClick = function handleItemClick(v) {
    var tmp = childrenMap[v.parentId];

    if (tmp) {
      setSelectList(tmp);
      setSelectItem(v);
    }
  };
  /**
   *
   * @param choseList
   * @returns {*}
   */


  var makeChose = function makeChose(choseList) {
    return /*#__PURE__*/React.createElement("div", null, choseList.map(function (v, index) {
      if (index === choseList.length - 1 && !_.isEmpty(v.children)) {
        return /*#__PURE__*/React.createElement("div", {
          key: v.id
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.itemDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.dotDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.lineUp,
          style: index !== 0 ? {
            backgroundColor: primaryColor
          } : {}
        }), /*#__PURE__*/React.createElement("div", {
          className: styles.dot,
          style: {
            backgroundColor: primaryColor,
            border: "1px solid ".concat(primaryColor)
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: styles.lineDown,
          style: {
            backgroundColor: primaryColor
          }
        })), makeItem(v)), /*#__PURE__*/React.createElement("div", {
          className: styles.itemDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.dotDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.lineUp,
          style: {
            backgroundColor: primaryColor
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: styles.dot,
          style: {
            backgroundColor: ADDRESS_FREE,
            border: "1px solid ".concat(primaryColor)
          }
        })), /*#__PURE__*/React.createElement(Item, {
          key: "lastDot"
        }, selectTip)));
      }

      return /*#__PURE__*/React.createElement("div", {
        key: v.id,
        className: styles.itemDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.dotDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.lineUp,
        style: index !== 0 ? {
          backgroundColor: primaryColor
        } : {}
      }), /*#__PURE__*/React.createElement("div", {
        className: styles.dot,
        style: {
          backgroundColor: primaryColor,
          border: "1px solid ".concat(primaryColor)
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: styles.lineDown,
        style: !_.isEmpty(v.children) ? {
          backgroundColor: primaryColor
        } : {}
      })), makeItem(v));
    }), choseList.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: styles.itemDiv
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.dotDiv
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.lineUp
    }), /*#__PURE__*/React.createElement("div", {
      className: styles.dot,
      style: {
        backgroundColor: ADDRESS_FREE,
        border: "1px solid ".concat(primaryColor)
      }
    })), /*#__PURE__*/React.createElement(Item, {
      key: "lastDot"
    }, selectTip)));
  };
  /**
   *
   * @param v
   * @param selectList
   */


  var handleSelect = function handleSelect(v, selectList) {
    var tmp = Array.from(choseList);

    if (selectItem) {
      var index = choseList.findIndex(function (item) {
        return item.id === selectItem.id;
      });
      tmp = tmp.slice(0, index);
    }

    tmp.push(v);
    childrenMap[v.id] = selectList;
    setChildrenMap(childrenMap);
    setChoseList(tmp);
    setSelectList(selectList);
    setSelectItem(undefined);

    if (selectList.length === 0) {
      onChange(tmp);
    }
  };
  /**
   *
   * @param selectList
   * @returns {*}
   */


  var makeSelect = function makeSelect(selectList) {
    var list = selectList;

    if (!selectList) {
      list = spaceTree;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: styles.addressChildren
    }, /*#__PURE__*/React.createElement(List, null, list.map(function (v) {
      var disabled = false;

      if (selectFilter) {
        disabled = selectFilter(v);
      }

      return disabled ? '' : /*#__PURE__*/React.createElement(Item, {
        key: v.id,
        disabled: disabled,
        onClick: function onClick() {
          handleSelect(v, v.children);
        },
        extra: selectItem && v.id === selectItem.id ? /*#__PURE__*/React.createElement(Icon, {
          type: "check"
        }) : ''
      }, /*#__PURE__*/React.createElement("span", {
        style: disabled ? {
          color: ADDRESS_DISABLED
        } : {}
      }, v.name));
    })));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    popup: true,
    closable: true,
    title: title,
    visible: showPositionSelect,
    className: styles.modal,
    onClose: onClose,
    animationType: "slide-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modalDiv
  }, makeChose(choseList), makeSelect(selectList)));
};

PositionSelect.propTypes = {
  spaceTree: PropTypes.array.isRequired,
  // 空间数据
  showPositionSelect: PropTypes.bool.isRequired,
  // 是否显示
  onClose: PropTypes.func,
  // 关闭回调
  onChange: PropTypes.func.isRequired,
  // 数据变化后回调
  title: PropTypes.string,
  // title
  selectTip: PropTypes.string,
  // 提示
  defaultValue: PropTypes.array,
  // 默认值
  selectColor: PropTypes.string,
  // 选中颜色
  selectFilter: PropTypes.func,
  // 选择列表过滤
  primaryColor: PropTypes.string // 主色

};
PositionSelect.defaultProps = {
  title: '请选择',
  selectTip: '请选择',
  onClose: function onClose() {},
  defaultValue: [],
  showPositionSelect: false,
  selectColor: '#FA8C16',
  primaryColor: '#1B84FF'
};

var css_248z$1 = ".Position_modalDiv__20Xp8 {\n  height: 30rem;\n  background: #efeff4;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH {\n  display: flex;\n  justify-content: flex-start;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .Position_dotDiv__1lTj3 {\n  width: 40px;\n  height: 44px;\n  background-color: #fff;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .Position_dotDiv__1lTj3 .Position_lineUp__1oVWh {\n  width: 1px;\n  height: 18px;\n  position: relative;\n  left: 19px;\n  top: 1px;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .Position_dotDiv__1lTj3 .Position_dot__3WhH- {\n  position: relative;\n  top: 0;\n  left: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .Position_dotDiv__1lTj3 .Position_lineDown__3K7Tr {\n  width: 1px;\n  height: 17px;\n  position: relative;\n  left: 19px;\n  top: 0;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .am-list-item {\n  width: calc(100% - 40px);\n  padding-left: 0;\n}\n.Position_modalDiv__20Xp8 .Position_itemDiv__QJ9mH .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n  color: #333;\n}\n.Position_modalDiv__20Xp8 .Position_addressChildren__1Ga6b .am-list {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.Position_modalDiv__20Xp8 .Position_addressChildren__1Ga6b .am-list .am-list-body {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.Position_modalDiv__20Xp8 .Position_addressChildren__1Ga6b .am-list .am-list-body .am-list-item {\n  border-bottom: none;\n  background-color: #efeff4;\n}\n.Position_modalDiv__20Xp8 .Position_addressChildren__1Ga6b .am-list .am-list-body .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n  color: #333;\n}\n.Position_modalDiv__20Xp8 .Position_addressChildren__1Ga6b .am-list .am-list-body::after {\n  height: 0;\n}\n.Position_selectItem__13nqb {\n  color: #fa8c16;\n}\n";
var styles$1 = {"modalDiv":"Position_modalDiv__20Xp8","itemDiv":"Position_itemDiv__QJ9mH","dotDiv":"Position_dotDiv__1lTj3","lineUp":"Position_lineUp__1oVWh","dot":"Position_dot__3WhH-","lineDown":"Position_lineDown__3K7Tr","addressChildren":"Position_addressChildren__1Ga6b","selectItem":"Position_selectItem__13nqb"};
styleInject(css_248z$1);

// export const ADDRESS_CHOSE = '#1B84FF'; // 位置选择

var ADDRESS_FREE$1 = '#fff'; // 位置未选择

var ADDRESS_DISABLED$1 = '#9F9F9F'; // 位置置灰

var Item$1 = List.Item;

var Position = function Position(_ref) {
  var spaceTree = _ref.spaceTree,
      showPositionSelect = _ref.showPositionSelect,
      selectTip = _ref.selectTip,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue,
      selectColor = _ref.selectColor,
      selectFilter = _ref.selectFilter,
      primaryColor = _ref.primaryColor;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      choseList = _useState2[0],
      setChoseList = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      selectList = _useState4[0],
      setSelectList = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      childrenMap = _useState6[0],
      setChildrenMap = _useState6[1];

  var _useState7 = useState(undefined),
      _useState8 = _slicedToArray(_useState7, 2),
      selectItem = _useState8[0],
      setSelectItem = _useState8[1];
  /**
   *  处理初始化数据
   */


  useEffect(function () {
    if (spaceTree.length === 0) {
      return;
    }

    var data = spaceTree;

    try {
      var _loop = function _loop(i) {
        var tmp = defaultValue[i];
        var parent = data.find(function (v) {
          return v.id === tmp.parentId;
        });

        if (!parent && tmp.parentId === 0) {
          childrenMap[tmp.parentId] = data;
        } else {
          childrenMap[tmp.parentId] = parent.children;
          data = parent.children;
        }

        if (i === defaultValue.length - 1) {
          setSelectItem(tmp);
          setSelectList(parent.children);
        }
      };

      for (var i = 0; i < defaultValue.length; i++) {
        _loop(i);
      }

      setChildrenMap(childrenMap);
      setChoseList(defaultValue);
    } catch (e) {
      console.error("PositionSelect defaultValue error.");
    }
  }, [defaultValue, spaceTree]);
  /**
   *  处理初始化数据
   */

  useEffect(function () {
    if (!showPositionSelect) {
      setChoseList([]);
      setSelectList(undefined);
      setChildrenMap({});
      setSelectItem(undefined);
    }
  }, [showPositionSelect]);
  /**
   *
   * @param v
   * @returns {*}
   */

  var makeItem = function makeItem(v) {
    return /*#__PURE__*/React.createElement(Item$1, {
      key: v.id,
      onClick: function onClick() {
        handleItemClick(v);
      }
    }, (!selectItem || v.id !== selectItem.id) && v.name, selectItem && v.id === selectItem.id && /*#__PURE__*/React.createElement("span", {
      style: {
        color: selectColor
      }
    }, v.name));
  };
  /**
   *
   * @param v
   */


  var handleItemClick = function handleItemClick(v) {
    var tmp = childrenMap[v.parentId];

    if (tmp) {
      setSelectList(tmp);
      setSelectItem(v);
    }
  };
  /**
   *
   * @param choseList
   * @returns {*}
   */


  var makeChose = function makeChose(choseList) {
    return /*#__PURE__*/React.createElement("div", null, choseList.map(function (v, index) {
      if (index === choseList.length - 1 && !_.isEmpty(v.children)) {
        return /*#__PURE__*/React.createElement("div", {
          key: v.id
        }, /*#__PURE__*/React.createElement("div", {
          className: styles$1.itemDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles$1.dotDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles$1.lineUp,
          style: index !== 0 ? {
            backgroundColor: primaryColor
          } : {}
        }), /*#__PURE__*/React.createElement("div", {
          className: styles$1.dot,
          style: {
            backgroundColor: primaryColor,
            border: "1px solid ".concat(primaryColor)
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: styles$1.lineDown,
          style: {
            backgroundColor: primaryColor
          }
        })), makeItem(v)), /*#__PURE__*/React.createElement("div", {
          className: styles$1.itemDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles$1.dotDiv
        }, /*#__PURE__*/React.createElement("div", {
          className: styles$1.lineUp,
          style: {
            backgroundColor: primaryColor
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: styles$1.dot,
          style: {
            backgroundColor: ADDRESS_FREE$1,
            border: "1px solid ".concat(primaryColor)
          }
        })), /*#__PURE__*/React.createElement(Item$1, {
          key: "lastDot"
        }, selectTip)));
      }

      return /*#__PURE__*/React.createElement("div", {
        key: v.id,
        className: styles$1.itemDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$1.dotDiv
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$1.lineUp,
        style: index !== 0 ? {
          backgroundColor: primaryColor
        } : {}
      }), /*#__PURE__*/React.createElement("div", {
        className: styles$1.dot,
        style: {
          backgroundColor: primaryColor,
          border: "1px solid ".concat(primaryColor)
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: styles$1.lineDown,
        style: !_.isEmpty(v.children) ? {
          backgroundColor: primaryColor
        } : {}
      })), makeItem(v));
    }), choseList.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: styles$1.itemDiv
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$1.dotDiv
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$1.lineUp
    }), /*#__PURE__*/React.createElement("div", {
      className: styles$1.dot,
      style: {
        backgroundColor: ADDRESS_FREE$1,
        border: "1px solid ".concat(primaryColor)
      }
    })), /*#__PURE__*/React.createElement(Item$1, {
      key: "lastDot"
    }, selectTip)));
  };
  /**
   *
   * @param v
   * @param selectList
   */


  var handleSelect = function handleSelect(v, selectList) {
    var tmp = Array.from(choseList);

    if (selectItem) {
      var index = choseList.findIndex(function (item) {
        return item.id === selectItem.id;
      });
      tmp = tmp.slice(0, index);
    }

    tmp.push(v);
    childrenMap[v.id] = selectList;
    setChildrenMap(childrenMap);
    setChoseList(tmp);
    setSelectList(selectList);
    setSelectItem(undefined);

    if (selectList.length === 0) {
      onChange(tmp);
    }
  };
  /**
   *
   * @param selectList
   * @returns {*}
   */


  var makeSelect = function makeSelect(selectList) {
    var list = selectList;

    if (!selectList) {
      list = spaceTree;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: styles$1.addressChildren
    }, /*#__PURE__*/React.createElement(List, null, list.map(function (v) {
      var disabled = false;

      if (selectFilter) {
        disabled = selectFilter(v);
      }

      return disabled ? '' : /*#__PURE__*/React.createElement(Item$1, {
        key: v.id,
        disabled: disabled,
        onClick: function onClick() {
          handleSelect(v, v.children);
        },
        extra: selectItem && v.id === selectItem.id ? /*#__PURE__*/React.createElement(Icon, {
          type: "check"
        }) : ''
      }, /*#__PURE__*/React.createElement("span", {
        style: disabled ? {
          color: ADDRESS_DISABLED$1
        } : {}
      }, v.name));
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.modalDiv
  }, makeChose(choseList), makeSelect(selectList));
};

Position.propTypes = {
  spaceTree: PropTypes.array.isRequired,
  // 空间数据
  showPositionSelect: PropTypes.bool.isRequired,
  // 是否显示
  onClose: PropTypes.func,
  // 关闭回调
  onChange: PropTypes.func.isRequired,
  // 数据变化后回调
  title: PropTypes.string,
  // title
  selectTip: PropTypes.string,
  // 提示
  defaultValue: PropTypes.array,
  // 默认值
  selectColor: PropTypes.string,
  // 选中颜色
  selectFilter: PropTypes.func,
  // 选择列表过滤
  primaryColor: PropTypes.string // 主色

};
Position.defaultProps = {
  title: '请选择',
  selectTip: '请选择',
  onClose: function onClose() {},
  defaultValue: [],
  showPositionSelect: false,
  selectColor: '#FA8C16',
  primaryColor: '#1B84FF'
};

var css_248z$2 = ".PosModel_modal__dxLbX .am-modal-content .am-modal-close {\n  top: 8px;\n  right: 10px;\n}\n.PosModel_modal__dxLbX .am-modal-content .am-modal-close .am-modal-close-x {\n  width: 14px;\n  height: 14px;\n}\n.PosModel_modal__dxLbX .am-modal-content .am-modal-header {\n  padding: 6px;\n}\n.PosModel_modal__dxLbX .am-modal-content .am-modal-header .am-modal-title {\n  font-size: 0.9rem;\n  color: #333;\n}\n";
var styles$2 = {"modal":"PosModel_modal__dxLbX"};
styleInject(css_248z$2);

var PosModel = /*#__PURE__*/function (_PureComponent) {
  _inherits(PosModel, _PureComponent);

  var _super = _createSuper(PosModel);

  function PosModel() {
    _classCallCheck(this, PosModel);

    return _super.apply(this, arguments);
  }

  _createClass(PosModel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          showPositionSelect = _this$props.showPositionSelect,
          onClose = _this$props.onClose,
          spaceTree = _this$props.spaceTree,
          spaceTree1 = _this$props.spaceTree1,
          selectTip = _this$props.selectTip,
          defaultValue = _this$props.defaultValue,
          defaultValue1 = _this$props.defaultValue1,
          selectColor = _this$props.selectColor,
          selectFilter = _this$props.selectFilter,
          tabs = _this$props.tabs,
          onChange = _this$props.onChange,
          onChange1 = _this$props.onChange1,
          primaryColor = _this$props.primaryColor;
      return /*#__PURE__*/React.createElement(Modal, {
        popup: true,
        closable: true,
        title: title,
        visible: showPositionSelect,
        className: styles$2.modal,
        onClose: onClose,
        animationType: "slide-up"
      }, spaceTree1 && spaceTree1.length > 0 ? /*#__PURE__*/React.createElement(Tabs, {
        tabs: tabs
      }, /*#__PURE__*/React.createElement(Position, {
        spaceTree: spaceTree,
        selectTip: selectTip,
        defaultValue: defaultValue,
        selectColor: selectColor,
        selectFilter: selectFilter,
        onChange: onChange,
        primaryColor: primaryColor
      }), /*#__PURE__*/React.createElement(Position, {
        spaceTree: spaceTree1,
        selectTip: selectTip,
        defaultValue: defaultValue1,
        selectColor: selectColor,
        selectFilter: selectFilter,
        onChange: onChange1,
        primaryColor: primaryColor
      })) : /*#__PURE__*/React.createElement(Position, {
        spaceTree: spaceTree,
        selectTip: selectTip,
        defaultValue: defaultValue,
        selectColor: selectColor,
        selectFilter: selectFilter,
        onChange: onChange,
        primaryColor: primaryColor
      }));
    }
  }]);

  return PosModel;
}(PureComponent);

PosModel.propTypes = {
  spaceTree: PropTypes.array.isRequired,
  // 空间数据
  spaceTree1: PropTypes.array.isRequired,
  // 空间数据
  tabs: PropTypes.array.isRequired,
  showPositionSelect: PropTypes.bool.isRequired,
  // 是否显示
  onClose: PropTypes.func,
  // 关闭回调
  onChange: PropTypes.func.isRequired,
  // 数据变化后回调
  onChange1: PropTypes.func.isRequired,
  // 数据变化后回调
  title: PropTypes.string,
  // title
  selectTip: PropTypes.string,
  // 提示
  defaultValue: PropTypes.array,
  // 默认值
  defaultValue1: PropTypes.array,
  // 默认值1
  selectColor: PropTypes.string,
  // 选中颜色
  selectFilter: PropTypes.func,
  // 选择列表过滤
  primaryColor: PropTypes.string // 主色

};
PosModel.defaultProps = {
  title: '请选择',
  selectTip: '请选择',
  tabs: [{
    title: '内部区域',
    sub: '1'
  }, {
    title: '共享区域',
    sub: '2'
  }],
  onClose: function onClose() {},
  defaultValue: [],
  showPositionSelect: false,
  selectColor: '#FA8C16',
  primaryColor: '#1B84FF'
};

export { PosModel, PositionSelect };
//# sourceMappingURL=index.es.js.map
