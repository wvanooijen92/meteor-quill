/*!
 * Quill Editor v1.0.0-beta.2
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["Quill"] = factory();
  else
    root["Quill"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _core = __webpack_require__(2);

  var _core2 = _interopRequireDefault(_core);

  var _align = __webpack_require__(47);

  var _direction = __webpack_require__(48);

  var _indent = __webpack_require__(49);

  var _blockquote = __webpack_require__(50);

  var _blockquote2 = _interopRequireDefault(_blockquote);

  var _header = __webpack_require__(51);

  var _header2 = _interopRequireDefault(_header);

  var _list = __webpack_require__(52);

  var _list2 = _interopRequireDefault(_list);

  var _background = __webpack_require__(53);

  var _color = __webpack_require__(54);

  var _font = __webpack_require__(55);

  var _size = __webpack_require__(56);

  var _bold = __webpack_require__(57);

  var _bold2 = _interopRequireDefault(_bold);

  var _italic = __webpack_require__(58);

  var _italic2 = _interopRequireDefault(_italic);

  var _link = __webpack_require__(59);

  var _link2 = _interopRequireDefault(_link);

  var _script = __webpack_require__(60);

  var _script2 = _interopRequireDefault(_script);

  var _strike = __webpack_require__(61);

  var _strike2 = _interopRequireDefault(_strike);

  var _underline = __webpack_require__(62);

  var _underline2 = _interopRequireDefault(_underline);

  var _formula = __webpack_require__(63);

  var _formula2 = _interopRequireDefault(_formula);

  var _image = __webpack_require__(64);

  var _image2 = _interopRequireDefault(_image);

  var _video = __webpack_require__(65);

  var _video2 = _interopRequireDefault(_video);

  var _code = __webpack_require__(66);

  var _imageTooltip = __webpack_require__(67);

  var _imageTooltip2 = _interopRequireDefault(_imageTooltip);

  var _linkTooltip = __webpack_require__(68);

  var _linkTooltip2 = _interopRequireDefault(_linkTooltip);

  var _syntax = __webpack_require__(70);

  var _syntax2 = _interopRequireDefault(_syntax);

  var _toolbar = __webpack_require__(71);

  var _toolbar2 = _interopRequireDefault(_toolbar);

  var _icons = __webpack_require__(72);

  var _icons2 = _interopRequireDefault(_icons);

  var _picker = __webpack_require__(100);

  var _picker2 = _interopRequireDefault(_picker);

  var _colorPicker = __webpack_require__(102);

  var _colorPicker2 = _interopRequireDefault(_colorPicker);

  var _iconPicker = __webpack_require__(103);

  var _iconPicker2 = _interopRequireDefault(_iconPicker);

  var _tooltip = __webpack_require__(69);

  var _tooltip2 = _interopRequireDefault(_tooltip);

  var _bubble = __webpack_require__(104);

  var _bubble2 = _interopRequireDefault(_bubble);

  var _snow = __webpack_require__(106);

  var _snow2 = _interopRequireDefault(_snow);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _core2.default.register({
    'formats/align': _align.AlignClass,
    'formats/direction': _direction.DirectionClass,
    'formats/indent': _indent.IndentClass,

    'formats/background': _background.BackgroundStyle,
    'formats/color': _color.ColorStyle,
    'formats/font': _font.FontClass,
    'formats/size': _size.SizeClass,

    'formats/blockquote': _blockquote2.default,
    'formats/code-block': _syntax.CodeBlock,
    'formats/header': _header2.default,
    'formats/list': _list2.default,

    'formats/bold': _bold2.default,
    'formats/code': _code.Code,
    'formats/italic': _italic2.default,
    'formats/link': _link2.default,
    'formats/script': _script2.default,
    'formats/strike': _strike2.default,
    'formats/underline': _underline2.default,

    'formats/formula': _formula2.default,
    'formats/image': _image2.default,
    'formats/video': _video2.default,

    'formats/code-block/token': _syntax.CodeToken,
    'formats/list/item': _list.ListItem,

    'modules/image-tooltip': _imageTooltip2.default,
    'modules/link-tooltip': _linkTooltip2.default,
    'modules/syntax': _syntax2.default,
    'modules/toolbar': _toolbar2.default,

    'themes/bubble': _bubble2.default,
    'themes/snow': _snow2.default,

    'ui/icons': _icons2.default,
    'ui/picker': _picker2.default,
    'ui/icon-picker': _iconPicker2.default,
    'ui/color-picker': _colorPicker2.default,
    'ui/tooltip': _tooltip2.default
  });

  module.exports = _core2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _quill = __webpack_require__(19);

  var _quill2 = _interopRequireDefault(_quill);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  var _break = __webpack_require__(33);

  var _break2 = _interopRequireDefault(_break);

  var _container = __webpack_require__(41);

  var _container2 = _interopRequireDefault(_container);

  var _cursor = __webpack_require__(42);

  var _cursor2 = _interopRequireDefault(_cursor);

  var _embed = __webpack_require__(34);

  var _embed2 = _interopRequireDefault(_embed);

  var _inline = __webpack_require__(35);

  var _inline2 = _interopRequireDefault(_inline);

  var _scroll = __webpack_require__(43);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _text = __webpack_require__(36);

  var _text2 = _interopRequireDefault(_text);

  var _clipboard = __webpack_require__(44);

  var _clipboard2 = _interopRequireDefault(_clipboard);

  var _history = __webpack_require__(45);

  var _history2 = _interopRequireDefault(_history);

  var _keyboard = __webpack_require__(46);

  var _keyboard2 = _interopRequireDefault(_keyboard);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _quill2.default.register({
    'blots/block': _block2.default,
    'blots/block/embed': _block.BlockEmbed,
    'blots/break': _break2.default,
    'blots/container': _container2.default,
    'blots/cursor': _cursor2.default,
    'blots/embed': _embed2.default,
    'blots/inline': _inline2.default,
    'blots/scroll': _scroll2.default,
    'blots/text': _text2.default,

    'modules/clipboard': _clipboard2.default,
    'modules/history': _history2.default,
    'modules/keyboard': _keyboard2.default
  });

  _parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

  exports.default = _quill2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var container_1 = __webpack_require__(4);
  var format_1 = __webpack_require__(8);
  var leaf_1 = __webpack_require__(13);
  var scroll_1 = __webpack_require__(14);
  var inline_1 = __webpack_require__(15);
  var block_1 = __webpack_require__(16);
  var embed_1 = __webpack_require__(17);
  var text_1 = __webpack_require__(18);
  var attributor_1 = __webpack_require__(9);
  var class_1 = __webpack_require__(11);
  var style_1 = __webpack_require__(12);
  var store_1 = __webpack_require__(10);
  var Registry = __webpack_require__(7);
  var Parchment = {
      Scope: Registry.Scope,
      create: Registry.create,
      find: Registry.find,
      query: Registry.query,
      register: Registry.register,
      Container: container_1.default,
      Format: format_1.default,
      Leaf: leaf_1.default,
      Embed: embed_1.default,
      Scroll: scroll_1.default,
      Block: block_1.default,
      Inline: inline_1.default,
      Text: text_1.default,
      Attributor: {
          Attribute: attributor_1.default,
          Class: class_1.default,
          Style: style_1.default,
          Store: store_1.default
      }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Parchment;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var linked_list_1 = __webpack_require__(5);
  var shadow_1 = __webpack_require__(6);
  var Registry = __webpack_require__(7);
  var ContainerBlot = (function (_super) {
      __extends(ContainerBlot, _super);
      function ContainerBlot() {
          _super.apply(this, arguments);
      }
      ContainerBlot.prototype.appendChild = function (other) {
          this.insertBefore(other);
      };
      ContainerBlot.prototype.attach = function () {
          var _this = this;
          _super.prototype.attach.call(this);
          this.children = new linked_list_1.default();
          // Need to be reversed for if DOM nodes already in order
          [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
              try {
                  var child = Registry.find(node) || Registry.create(node);
                  _this.insertBefore(child, _this.children.head);
              }
              catch (err) {
                  if (err instanceof Registry.ParchmentError)
                      return;
                  else
                      throw err;
              }
          });
      };
      ContainerBlot.prototype.deleteAt = function (index, length) {
          if (index === 0 && length === this.length()) {
              return this.remove();
          }
          this.children.forEachAt(index, length, function (child, offset, length) {
              child.deleteAt(offset, length);
          });
      };
      ContainerBlot.prototype.descendant = function (criteria, index) {
          var _a = this.children.find(index), child = _a[0], offset = _a[1];
          if ((criteria.blotName == null && criteria(child)) ||
              (criteria.blotName != null && child instanceof criteria)) {
              return [child, offset];
          }
          else if (child instanceof ContainerBlot) {
              return child.descendant(criteria, offset);
          }
          else {
              return [null, -1];
          }
      };
      ContainerBlot.prototype.descendants = function (criteria, index, length) {
          if (index === void 0) { index = 0; }
          if (length === void 0) { length = Number.MAX_VALUE; }
          var descendants = [], lengthLeft = length;
          this.children.forEachAt(index, length, function (child, index, length) {
              if ((criteria.blotName == null && criteria(child)) ||
                  (criteria.blotName != null && child instanceof criteria)) {
                  descendants.push(child);
              }
              if (child instanceof ContainerBlot) {
                  descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
              }
              lengthLeft -= length;
          });
          return descendants;
      };
      ContainerBlot.prototype.detach = function () {
          this.children.forEach(function (child) {
              child.detach();
          });
          _super.prototype.detach.call(this);
      };
      ContainerBlot.prototype.formatAt = function (index, length, name, value) {
          this.children.forEachAt(index, length, function (child, offset, length) {
              child.formatAt(offset, length, name, value);
          });
      };
      ContainerBlot.prototype.insertAt = function (index, value, def) {
          var _a = this.children.find(index), child = _a[0], offset = _a[1];
          if (child) {
              child.insertAt(offset, value, def);
          }
          else {
              var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
              this.appendChild(blot);
          }
      };
      ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
          if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
              return childBlot instanceof child;
          })) {
              throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
          }
          childBlot.insertInto(this, refBlot);
      };
      ContainerBlot.prototype.length = function () {
          return this.children.reduce(function (memo, child) {
              return memo + child.length();
          }, 0);
      };
      ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
          this.children.forEach(function (child) {
              targetParent.insertBefore(child, refNode);
          });
      };
      ContainerBlot.prototype.optimize = function () {
          _super.prototype.optimize.call(this);
          if (this.children.length === 0) {
              if (this.statics.defaultChild != null) {
                  var child = Registry.create(this.statics.defaultChild);
                  this.appendChild(child);
                  child.optimize();
              }
              else {
                  this.remove();
              }
          }
      };
      ContainerBlot.prototype.path = function (index, inclusive) {
          if (inclusive === void 0) { inclusive = false; }
          var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
          var position = [[this, index]];
          if (child instanceof ContainerBlot) {
              return position.concat(child.path(offset, inclusive));
          }
          else if (child != null) {
              position.push([child, offset]);
          }
          return position;
      };
      ContainerBlot.prototype.replace = function (target) {
          target.moveChildren(this);
          _super.prototype.replace.call(this, target);
      };
      ContainerBlot.prototype.split = function (index, force) {
          if (force === void 0) { force = false; }
          if (!force) {
              if (index === 0)
                  return this;
              if (index === this.length())
                  return this.next;
          }
          var after = this.clone();
          this.parent.insertBefore(after, this.next);
          this.children.forEachAt(index, this.length(), function (child, offset, length) {
              child = child.split(offset, force);
              after.appendChild(child);
          });
          return after;
      };
      ContainerBlot.prototype.unwrap = function () {
          this.moveChildren(this.parent, this.next);
          this.remove();
      };
      ContainerBlot.prototype.update = function (mutations) {
          var _this = this;
          var addedNodes = [], removedNodes = [];
          mutations.forEach(function (mutation) {
              if (mutation.target === _this.domNode && mutation.type === 'childList') {
                  addedNodes.push.apply(addedNodes, mutation.addedNodes);
                  removedNodes.push.apply(removedNodes, mutation.removedNodes);
              }
          });
          removedNodes.forEach(function (node) {
              var blot = Registry.find(node);
              if (blot == null || blot.domNode.parentNode === _this.domNode)
                  return;
              blot.detach();
          });
          addedNodes.sort(function (a, b) {
              if (a === b)
                  return 0;
              if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                  return -1;
              }
              return 1;
          });
          addedNodes.reverse().forEach(function (node) {
              if (node.parentNode !== _this.domNode)
                  return;
              var refBlot = null;
              if (node.nextSibling != null) {
                  refBlot = Registry.find(node.nextSibling);
              }
              var blot = Registry.find(node) || Registry.create(node);
              if (blot.next != refBlot || blot.next == null) {
                  if (blot.parent != null) {
                      blot.parent.children.remove(blot);
                  }
                  _this.insertBefore(blot, refBlot);
              }
          });
      };
      return ContainerBlot;
  }(shadow_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ContainerBlot;


/***/ },
/* 5 */
/***/ function(module, exports) {

  "use strict";
  var LinkedList = (function () {
      function LinkedList() {
          this.head = this.tail = undefined;
          this.length = 0;
      }
      LinkedList.prototype.append = function () {
          var nodes = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              nodes[_i - 0] = arguments[_i];
          }
          this.insertBefore(nodes[0], undefined);
          if (nodes.length > 1) {
              this.append.apply(this, nodes.slice(1));
          }
      };
      LinkedList.prototype.contains = function (node) {
          var cur, next = this.iterator();
          while (cur = next()) {
              if (cur === node)
                  return true;
          }
          return false;
      };
      LinkedList.prototype.insertBefore = function (node, refNode) {
          node.next = refNode;
          if (refNode != null) {
              node.prev = refNode.prev;
              if (refNode.prev != null) {
                  refNode.prev.next = node;
              }
              refNode.prev = node;
              if (refNode === this.head) {
                  this.head = node;
              }
          }
          else if (this.tail != null) {
              this.tail.next = node;
              node.prev = this.tail;
              this.tail = node;
          }
          else {
              node.prev = undefined;
              this.head = this.tail = node;
          }
          this.length += 1;
      };
      LinkedList.prototype.offset = function (target) {
          var index = 0, cur = this.head;
          while (cur != null) {
              if (cur === target)
                  return index;
              index += cur.length();
              cur = cur.next;
          }
          return -1;
      };
      LinkedList.prototype.remove = function (node) {
          if (!this.contains(node))
              return;
          if (node.prev != null)
              node.prev.next = node.next;
          if (node.next != null)
              node.next.prev = node.prev;
          if (node === this.head)
              this.head = node.next;
          if (node === this.tail)
              this.tail = node.prev;
          this.length -= 1;
      };
      LinkedList.prototype.iterator = function (curNode) {
          if (curNode === void 0) { curNode = this.head; }
          // TODO use yield when we can
          return function () {
              var ret = curNode;
              if (curNode != null)
                  curNode = curNode.next;
              return ret;
          };
      };
      LinkedList.prototype.find = function (index, inclusive) {
          if (inclusive === void 0) { inclusive = false; }
          var cur, next = this.iterator();
          while (cur = next()) {
              var length_1 = cur.length();
              if (index < length_1 || (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
                  return [cur, index];
              }
              index -= length_1;
          }
          return [null, 0];
      };
      LinkedList.prototype.forEach = function (callback) {
          var cur, next = this.iterator();
          while (cur = next()) {
              callback(cur);
          }
      };
      LinkedList.prototype.forEachAt = function (index, length, callback) {
          if (length <= 0)
              return;
          var _a = this.find(index), startNode = _a[0], offset = _a[1];
          var cur, curIndex = index - offset, next = this.iterator(startNode);
          while ((cur = next()) && curIndex < index + length) {
              var curLength = cur.length();
              if (index > curIndex) {
                  callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
              }
              else {
                  callback(cur, 0, Math.min(curLength, index + length - curIndex));
              }
              curIndex += curLength;
          }
      };
      LinkedList.prototype.map = function (callback) {
          return this.reduce(function (memo, cur) {
              memo.push(callback(cur));
              return memo;
          }, []);
      };
      LinkedList.prototype.reduce = function (callback, memo) {
          var cur, next = this.iterator();
          while (cur = next()) {
              memo = callback(memo, cur);
          }
          return memo;
      };
      return LinkedList;
  }());
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = LinkedList;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var Registry = __webpack_require__(7);
  var ShadowBlot = (function () {
      function ShadowBlot(domNode) {
          this.domNode = domNode;
          this.attach();
      }
      Object.defineProperty(ShadowBlot.prototype, "statics", {
          // Hack for accessing inherited static methods
          get: function () {
              var _this = this;
              return [
                  'blotName', 'className', 'scope', 'tagName',
                  'defaultChild', 'allowedChildren',
                  'create', 'formats', 'value'
              ].reduce(function (memo, key) {
                  var value = _this.constructor[key];
                  if (value != null) {
                      memo[key] = value;
                  }
                  return memo;
              }, {});
          },
          enumerable: true,
          configurable: true
      });
      ShadowBlot.create = function (value) {
          if (this.tagName == null) {
              throw new Registry.ParchmentError('Blot definition missing tagName');
          }
          var node;
          if (Array.isArray(this.tagName)) {
              if (typeof value === 'string') {
                  value = value.toUpperCase();
                  if (parseInt(value).toString() === value) {
                      value = parseInt(value);
                  }
              }
              if (typeof value === 'number') {
                  node = document.createElement(this.tagName[value - 1]);
              }
              else if (this.tagName.indexOf(value) > -1) {
                  node = document.createElement(value);
              }
              else {
                  node = document.createElement(this.tagName[0]);
              }
          }
          else {
              node = document.createElement(this.tagName);
          }
          if (this.className) {
              node.classList.add(this.className);
          }
          return node;
      };
      ShadowBlot.prototype.attach = function () {
          this.domNode[Registry.DATA_KEY] = { blot: this };
      };
      ShadowBlot.prototype.clone = function () {
          var domNode = this.domNode.cloneNode();
          return Registry.create(domNode);
      };
      ShadowBlot.prototype.detach = function () {
          if (this.parent != null)
              this.parent.children.remove(this);
          delete this.domNode[Registry.DATA_KEY];
      };
      ShadowBlot.prototype.deleteAt = function (index, length) {
          var blot = this.isolate(index, length);
          blot.remove();
      };
      ShadowBlot.prototype.formatAt = function (index, length, name, value) {
          var blot = this.isolate(index, length);
          if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
              blot.wrap(name, value);
          }
          else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
              var parent_1 = Registry.create(this.statics.scope);
              blot.wrap(parent_1);
              parent_1.format(name, value);
          }
      };
      ShadowBlot.prototype.insertAt = function (index, value, def) {
          var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
          var ref = this.split(index);
          this.parent.insertBefore(blot, ref);
      };
      ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
          if (this.parent != null) {
              this.parent.children.remove(this);
          }
          parentBlot.children.insertBefore(this, refBlot);
          if (refBlot != null) {
              var refDomNode = refBlot.domNode;
          }
          if (this.next == null || this.domNode.nextSibling != refDomNode) {
              parentBlot.domNode.insertBefore(this.domNode, refDomNode);
          }
          this.parent = parentBlot;
      };
      ShadowBlot.prototype.isolate = function (index, length) {
          var target = this.split(index);
          target.split(length);
          return target;
      };
      ShadowBlot.prototype.length = function () {
          return 1;
      };
      ;
      ShadowBlot.prototype.offset = function (root) {
          if (root === void 0) { root = this.parent; }
          if (this.parent == null || this == root)
              return 0;
          return this.parent.children.offset(this) + this.parent.offset(root);
      };
      ShadowBlot.prototype.optimize = function () {
          // TODO clean up once we use WeakMap
          if (this.domNode[Registry.DATA_KEY] != null) {
              delete this.domNode[Registry.DATA_KEY].mutations;
          }
      };
      ShadowBlot.prototype.remove = function () {
          if (this.domNode.parentNode != null) {
              this.domNode.parentNode.removeChild(this.domNode);
          }
          this.detach();
      };
      ShadowBlot.prototype.replace = function (target) {
          if (target.parent == null)
              return;
          target.parent.insertBefore(this, target.next);
          target.remove();
      };
      ShadowBlot.prototype.replaceWith = function (name, value) {
          var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
          replacement.replace(this);
          return replacement;
      };
      ShadowBlot.prototype.split = function (index, force) {
          return index === 0 ? this : this.next;
      };
      ShadowBlot.prototype.update = function (mutations) {
          if (mutations === void 0) { mutations = []; }
          // Nothing to do by default
      };
      ShadowBlot.prototype.wrap = function (name, value) {
          var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
          if (this.parent != null) {
              this.parent.insertBefore(wrapper, this.next);
          }
          wrapper.appendChild(this);
          return wrapper;
      };
      ShadowBlot.blotName = 'abstract';
      return ShadowBlot;
  }());
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ShadowBlot;


/***/ },
/* 7 */
/***/ function(module, exports) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ParchmentError = (function (_super) {
      __extends(ParchmentError, _super);
      function ParchmentError(message) {
          message = '[Parchment] ' + message;
          _super.call(this, message);
          this.message = message;
          this.name = this.constructor.name;
      }
      return ParchmentError;
  }(Error));
  exports.ParchmentError = ParchmentError;
  var attributes = {};
  var classes = {};
  var tags = {};
  var types = {};
  exports.DATA_KEY = '__blot';
  (function (Scope) {
      Scope[Scope["TYPE"] = 3] = "TYPE";
      Scope[Scope["LEVEL"] = 12] = "LEVEL";
      Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
      Scope[Scope["BLOT"] = 14] = "BLOT";
      Scope[Scope["INLINE"] = 7] = "INLINE";
      Scope[Scope["BLOCK"] = 11] = "BLOCK";
      Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
      Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
      Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
      Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
      Scope[Scope["ANY"] = 15] = "ANY";
  })(exports.Scope || (exports.Scope = {}));
  var Scope = exports.Scope;
  ;
  function create(input, value) {
      var match = query(input);
      if (match == null) {
          throw new ParchmentError("Unable to create " + input + " blot");
      }
      var BlotClass = match;
      var node = input instanceof Node ? input : BlotClass.create(value);
      return new BlotClass(node, value);
  }
  exports.create = create;
  function find(node, bubble) {
      if (bubble === void 0) { bubble = false; }
      if (node == null)
          return null;
      if (node[exports.DATA_KEY] != null)
          return node[exports.DATA_KEY].blot;
      if (bubble)
          return find(node.parentNode, bubble);
      return null;
  }
  exports.find = find;
  function query(query, scope) {
      if (scope === void 0) { scope = Scope.ANY; }
      var match;
      if (typeof query === 'string') {
          match = types[query] || attributes[query];
      }
      else if (query instanceof Text) {
          match = types['text'];
      }
      else if (typeof query === 'number') {
          if (query & Scope.LEVEL & Scope.BLOCK) {
              match = types['block'];
          }
          else if (query & Scope.LEVEL & Scope.INLINE) {
              match = types['inline'];
          }
      }
      else if (query instanceof HTMLElement) {
          var names = (query.getAttribute('class') || '').split(/\s+/);
          for (var i in names) {
              if (match = classes[names[i]])
                  break;
          }
          match = match || tags[query.tagName];
      }
      if (match == null)
          return null;
      if ((scope & Scope.LEVEL & match.scope) && (scope & Scope.TYPE & match.scope))
          return match;
      return null;
  }
  exports.query = query;
  function register() {
      var Definitions = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          Definitions[_i - 0] = arguments[_i];
      }
      if (Definitions.length > 1) {
          return Definitions.map(function (d) {
              return register(d);
          });
      }
      var Definition = Definitions[0];
      if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
          throw new ParchmentError('Invalid definition');
      }
      else if (Definition.blotName === 'abstract') {
          throw new ParchmentError('Cannot register abstract class');
      }
      types[Definition.blotName || Definition.attrName] = Definition;
      if (typeof Definition.keyName === 'string') {
          attributes[Definition.keyName] = Definition;
      }
      else {
          if (Definition.className != null) {
              classes[Definition.className] = Definition;
          }
          if (Definition.tagName != null) {
              if (Array.isArray(Definition.tagName)) {
                  Definition.tagName = Definition.tagName.map(function (tagName) {
                      return tagName.toUpperCase();
                  });
              }
              else {
                  Definition.tagName = Definition.tagName.toUpperCase();
              }
              var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
              tagNames.forEach(function (tag) {
                  if (tags[tag] == null || Definition.className == null) {
                      tags[tag] = Definition;
                  }
              });
          }
      }
      return Definition;
  }
  exports.register = register;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var attributor_1 = __webpack_require__(9);
  var store_1 = __webpack_require__(10);
  var container_1 = __webpack_require__(4);
  var Registry = __webpack_require__(7);
  var FormatBlot = (function (_super) {
      __extends(FormatBlot, _super);
      function FormatBlot() {
          _super.apply(this, arguments);
      }
      FormatBlot.formats = function (domNode) {
          if (typeof this.tagName === 'string') {
              return true;
          }
          else if (Array.isArray(this.tagName)) {
              return domNode.tagName.toLowerCase();
          }
          return undefined;
      };
      FormatBlot.prototype.attach = function () {
          _super.prototype.attach.call(this);
          this.attributes = new store_1.default(this.domNode);
      };
      FormatBlot.prototype.format = function (name, value) {
          var format = Registry.query(name);
          if (format instanceof attributor_1.default) {
              this.attributes.attribute(format, value);
          }
          else if (value) {
              if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                  this.replaceWith(name, value);
              }
          }
      };
      FormatBlot.prototype.formats = function () {
          var formats = this.attributes.values();
          var format = this.statics.formats(this.domNode);
          if (format != null) {
              formats[this.statics.blotName] = format;
          }
          return formats;
      };
      FormatBlot.prototype.replaceWith = function (name, value) {
          var replacement = _super.prototype.replaceWith.call(this, name, value);
          this.attributes.copy(replacement);
          return replacement;
      };
      FormatBlot.prototype.update = function (mutations) {
          var _this = this;
          _super.prototype.update.call(this, mutations);
          if (mutations.some(function (mutation) {
              return mutation.target === _this.domNode && mutation.type === 'attributes';
          })) {
              this.attributes.build();
          }
      };
      FormatBlot.prototype.wrap = function (name, value) {
          var wrapper = _super.prototype.wrap.call(this, name, value);
          if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
              this.attributes.move(wrapper);
          }
          return wrapper;
      };
      return FormatBlot;
  }(container_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FormatBlot;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var Registry = __webpack_require__(7);
  var Attributor = (function () {
      function Attributor(attrName, keyName, options) {
          if (options === void 0) { options = {}; }
          this.attrName = attrName;
          this.keyName = keyName;
          var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
          if (options.scope != null) {
              // Ignore type bits, force attribute bit
              this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
          }
          else {
              this.scope = Registry.Scope.ATTRIBUTE;
          }
          if (options.whitelist != null)
              this.whitelist = options.whitelist;
      }
      Attributor.keys = function (node) {
          return [].map.call(node.attributes, function (item) {
              return item.name;
          });
      };
      Attributor.prototype.add = function (node, value) {
          if (!this.canAdd(node, value))
              return false;
          node.setAttribute(this.keyName, value);
          return true;
      };
      Attributor.prototype.canAdd = function (node, value) {
          var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
          if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
              return true;
          }
          return false;
      };
      Attributor.prototype.remove = function (node) {
          node.removeAttribute(this.keyName);
      };
      Attributor.prototype.value = function (node) {
          return node.getAttribute(this.keyName);
      };
      return Attributor;
  }());
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Attributor;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var attributor_1 = __webpack_require__(9);
  var class_1 = __webpack_require__(11);
  var style_1 = __webpack_require__(12);
  var Registry = __webpack_require__(7);
  var AttributorStore = (function () {
      function AttributorStore(domNode) {
          this.attributes = {};
          this.domNode = domNode;
          this.build();
      }
      AttributorStore.prototype.attribute = function (attribute, value) {
          if (value) {
              if (attribute.add(this.domNode, value)) {
                  this.attributes[attribute.attrName] = attribute;
              }
          }
          else {
              attribute.remove(this.domNode);
              delete this.attributes[attribute.attrName];
          }
      };
      AttributorStore.prototype.build = function () {
          var _this = this;
          this.attributes = {};
          var attributes = attributor_1.default.keys(this.domNode);
          var classes = class_1.default.keys(this.domNode);
          var styles = style_1.default.keys(this.domNode);
          attributes.concat(classes).concat(styles).forEach(function (name) {
              var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
              if (attr instanceof attributor_1.default) {
                  _this.attributes[attr.attrName] = attr;
              }
          });
      };
      AttributorStore.prototype.copy = function (target) {
          var _this = this;
          Object.keys(this.attributes).forEach(function (key) {
              var value = _this.attributes[key].value(_this.domNode);
              target.format(key, value);
          });
      };
      AttributorStore.prototype.move = function (target) {
          var _this = this;
          this.copy(target);
          Object.keys(this.attributes).forEach(function (key) {
              _this.attributes[key].remove(_this.domNode);
          });
          this.attributes = {};
      };
      AttributorStore.prototype.values = function () {
          var _this = this;
          return Object.keys(this.attributes).reduce(function (attributes, name) {
              attributes[name] = _this.attributes[name].value(_this.domNode);
              return attributes;
          }, {});
      };
      return AttributorStore;
  }());
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = AttributorStore;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var attributor_1 = __webpack_require__(9);
  function match(node, prefix) {
      var className = node.getAttribute('class') || '';
      return className.split(/\s+/).filter(function (name) {
          return name.indexOf(prefix + "-") === 0;
      });
  }
  var ClassAttributor = (function (_super) {
      __extends(ClassAttributor, _super);
      function ClassAttributor() {
          _super.apply(this, arguments);
      }
      ClassAttributor.keys = function (node) {
          return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
              return name.split('-').slice(0, -1).join('-');
          });
      };
      ClassAttributor.prototype.add = function (node, value) {
          if (!this.canAdd(node, value))
              return false;
          this.remove(node);
          node.classList.add(this.keyName + "-" + value);
          return true;
      };
      ClassAttributor.prototype.remove = function (node) {
          var matches = match(node, this.keyName);
          matches.forEach(function (name) {
              node.classList.remove(name);
          });
          if (node.classList.length === 0) {
              node.removeAttribute('class');
          }
      };
      ClassAttributor.prototype.value = function (node) {
          var result = match(node, this.keyName)[0] || '';
          return result.slice(this.keyName.length + 1); // +1 for hyphen
      };
      return ClassAttributor;
  }(attributor_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ClassAttributor;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var attributor_1 = __webpack_require__(9);
  function camelize(name) {
      var parts = name.split('-');
      var rest = parts.slice(1).map(function (part) {
          return part[0].toUpperCase() + part.slice(1);
      }).join('');
      return parts[0] + rest;
  }
  var StyleAttributor = (function (_super) {
      __extends(StyleAttributor, _super);
      function StyleAttributor() {
          _super.apply(this, arguments);
      }
      StyleAttributor.keys = function (node) {
          return (node.getAttribute('style') || '').split(';').map(function (value) {
              var arr = value.split(':');
              return arr[0].trim();
          });
      };
      StyleAttributor.prototype.add = function (node, value) {
          if (!this.canAdd(node, value))
              return false;
          node.style[camelize(this.keyName)] = value;
          return true;
      };
      StyleAttributor.prototype.remove = function (node) {
          node.style[camelize(this.keyName)] = '';
          if (!node.getAttribute('style')) {
              node.removeAttribute('style');
          }
      };
      StyleAttributor.prototype.value = function (node) {
          return node.style[camelize(this.keyName)];
      };
      return StyleAttributor;
  }(attributor_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = StyleAttributor;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var shadow_1 = __webpack_require__(6);
  var Registry = __webpack_require__(7);
  var LeafBlot = (function (_super) {
      __extends(LeafBlot, _super);
      function LeafBlot() {
          _super.apply(this, arguments);
      }
      LeafBlot.value = function (domNode) {
          return true;
      };
      LeafBlot.prototype.index = function (node, offset) {
          if (node !== this.domNode)
              return -1;
          return Math.min(offset, 1);
      };
      LeafBlot.prototype.position = function (index, inclusive) {
          var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
          if (index > 0)
              offset += 1;
          return [this.parent.domNode, offset];
      };
      LeafBlot.prototype.value = function () {
          return (_a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a);
          var _a;
      };
      LeafBlot.scope = Registry.Scope.INLINE_BLOT;
      return LeafBlot;
  }(shadow_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = LeafBlot;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var container_1 = __webpack_require__(4);
  var Registry = __webpack_require__(7);
  var OBSERVER_CONFIG = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
  };
  var MAX_OPTIMIZE_ITERATIONS = 100;
  var ScrollBlot = (function (_super) {
      __extends(ScrollBlot, _super);
      function ScrollBlot(node) {
          var _this = this;
          _super.call(this, node);
          this.parent = null;
          this.observer = new MutationObserver(function (mutations) {
              _this.update(mutations);
          });
          this.observer.observe(this.domNode, OBSERVER_CONFIG);
      }
      ScrollBlot.prototype.detach = function () {
          _super.prototype.detach.call(this);
          this.observer.disconnect();
      };
      ScrollBlot.prototype.deleteAt = function (index, length) {
          this.update();
          if (index === 0 && length === this.length()) {
              this.children.forEach(function (child) {
                  child.remove();
              });
          }
          else {
              _super.prototype.deleteAt.call(this, index, length);
          }
          this.optimize();
      };
      ScrollBlot.prototype.formatAt = function (index, length, name, value) {
          this.update();
          _super.prototype.formatAt.call(this, index, length, name, value);
          this.optimize();
      };
      ScrollBlot.prototype.insertAt = function (index, value, def) {
          this.update();
          _super.prototype.insertAt.call(this, index, value, def);
          this.optimize();
      };
      ScrollBlot.prototype.optimize = function (mutations) {
          var _this = this;
          if (mutations === void 0) { mutations = []; }
          _super.prototype.optimize.call(this);
          mutations.push.apply(mutations, this.observer.takeRecords());
          // TODO use WeakMap
          var mark = function (blot) {
              if (blot == null || blot === _this)
                  return;
              if (blot.domNode.parentNode == null)
                  return;
              if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                  blot.domNode[Registry.DATA_KEY].mutations = [];
              }
              mark(blot.parent);
          };
          var optimize = function (blot) {
              if (blot instanceof container_1.default) {
                  blot.children.forEach(function (child) {
                      if (!child.domNode[Registry.DATA_KEY] || child.domNode[Registry.DATA_KEY].mutations == null)
                          return;
                      optimize(child);
                  });
              }
              blot.optimize();
          };
          var remaining = mutations;
          for (var i = 0; remaining.length > 0; i += 1) {
              if (i >= MAX_OPTIMIZE_ITERATIONS) {
                  throw new Error('[Parchment] Maximum optimize iterations reached');
              }
              remaining.forEach(function (mutation) {
                  var blot = Registry.find(mutation.target, true);
                  if (blot != null && blot.domNode === mutation.target && mutation.type === 'childList') {
                      mark(Registry.find(mutation.previousSibling, false));
                      [].forEach.call(mutation.addedNodes, function (node) {
                          var child = Registry.find(node, false);
                          mark(child);
                          if (child instanceof container_1.default) {
                              child.children.forEach(mark);
                          }
                      });
                  }
                  mark(blot);
              });
              this.children.forEach(optimize);
              remaining = this.observer.takeRecords();
              mutations.push.apply(mutations, remaining);
          }
      };
      ScrollBlot.prototype.update = function (mutations) {
          var _this = this;
          mutations = mutations || this.observer.takeRecords();
          // TODO use WeakMap
          mutations.map(function (mutation) {
              var blot = Registry.find(mutation.target, true);
              if (blot == null)
                  return;
              if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                  blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                  return blot;
              }
              else {
                  blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                  return null;
              }
          }).forEach(function (blot) {
              if (blot == null || blot === _this)
                  return;
              blot.update(blot.domNode[Registry.DATA_KEY].mutations || []);
          });
          if (this.domNode[Registry.DATA_KEY].mutations != null) {
              _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations);
          }
          this.optimize(mutations);
      };
      ScrollBlot.blotName = 'scroll';
      ScrollBlot.defaultChild = 'block';
      ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
      ScrollBlot.tagName = 'DIV';
      return ScrollBlot;
  }(container_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ScrollBlot;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var format_1 = __webpack_require__(8);
  var Registry = __webpack_require__(7);
  // Shallow object comparison
  function isEqual(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length)
          return false;
      for (var prop in obj1) {
          if (obj1[prop] !== obj2[prop])
              return false;
      }
      return true;
  }
  var InlineBlot = (function (_super) {
      __extends(InlineBlot, _super);
      function InlineBlot() {
          _super.apply(this, arguments);
      }
      InlineBlot.formats = function (domNode) {
          if (domNode.tagName === InlineBlot.tagName)
              return undefined;
          return _super.formats.call(this, domNode);
      };
      InlineBlot.prototype.format = function (name, value) {
          if (name === this.statics.blotName && !value) {
              this.replaceWith(InlineBlot.blotName);
          }
          else {
              _super.prototype.format.call(this, name, value);
          }
      };
      InlineBlot.prototype.formatAt = function (index, length, name, value) {
          if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
              var blot = this.isolate(index, length);
              blot.format(name, value);
          }
          else {
              _super.prototype.formatAt.call(this, index, length, name, value);
          }
      };
      InlineBlot.prototype.optimize = function () {
          _super.prototype.optimize.call(this);
          var formats = this.formats();
          if (Object.keys(formats).length === 0) {
              return this.unwrap(); // unformatted span
          }
          var next = this.next;
          if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
              next.moveChildren(this);
              next.remove();
          }
      };
      InlineBlot.blotName = 'inline';
      InlineBlot.scope = Registry.Scope.INLINE_BLOT;
      InlineBlot.tagName = 'SPAN';
      return InlineBlot;
  }(format_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = InlineBlot;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var format_1 = __webpack_require__(8);
  var Registry = __webpack_require__(7);
  var BlockBlot = (function (_super) {
      __extends(BlockBlot, _super);
      function BlockBlot() {
          _super.apply(this, arguments);
      }
      BlockBlot.formats = function (domNode) {
          if (domNode.tagName === BlockBlot.tagName)
              return undefined;
          return _super.formats.call(this, domNode);
      };
      BlockBlot.prototype.format = function (name, value) {
          if (name === this.statics.blotName && !value) {
              this.replaceWith(BlockBlot.blotName);
          }
          else {
              _super.prototype.format.call(this, name, value);
          }
      };
      BlockBlot.prototype.formatAt = function (index, length, name, value) {
          if (Registry.query(name, Registry.Scope.BLOCK) != null) {
              this.format(name, value);
          }
          else {
              _super.prototype.formatAt.call(this, index, length, name, value);
          }
      };
      BlockBlot.prototype.insertAt = function (index, value, def) {
          if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
              // Insert text or inline
              _super.prototype.insertAt.call(this, index, value, def);
          }
          else {
              var after = this.split(index);
              var blot = Registry.create(value, def);
              after.parent.insertBefore(blot, after);
          }
      };
      BlockBlot.blotName = 'block';
      BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
      BlockBlot.tagName = 'P';
      return BlockBlot;
  }(format_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = BlockBlot;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var leaf_1 = __webpack_require__(13);
  var EmbedBlot = (function (_super) {
      __extends(EmbedBlot, _super);
      function EmbedBlot() {
          _super.apply(this, arguments);
      }
      EmbedBlot.formats = function (domNode) {
          return undefined;
      };
      EmbedBlot.prototype.format = function (name, value) {
          // Do nothing by default
      };
      EmbedBlot.prototype.formats = function () {
          return this.statics.formats(this.domNode);
      };
      return EmbedBlot;
  }(leaf_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = EmbedBlot;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var leaf_1 = __webpack_require__(13);
  var Registry = __webpack_require__(7);
  var TextBlot = (function (_super) {
      __extends(TextBlot, _super);
      function TextBlot(node) {
          _super.call(this, node);
          this.text = this.statics.value(this.domNode);
      }
      TextBlot.create = function (value) {
          return document.createTextNode(value);
      };
      TextBlot.value = function (domNode) {
          return domNode.data;
      };
      TextBlot.prototype.deleteAt = function (index, length) {
          this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
      };
      TextBlot.prototype.index = function (node, offset) {
          if (this.domNode === node) {
              return offset;
          }
          return -1;
      };
      TextBlot.prototype.insertAt = function (index, value, def) {
          if (def == null) {
              this.text = this.text.slice(0, index) + value + this.text.slice(index);
              this.domNode.data = this.text;
          }
          else {
              _super.prototype.insertAt.call(this, index, value, def);
          }
      };
      TextBlot.prototype.length = function () {
          return this.text.length;
      };
      TextBlot.prototype.optimize = function () {
          _super.prototype.optimize.call(this);
          this.text = this.statics.value(this.domNode);
          if (this.text.length === 0) {
              this.remove();
          }
          else if (this.next instanceof TextBlot && this.next.prev === this) {
              this.insertAt(this.length(), this.next.value());
              this.next.remove();
          }
      };
      TextBlot.prototype.position = function (index, inclusive) {
          if (inclusive === void 0) { inclusive = false; }
          return [this.domNode, index];
      };
      TextBlot.prototype.split = function (index, force) {
          if (force === void 0) { force = false; }
          if (!force) {
              if (index === 0)
                  return this;
              if (index === this.length())
                  return this.next;
          }
          var after = Registry.create(this.domNode.splitText(index));
          this.parent.insertBefore(after, this.next);
          this.text = this.statics.value(this.domNode);
          return after;
      };
      TextBlot.prototype.update = function (mutations) {
          var _this = this;
          if (mutations.some(function (mutation) {
              return mutation.type === 'characterData' && mutation.target === _this.domNode;
          })) {
              this.text = this.statics.value(this.domNode);
          }
      };
      TextBlot.prototype.value = function () {
          return this.text;
      };
      TextBlot.blotName = 'text';
      TextBlot.scope = Registry.Scope.INLINE_BLOT;
      return TextBlot;
  }(leaf_1.default));
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = TextBlot;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.overload = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  __webpack_require__(20);

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _editor = __webpack_require__(28);

  var _editor2 = _interopRequireDefault(_editor);

  var _emitter = __webpack_require__(29);

  var _emitter2 = _interopRequireDefault(_emitter);

  var _module = __webpack_require__(38);

  var _module2 = _interopRequireDefault(_module);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _selection = __webpack_require__(39);

  var _selection2 = _interopRequireDefault(_selection);

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  var _theme = __webpack_require__(40);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var debug = (0, _logger2.default)('quill');

  var Quill = function () {
    _createClass(Quill, null, [{
      key: 'debug',
      value: function debug(limit) {
        _logger2.default.level(limit);
      }
    }, {
      key: 'import',
      value: function _import(name) {
        if (this.imports[name] == null) {
          debug.error('Cannot import ' + name + '. Are you sure it was registered?');
        }
        return this.imports[name];
      }
    }, {
      key: 'register',
      value: function register(path, target) {
        var _this = this;

        var overwrite = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (typeof path !== 'string') {
          var name = path.attrName || path.blotName;
          if (typeof name === 'string') {
            // register(Blot | Attributor, overwrite)
            this.register('formats/' + name, path, target);
          } else {
            Object.keys(path).forEach(function (key) {
              _this.register(key, path[key], target);
            });
          }
        } else {
          if (this.imports[path] != null && !overwrite) {
            debug.warn('Overwriting ' + path + ' with', target);
          }
          this.imports[path] = target;
          if (path.startsWith('formats/')) {
            _parchment2.default.register(target);
          }
        }
      }
    }]);

    function Quill(container) {
      var _this2 = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, Quill);

      this.container = typeof container === 'string' ? document.querySelector(container) : container;
      if (this.container == null) {
        return debug.error('Invalid Quill container', container);
      }
      var themeClass = _theme2.default;
      if (options.theme != null && options.theme !== Quill.DEFAULTS.theme) {
        themeClass = Quill.import('themes/' + options.theme);
      }
      options = (0, _extend2.default)(true, {}, Quill.DEFAULTS, themeClass.DEFAULTS, options);
      var html = this.container.innerHTML.trim();
      this.container.classList.add('ql-container');
      this.container.innerHTML = '';
      this.root = this.addContainer('ql-editor');
      this.emitter = new _emitter2.default();
      this.scroll = _parchment2.default.create(this.root, {
        emitter: this.emitter,
        whitelist: options.formats
      });
      this.editor = new _editor2.default(this.scroll, this.emitter);
      this.selection = new _selection2.default(this.scroll, this.emitter);
      this.theme = new themeClass(this, options);
      this.keyboard = this.theme.addModule('keyboard');
      this.clipboard = this.theme.addModule('clipboard');
      this.history = this.theme.addModule('history');
      // Setting would truncate a newline at the end
      this.pasteHTML(0, '<div class=\'ql-editor\' style="white-space: normal;">' + html + '</div>');
      this.history.clear();
      if (options.readOnly) {
        this.disable();
      }
      if (options.placeholder) {
        this.root.dataset.placeholder = options.placeholder;
      }
      if (options.debug) {
        Quill.debug(options.debug);
      }
      this.root.classList.toggle('ql-blank', this.editor.isBlank());
      this.emitter.on(_emitter2.default.events.TEXT_CHANGE, function (delta) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      });
      this.emitter.emit(_emitter2.default.events.READY);
    }

    _createClass(Quill, [{
      key: 'addContainer',
      value: function addContainer(container) {
        var refNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        if (typeof container === 'string') {
          var className = container;
          container = document.createElement('div');
          container.classList.add(className);
        }
        this.container.insertBefore(container, refNode);
        return container;
      }
    }, {
      key: 'deleteText',
      value: function deleteText(index, length) {
        var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

        var _overload = overload(index, length, source);

        var _overload2 = _slicedToArray(_overload, 4);

        index = _overload2[0];
        length = _overload2[1];
        source = _overload2[3];

        this.editor.deleteText(index, length, source);
      }
    }, {
      key: 'disable',
      value: function disable() {
        this.editor.enable(false);
      }
    }, {
      key: 'enable',
      value: function enable() {
        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        this.editor.enable(enabled);
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.selection.focus();
      }
    }, {
      key: 'format',
      value: function format(name, value) {
        var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

        var range = this.getSelection();
        if (range == null) return;
        if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          this.formatLine(range, name, value, source);
        } else if (range.length === 0) {
          return this.selection.format(name, value);
        } else {
          this.formatText(range, name, value, source);
        }
        this.setSelection(range, _emitter2.default.sources.SILENT);
      }
    }, {
      key: 'formatLine',
      value: function formatLine(index, length, name, value, source) {
        var formats = void 0;

        var _overload3 = overload(index, length, name, value, source);

        var _overload4 = _slicedToArray(_overload3, 4);

        index = _overload4[0];
        length = _overload4[1];
        formats = _overload4[2];
        source = _overload4[3];

        this.editor.formatLine(index, length, formats, source);
      }
    }, {
      key: 'formatText',
      value: function formatText(index, length, name, value, source) {
        var formats = void 0;

        var _overload5 = overload(index, length, name, value, source);

        var _overload6 = _slicedToArray(_overload5, 4);

        index = _overload6[0];
        length = _overload6[1];
        formats = _overload6[2];
        source = _overload6[3];

        this.editor.formatText(index, length, formats, source);
      }
    }, {
      key: 'getBounds',
      value: function getBounds(index) {
        var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        if (typeof index === 'number') {
          return this.selection.getBounds(index, length);
        } else {
          return this.selection.getBounds(index.index, index.length);
        }
      }
    }, {
      key: 'getContents',
      value: function getContents() {
        var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

        var _overload7 = overload(index, length);

        var _overload8 = _slicedToArray(_overload7, 2);

        index = _overload8[0];
        length = _overload8[1];

        return this.editor.getContents(index, length);
      }
    }, {
      key: 'getFormat',
      value: function getFormat() {
        var index = arguments.length <= 0 || arguments[0] === undefined ? this.getSelection() : arguments[0];
        var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        if (typeof index === 'number') {
          return this.editor.getFormat(index, length);
        } else {
          return this.editor.getFormat(index.index, index.length);
        }
      }
    }, {
      key: 'getLength',
      value: function getLength() {
        return this.scroll.length();
      }
    }, {
      key: 'getModule',
      value: function getModule(name) {
        return this.theme.modules[name];
      }
    }, {
      key: 'getSelection',
      value: function getSelection() {
        var focus = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        if (focus) this.focus();
        this.update(); // Make sure we access getRange with editor in consistent state
        return this.selection.getRange()[0];
      }
    }, {
      key: 'getText',
      value: function getText() {
        var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

        var _overload9 = overload(index, length);

        var _overload10 = _slicedToArray(_overload9, 2);

        index = _overload10[0];
        length = _overload10[1];

        return this.editor.getText(index, length);
      }
    }, {
      key: 'hasFocus',
      value: function hasFocus() {
        return this.selection.hasFocus();
      }
    }, {
      key: 'insertEmbed',
      value: function insertEmbed(index, embed, value, source) {
        this.editor.insertEmbed(index, embed, value, source);
      }
    }, {
      key: 'insertText',
      value: function insertText(index, text, name, value, source) {
        var formats = void 0;

        var _overload11 = overload(index, 0, name, value, source);

        var _overload12 = _slicedToArray(_overload11, 4);

        index = _overload12[0];
        formats = _overload12[2];
        source = _overload12[3];

        this.editor.insertText(index, text, formats, source);
      }
    }, {
      key: 'off',
      value: function off() {
        return this.emitter.off.apply(this.emitter, arguments);
      }
    }, {
      key: 'on',
      value: function on() {
        return this.emitter.on.apply(this.emitter, arguments);
      }
    }, {
      key: 'once',
      value: function once() {
        return this.emitter.once.apply(this.emitter, arguments);
      }
    }, {
      key: 'pasteHTML',
      value: function pasteHTML(index, html) {
        if (typeof index === 'string') {
          this.setContents(this.clipboard.convert(index));
        } else {
          var paste = this.clipboard.convert(html);
          this.updateContents(new _delta2.default().retain(index).concat(paste));
        }
      }
    }, {
      key: 'removeFormat',
      value: function removeFormat(index, length, source) {
        var _overload13 = overload(index, length, source);

        var _overload14 = _slicedToArray(_overload13, 4);

        index = _overload14[0];
        length = _overload14[1];
        source = _overload14[3];

        this.editor.removeFormat(index, length, source);
      }
    }, {
      key: 'setContents',
      value: function setContents(delta) {
        var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

        delta = new _delta2.default(delta).slice();
        var lastOp = delta.ops[delta.ops.length - 1];
        // Quill contents must always end with newline
        if (lastOp == null || lastOp.insert[lastOp.insert.length - 1] !== '\n') {
          delta.insert('\n');
        }
        delta.delete(this.getLength());
        this.editor.applyDelta(delta);
      }
    }, {
      key: 'setSelection',
      value: function setSelection(index) {
        var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
      }
    }, {
      key: 'setText',
      value: function setText(text) {
        var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

        var delta = new _delta2.default().insert(text);
        this.setContents(delta, source);
      }
    }, {
      key: 'update',
      value: function update() {
        var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

        this.scroll.update(); // Will update selection before selection.update() does if text changes
        this.selection.update(source);
      }
    }, {
      key: 'updateContents',
      value: function updateContents(delta) {
        var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

        if (Array.isArray(delta)) {
          delta = new _delta2.default(delta.slice());
        }
        this.editor.applyDelta(delta, source);
      }
    }]);

    return Quill;
  }();

  Quill.DEFAULTS = {
    bounds: document.body,
    formats: null,
    modules: {},
    placeholder: '',
    readOnly: false,
    theme: 'default'
  };
  Quill.events = _emitter2.default.events;
  Quill.sources = _emitter2.default.sources;
  Quill.version = ("1.0.0-beta.2");

  Quill.imports = {
    'delta': _delta2.default,
    'parchment': _parchment2.default,
    'core/module': _module2.default,
    'core/theme': _theme2.default
  };

  function overload(index, length, name, value, source) {
    var formats = {};
    if (typeof index.index === 'number' && typeof index.length === 'number') {
      // Allow for throwaway end (used by insertText/insertEmbed)
      if (typeof length !== 'number') {
        source = value, value = name, name = length, length = index.length, index = index.index;
      } else {
        length = index.length, index = index.index;
      }
    } else if (typeof length !== 'number') {
      source = value, value = name, name = length, length = 0;
    }
    // Handle format being object, two format name/value strings or excluded
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
      formats = name;
      source = value;
    } else if (typeof name === 'string') {
      if (value != null) {
        formats[name] = value;
      } else {
        source = name;
      }
    }
    // Handle optional source
    source = source || _emitter2.default.sources.API;
    return [index, length, formats, source];
  }

  exports.overload = overload;
  exports.default = Quill;

/***/ },
/* 20 */
/***/ function(module, exports) {

  'use strict';

  var elem = document.createElement('div');
  elem.classList.toggle('test-class', false);
  if (elem.classList.contains('test-class')) {
    (function () {
      var _toggle = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (token, force) {
        if (arguments.length > 1 && !this.contains(token) === !force) {
          return force;
        } else {
          return _toggle.call(this, token);
        }
      };
    })();
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
  }

  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var diff = __webpack_require__(22);
  var equal = __webpack_require__(23);
  var extend = __webpack_require__(26);
  var op = __webpack_require__(27);

  var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()

  var Delta = function Delta(ops) {
    // Assume we are given a well formed ops
    if (Array.isArray(ops)) {
      this.ops = ops;
    } else if (ops != null && Array.isArray(ops.ops)) {
      this.ops = ops.ops;
    } else {
      this.ops = [];
    }
  };

  Delta.prototype.insert = function (text, attributes) {
    var newOp = {};
    if (text.length === 0) return this;
    newOp.insert = text;
    if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
    return this.push(newOp);
  };

  Delta.prototype['delete'] = function (length) {
    if (length <= 0) return this;
    return this.push({ 'delete': length });
  };

  Delta.prototype.retain = function (length, attributes) {
    if (length <= 0) return this;
    var newOp = { retain: length };
    if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
    return this.push(newOp);
  };

  Delta.prototype.push = function (newOp) {
    var index = this.ops.length;
    var lastOp = this.ops[index - 1];
    newOp = extend(true, {}, newOp);
    if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof(lastOp)) === 'object') {
      if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
        this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
        return this;
      }
      // Since it does not matter if we insert before or after deleting at the same index,
      // always prefer to insert first
      if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
        index -= 1;
        lastOp = this.ops[index - 1];
        if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof(lastOp)) !== 'object') {
          this.ops.unshift(newOp);
          return this;
        }
      }
      if (equal(newOp.attributes, lastOp.attributes)) {
        if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
          this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
          if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
          return this;
        } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
          this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
          if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
          return this;
        }
      }
    }
    if (index === this.ops.length) {
      this.ops.push(newOp);
    } else {
      this.ops.splice(index, 0, newOp);
    }
    return this;
  };

  Delta.prototype.chop = function () {
    var lastOp = this.ops[this.ops.length - 1];
    if (lastOp && lastOp.retain && !lastOp.attributes) {
      this.ops.pop();
    }
    return this;
  };

  Delta.prototype.length = function () {
    return this.ops.reduce(function (length, elem) {
      return length + op.length(elem);
    }, 0);
  };

  Delta.prototype.slice = function (start, end) {
    start = start || 0;
    if (typeof end !== 'number') end = Infinity;
    var delta = new Delta();
    var iter = op.iterator(this.ops);
    var index = 0;
    while (index < end && iter.hasNext()) {
      var nextOp;
      if (index < start) {
        nextOp = iter.next(start - index);
      } else {
        nextOp = iter.next(end - index);
        delta.push(nextOp);
      }
      index += op.length(nextOp);
    }
    return delta;
  };

  Delta.prototype.compose = function (other) {
    var thisIter = op.iterator(this.ops);
    var otherIter = op.iterator(other.ops);
    var delta = new Delta();
    while (thisIter.hasNext() || otherIter.hasNext()) {
      if (otherIter.peekType() === 'insert') {
        delta.push(otherIter.next());
      } else if (thisIter.peekType() === 'delete') {
        delta.push(thisIter.next());
      } else {
        var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
        var thisOp = thisIter.next(length);
        var otherOp = otherIter.next(length);
        if (typeof otherOp.retain === 'number') {
          var newOp = {};
          if (typeof thisOp.retain === 'number') {
            newOp.retain = length;
          } else {
            newOp.insert = thisOp.insert;
          }
          // Preserve null when composing with a retain, otherwise remove it for inserts
          var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
          if (attributes) newOp.attributes = attributes;
          delta.push(newOp);
          // Other op should be delete, we could be an insert or retain
          // Insert + delete cancels out
        } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
            delta.push(otherOp);
          }
      }
    }
    return delta.chop();
  };

  Delta.prototype.concat = function (other) {
    var delta = this.slice();
    if (other.ops.length > 0) {
      delta.push(other.ops[0]);
      delta.ops = delta.ops.concat(other.ops.slice(1));
    }
    return delta;
  };

  Delta.prototype.diff = function (other) {
    var delta = new Delta();
    if (this.ops === other.ops) {
      return delta;
    }
    var strings = [this.ops, other.ops].map(function (ops) {
      return ops.map(function (op) {
        if (op.insert != null) {
          return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
        }
        var prep = ops === other.ops ? 'on' : 'with';
        throw new Error('diff() called ' + prep + ' non-document');
      }).join('');
    });
    var diffResult = diff(strings[0], strings[1]);
    var thisIter = op.iterator(this.ops);
    var otherIter = op.iterator(other.ops);
    diffResult.forEach(function (component) {
      var length = component[1].length;
      while (length > 0) {
        var opLength = 0;
        switch (component[0]) {
          case diff.INSERT:
            opLength = Math.min(otherIter.peekLength(), length);
            delta.push(otherIter.next(opLength));
            break;
          case diff.DELETE:
            opLength = Math.min(length, thisIter.peekLength());
            thisIter.next(opLength);
            delta['delete'](opLength);
            break;
          case diff.EQUAL:
            opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
            var thisOp = thisIter.next(opLength);
            var otherOp = otherIter.next(opLength);
            if (equal(thisOp.insert, otherOp.insert)) {
              delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
            } else {
              delta.push(otherOp)['delete'](opLength);
            }
            break;
        }
        length -= opLength;
      }
    });
    return delta.chop();
  };

  Delta.prototype.transform = function (other, priority) {
    priority = !!priority;
    if (typeof other === 'number') {
      return this.transformPosition(other, priority);
    }
    var thisIter = op.iterator(this.ops);
    var otherIter = op.iterator(other.ops);
    var delta = new Delta();
    while (thisIter.hasNext() || otherIter.hasNext()) {
      if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
        delta.retain(op.length(thisIter.next()));
      } else if (otherIter.peekType() === 'insert') {
        delta.push(otherIter.next());
      } else {
        var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
        var thisOp = thisIter.next(length);
        var otherOp = otherIter.next(length);
        if (thisOp['delete']) {
          // Our delete either makes their delete redundant or removes their retain
          continue;
        } else if (otherOp['delete']) {
          delta.push(otherOp);
        } else {
          // We retain either their retain or insert
          delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
        }
      }
    }
    return delta.chop();
  };

  Delta.prototype.transformPosition = function (index, priority) {
    priority = !!priority;
    var thisIter = op.iterator(this.ops);
    var offset = 0;
    while (thisIter.hasNext() && offset <= index) {
      var length = thisIter.peekLength();
      var nextType = thisIter.peekType();
      thisIter.next();
      if (nextType === 'delete') {
        index -= Math.min(length, index - offset);
        continue;
      } else if (nextType === 'insert' && (offset < index || !priority)) {
        index += length;
      }
      offset += length;
    }
    return index;
  };

  module.exports = Delta;

/***/ },
/* 22 */
/***/ function(module, exports) {

  'use strict';

  /**
   * This library modifies the diff-patch-match library by Neil Fraser
   * by removing the patch and match functionality and certain advanced
   * options in the diff function. The original license is as follows:
   *
   * ===
   *
   * Diff Match and Patch
   *
   * Copyright 2006 Google Inc.
   * http://code.google.com/p/google-diff-match-patch/
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The data structure representing a diff is an array of tuples:
   * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
   * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
   */
  var DIFF_DELETE = -1;
  var DIFF_INSERT = 1;
  var DIFF_EQUAL = 0;

  /**
   * Find the differences between two texts.  Simplifies the problem by stripping
   * any common prefix or suffix off the texts before diffing.
   * @param {string} text1 Old string to be diffed.
   * @param {string} text2 New string to be diffed.
   * @return {Array} Array of diff tuples.
   */
  function diff_main(text1, text2) {
    // Check for equality (speedup).
    if (text1 == text2) {
      if (text1) {
        return [[DIFF_EQUAL, text1]];
      }
      return [];
    }

    // Trim off common prefix (speedup).
    var commonlength = diff_commonPrefix(text1, text2);
    var commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength);
    text2 = text2.substring(commonlength);

    // Trim off common suffix (speedup).
    commonlength = diff_commonSuffix(text1, text2);
    var commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength);
    text2 = text2.substring(0, text2.length - commonlength);

    // Compute the diff on the middle block.
    var diffs = diff_compute_(text1, text2);

    // Restore the prefix and suffix.
    if (commonprefix) {
      diffs.unshift([DIFF_EQUAL, commonprefix]);
    }
    if (commonsuffix) {
      diffs.push([DIFF_EQUAL, commonsuffix]);
    }
    diff_cleanupMerge(diffs);
    return diffs;
  };

  /**
   * Find the differences between two texts.  Assumes that the texts do not
   * have any common prefix or suffix.
   * @param {string} text1 Old string to be diffed.
   * @param {string} text2 New string to be diffed.
   * @return {Array} Array of diff tuples.
   */
  function diff_compute_(text1, text2) {
    var diffs;

    if (!text1) {
      // Just add some text (speedup).
      return [[DIFF_INSERT, text2]];
    }

    if (!text2) {
      // Just delete some text (speedup).
      return [[DIFF_DELETE, text1]];
    }

    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    var i = longtext.indexOf(shorttext);
    if (i != -1) {
      // Shorter text is inside the longer text (speedup).
      diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
      // Swap insertions for deletions if diff is reversed.
      if (text1.length > text2.length) {
        diffs[0][0] = diffs[2][0] = DIFF_DELETE;
      }
      return diffs;
    }

    if (shorttext.length == 1) {
      // Single character string.
      // After the previous speedup, the character can't be an equality.
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }

    // Check to see if the problem can be split in two.
    var hm = diff_halfMatch_(text1, text2);
    if (hm) {
      // A half-match was found, sort out the return data.
      var text1_a = hm[0];
      var text1_b = hm[1];
      var text2_a = hm[2];
      var text2_b = hm[3];
      var mid_common = hm[4];
      // Send both pairs off for separate processing.
      var diffs_a = diff_main(text1_a, text2_a);
      var diffs_b = diff_main(text1_b, text2_b);
      // Merge the results.
      return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
    }

    return diff_bisect_(text1, text2);
  };

  /**
   * Find the 'middle snake' of a diff, split the problem in two
   * and return the recursively constructed diff.
   * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
   * @param {string} text1 Old string to be diffed.
   * @param {string} text2 New string to be diffed.
   * @return {Array} Array of diff tuples.
   * @private
   */
  function diff_bisect_(text1, text2) {
    // Cache the text lengths to prevent multiple calls.
    var text1_length = text1.length;
    var text2_length = text2.length;
    var max_d = Math.ceil((text1_length + text2_length) / 2);
    var v_offset = max_d;
    var v_length = 2 * max_d;
    var v1 = new Array(v_length);
    var v2 = new Array(v_length);
    // Setting all elements to -1 is faster in Chrome & Firefox than mixing
    // integers and undefined.
    for (var x = 0; x < v_length; x++) {
      v1[x] = -1;
      v2[x] = -1;
    }
    v1[v_offset + 1] = 0;
    v2[v_offset + 1] = 0;
    var delta = text1_length - text2_length;
    // If the total number of characters is odd, then the front path will collide
    // with the reverse path.
    var front = delta % 2 != 0;
    // Offsets for start and end of k loop.
    // Prevents mapping of space beyond the grid.
    var k1start = 0;
    var k1end = 0;
    var k2start = 0;
    var k2end = 0;
    for (var d = 0; d < max_d; d++) {
      // Walk the front path one step.
      for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
        var k1_offset = v_offset + k1;
        var x1;
        if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
          x1 = v1[k1_offset + 1];
        } else {
          x1 = v1[k1_offset - 1] + 1;
        }
        var y1 = x1 - k1;
        while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
          x1++;
          y1++;
        }
        v1[k1_offset] = x1;
        if (x1 > text1_length) {
          // Ran off the right of the graph.
          k1end += 2;
        } else if (y1 > text2_length) {
          // Ran off the bottom of the graph.
          k1start += 2;
        } else if (front) {
          var k2_offset = v_offset + delta - k1;
          if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
            // Mirror x2 onto top-left coordinate system.
            var x2 = text1_length - v2[k2_offset];
            if (x1 >= x2) {
              // Overlap detected.
              return diff_bisectSplit_(text1, text2, x1, y1);
            }
          }
        }
      }

      // Walk the reverse path one step.
      for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
        var k2_offset = v_offset + k2;
        var x2;
        if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
          x2 = v2[k2_offset + 1];
        } else {
          x2 = v2[k2_offset - 1] + 1;
        }
        var y2 = x2 - k2;
        while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
          x2++;
          y2++;
        }
        v2[k2_offset] = x2;
        if (x2 > text1_length) {
          // Ran off the left of the graph.
          k2end += 2;
        } else if (y2 > text2_length) {
          // Ran off the top of the graph.
          k2start += 2;
        } else if (!front) {
          var k1_offset = v_offset + delta - k2;
          if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
            var x1 = v1[k1_offset];
            var y1 = v_offset + x1 - k1_offset;
            // Mirror x2 onto top-left coordinate system.
            x2 = text1_length - x2;
            if (x1 >= x2) {
              // Overlap detected.
              return diff_bisectSplit_(text1, text2, x1, y1);
            }
          }
        }
      }
    }
    // Diff took too long and hit the deadline or
    // number of diffs equals number of characters, no commonality at all.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  };

  /**
   * Given the location of the 'middle snake', split the diff in two parts
   * and recurse.
   * @param {string} text1 Old string to be diffed.
   * @param {string} text2 New string to be diffed.
   * @param {number} x Index of split point in text1.
   * @param {number} y Index of split point in text2.
   * @return {Array} Array of diff tuples.
   */
  function diff_bisectSplit_(text1, text2, x, y) {
    var text1a = text1.substring(0, x);
    var text2a = text2.substring(0, y);
    var text1b = text1.substring(x);
    var text2b = text2.substring(y);

    // Compute both diffs serially.
    var diffs = diff_main(text1a, text2a);
    var diffsb = diff_main(text1b, text2b);

    return diffs.concat(diffsb);
  };

  /**
   * Determine the common prefix of two strings.
   * @param {string} text1 First string.
   * @param {string} text2 Second string.
   * @return {number} The number of characters common to the start of each
   *     string.
   */
  function diff_commonPrefix(text1, text2) {
    // Quick check for common null cases.
    if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
      return 0;
    }
    // Binary search.
    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerstart = 0;
    while (pointermin < pointermid) {
      if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
        pointermin = pointermid;
        pointerstart = pointermin;
      } else {
        pointermax = pointermid;
      }
      pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    return pointermid;
  };

  /**
   * Determine the common suffix of two strings.
   * @param {string} text1 First string.
   * @param {string} text2 Second string.
   * @return {number} The number of characters common to the end of each string.
   */
  function diff_commonSuffix(text1, text2) {
    // Quick check for common null cases.
    if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
      return 0;
    }
    // Binary search.
    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
    var pointermin = 0;
    var pointermax = Math.min(text1.length, text2.length);
    var pointermid = pointermax;
    var pointerend = 0;
    while (pointermin < pointermid) {
      if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
        pointermin = pointermid;
        pointerend = pointermin;
      } else {
        pointermax = pointermid;
      }
      pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
    }
    return pointermid;
  };

  /**
   * Do the two texts share a substring which is at least half the length of the
   * longer text?
   * This speedup can produce non-minimal diffs.
   * @param {string} text1 First string.
   * @param {string} text2 Second string.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     text1, the suffix of text1, the prefix of text2, the suffix of
   *     text2 and the common middle.  Or null if there was no match.
   */
  function diff_halfMatch_(text1, text2) {
    var longtext = text1.length > text2.length ? text1 : text2;
    var shorttext = text1.length > text2.length ? text2 : text1;
    if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
      return null; // Pointless.
    }

    /**
     * Does a substring of shorttext exist within longtext such that the substring
     * is at least half the length of longtext?
     * Closure, but does not reference any external variables.
     * @param {string} longtext Longer string.
     * @param {string} shorttext Shorter string.
     * @param {number} i Start index of quarter length substring within longtext.
     * @return {Array.<string>} Five element Array, containing the prefix of
     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
     *     of shorttext and the common middle.  Or null if there was no match.
     * @private
     */
    function diff_halfMatchI_(longtext, shorttext, i) {
      // Start with a 1/4 length substring at position i as a seed.
      var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
      var j = -1;
      var best_common = '';
      var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
      while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
        var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
        var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
        if (best_common.length < suffixLength + prefixLength) {
          best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
          best_longtext_a = longtext.substring(0, i - suffixLength);
          best_longtext_b = longtext.substring(i + prefixLength);
          best_shorttext_a = shorttext.substring(0, j - suffixLength);
          best_shorttext_b = shorttext.substring(j + prefixLength);
        }
      }
      if (best_common.length * 2 >= longtext.length) {
        return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
      } else {
        return null;
      }
    }

    // First check if the second quarter is the seed for a half-match.
    var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
    // Check again based on the third quarter.
    var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
    var hm;
    if (!hm1 && !hm2) {
      return null;
    } else if (!hm2) {
      hm = hm1;
    } else if (!hm1) {
      hm = hm2;
    } else {
      // Both matched.  Select the longest.
      hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
    }

    // A half-match was found, sort out the return data.
    var text1_a, text1_b, text2_a, text2_b;
    if (text1.length > text2.length) {
      text1_a = hm[0];
      text1_b = hm[1];
      text2_a = hm[2];
      text2_b = hm[3];
    } else {
      text2_a = hm[0];
      text2_b = hm[1];
      text1_a = hm[2];
      text1_b = hm[3];
    }
    var mid_common = hm[4];
    return [text1_a, text1_b, text2_a, text2_b, mid_common];
  };

  /**
   * Reorder and merge like edit sections.  Merge equalities.
   * Any edit section can move as long as it doesn't cross an equality.
   * @param {Array} diffs Array of diff tuples.
   */
  function diff_cleanupMerge(diffs) {
    diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.
    var pointer = 0;
    var count_delete = 0;
    var count_insert = 0;
    var text_delete = '';
    var text_insert = '';
    var commonlength;
    while (pointer < diffs.length) {
      switch (diffs[pointer][0]) {
        case DIFF_INSERT:
          count_insert++;
          text_insert += diffs[pointer][1];
          pointer++;
          break;
        case DIFF_DELETE:
          count_delete++;
          text_delete += diffs[pointer][1];
          pointer++;
          break;
        case DIFF_EQUAL:
          // Upon reaching an equality, check for prior redundancies.
          if (count_delete + count_insert > 1) {
            if (count_delete !== 0 && count_insert !== 0) {
              // Factor out any common prefixies.
              commonlength = diff_commonPrefix(text_insert, text_delete);
              if (commonlength !== 0) {
                if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                  diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                } else {
                  diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                  pointer++;
                }
                text_insert = text_insert.substring(commonlength);
                text_delete = text_delete.substring(commonlength);
              }
              // Factor out any common suffixies.
              commonlength = diff_commonSuffix(text_insert, text_delete);
              if (commonlength !== 0) {
                diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                text_insert = text_insert.substring(0, text_insert.length - commonlength);
                text_delete = text_delete.substring(0, text_delete.length - commonlength);
              }
            }
            // Delete the offending records and add the merged ones.
            if (count_delete === 0) {
              diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
            } else if (count_insert === 0) {
              diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
            } else {
              diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
            }
            pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
          } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
            // Merge this equality with the previous one.
            diffs[pointer - 1][1] += diffs[pointer][1];
            diffs.splice(pointer, 1);
          } else {
            pointer++;
          }
          count_insert = 0;
          count_delete = 0;
          text_delete = '';
          text_insert = '';
          break;
      }
    }
    if (diffs[diffs.length - 1][1] === '') {
      diffs.pop(); // Remove the dummy entry at the end.
    }

    // Second pass: look for single edits surrounded on both sides by equalities
    // which can be shifted sideways to eliminate an equality.
    // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
    var changes = false;
    pointer = 1;
    // Intentionally ignore the first and last element (don't need checking).
    while (pointer < diffs.length - 1) {
      if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
        // This is a single edit surrounded by equalities.
        if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
          // Shift the edit over the previous equality.
          diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
          diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
          diffs.splice(pointer - 1, 1);
          changes = true;
        } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
          // Shift the edit over the next equality.
          diffs[pointer - 1][1] += diffs[pointer + 1][1];
          diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
          diffs.splice(pointer + 1, 1);
          changes = true;
        }
      }
      pointer++;
    }
    // If shifts were made, the diff needs reordering and another shift sweep.
    if (changes) {
      diff_cleanupMerge(diffs);
    }
  };

  var diff = diff_main;
  diff.INSERT = DIFF_INSERT;
  diff.DELETE = DIFF_DELETE;
  diff.EQUAL = DIFF_EQUAL;

  module.exports = diff;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var pSlice = Array.prototype.slice;
  var objectKeys = __webpack_require__(24);
  var isArguments = __webpack_require__(25);

  var deepEqual = module.exports = function (actual, expected, opts) {
    if (!opts) opts = {};
    // 7.1. All identical values are equivalent, as determined by ===.
    if (actual === expected) {
      return true;
    } else if (actual instanceof Date && expected instanceof Date) {
      return actual.getTime() === expected.getTime();

      // 7.3. Other pairs that do not both pass typeof value == 'object',
      // equivalence is determined by ==.
    } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
        return opts.strict ? actual === expected : actual == expected;

        // 7.4. For all other Object pairs, including Array objects, equivalence is
        // determined by having the same number of owned properties (as verified
        // with Object.prototype.hasOwnProperty.call), the same set of keys
        // (although not necessarily the same order), equivalent values for every
        // corresponding key, and an identical 'prototype' property. Note: this
        // accounts for both named and indexed properties on Arrays.
      } else {
          return objEquiv(actual, expected, opts);
        }
  };

  function isUndefinedOrNull(value) {
    return value === null || value === undefined;
  }

  function isBuffer(x) {
    if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number') return false;
    return true;
  }

  function objEquiv(a, b, opts) {
    var i, key;
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) return false;
    //~~~I've managed to break Object.keys through screwy arguments passing.
    //   Converting to array solves the problem.
    if (isArguments(a)) {
      if (!isArguments(b)) {
        return false;
      }
      a = pSlice.call(a);
      b = pSlice.call(b);
      return deepEqual(a, b, opts);
    }
    if (isBuffer(a)) {
      if (!isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) return false;
      for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    try {
      var ka = objectKeys(a),
          kb = objectKeys(b);
    } catch (e) {
      //happens when one is a string literal and the other isn't
      return false;
    }
    // having the same number of owned properties (keys incorporates
    // hasOwnProperty)
    if (ka.length != kb.length) return false;
    //the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    //~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i]) return false;
    }
    //equivalent values for every corresponding key, and
    //~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!deepEqual(a[key], b[key], opts)) return false;
    }
    return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
  }

/***/ },
/* 24 */
/***/ function(module, exports) {

  'use strict';

  exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

  exports.shim = shim;
  function shim(obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }return keys;
  }

/***/ },
/* 25 */
/***/ function(module, exports) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var supportsArgumentsClass = function () {
    return Object.prototype.toString.call(arguments);
  }() == '[object Arguments]';

  exports = module.exports = supportsArgumentsClass ? supported : unsupported;

  exports.supported = supported;
  function supported(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
  };

  exports.unsupported = unsupported;
  function unsupported(object) {
    return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
  };

/***/ },
/* 26 */
/***/ function(module, exports) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var hasOwn = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;

  var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
      return Array.isArray(arr);
    }

    return toStr.call(arr) === '[object Array]';
  };

  var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
      return false;
    }

    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for (key in obj) {/**/}

    return typeof key === 'undefined' || hasOwn.call(obj, key);
  };

  module.exports = function extend() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0],
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
    } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function' || target == null) {
      target = {};
    }

    for (; i < length; ++i) {
      options = arguments[i];
      // Only deal with non-null/undefined values
      if (options != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target !== copy) {
            // Recurse if we're merging plain objects or arrays
            if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArray(src) ? src : [];
              } else {
                clone = src && isPlainObject(src) ? src : {};
              }

              // Never move original objects, clone them
              target[name] = extend(deep, clone, copy);

              // Don't bring in undefined values
            } else if (typeof copy !== 'undefined') {
                target[name] = copy;
              }
          }
        }
      }
    }

    // Return the modified object
    return target;
  };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var equal = __webpack_require__(23);
  var extend = __webpack_require__(26);

  var lib = {
    attributes: {
      compose: function compose(a, b, keepNull) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') a = {};
        if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') b = {};
        var attributes = extend(true, {}, b);
        if (!keepNull) {
          attributes = Object.keys(attributes).reduce(function (copy, key) {
            if (attributes[key] != null) {
              copy[key] = attributes[key];
            }
            return copy;
          }, {});
        }
        for (var key in a) {
          if (a[key] !== undefined && b[key] === undefined) {
            attributes[key] = a[key];
          }
        }
        return Object.keys(attributes).length > 0 ? attributes : undefined;
      },

      diff: function diff(a, b) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') a = {};
        if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') b = {};
        var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
          if (!equal(a[key], b[key])) {
            attributes[key] = b[key] === undefined ? null : b[key];
          }
          return attributes;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
      },

      transform: function transform(a, b, priority) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') return b;
        if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return undefined;
        if (!priority) return b; // b simply overwrites us without priority
        var attributes = Object.keys(b).reduce(function (attributes, key) {
          if (a[key] === undefined) attributes[key] = b[key]; // null is a valid value
          return attributes;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
      }
    },

    iterator: function iterator(ops) {
      return new Iterator(ops);
    },

    length: function length(op) {
      if (typeof op['delete'] === 'number') {
        return op['delete'];
      } else if (typeof op.retain === 'number') {
        return op.retain;
      } else {
        return typeof op.insert === 'string' ? op.insert.length : 1;
      }
    }
  };

  function Iterator(ops) {
    this.ops = ops;
    this.index = 0;
    this.offset = 0;
  };

  Iterator.prototype.hasNext = function () {
    return this.peekLength() < Infinity;
  };

  Iterator.prototype.next = function (length) {
    if (!length) length = Infinity;
    var nextOp = this.ops[this.index];
    if (nextOp) {
      var offset = this.offset;
      var opLength = lib.length(nextOp);
      if (length >= opLength - offset) {
        length = opLength - offset;
        this.index += 1;
        this.offset = 0;
      } else {
        this.offset += length;
      }
      if (typeof nextOp['delete'] === 'number') {
        return { 'delete': length };
      } else {
        var retOp = {};
        if (nextOp.attributes) {
          retOp.attributes = nextOp.attributes;
        }
        if (typeof nextOp.retain === 'number') {
          retOp.retain = length;
        } else if (typeof nextOp.insert === 'string') {
          retOp.insert = nextOp.insert.substr(offset, length);
        } else {
          // offset should === 0, length should === 1
          retOp.insert = nextOp.insert;
        }
        return retOp;
      }
    } else {
      return { retain: Infinity };
    }
  };

  Iterator.prototype.peekLength = function () {
    if (this.ops[this.index]) {
      // Should never return 0 if our index is being managed correctly
      return lib.length(this.ops[this.index]) - this.offset;
    } else {
      return Infinity;
    }
  };

  Iterator.prototype.peekType = function () {
    if (this.ops[this.index]) {
      if (typeof this.ops[this.index]['delete'] === 'number') {
        return 'delete';
      } else if (typeof this.ops[this.index].retain === 'number') {
        return 'retain';
      } else {
        return 'insert';
      }
    }
    return 'retain';
  };

  module.exports = lib;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _op = __webpack_require__(27);

  var _op2 = _interopRequireDefault(_op);

  var _emitter = __webpack_require__(29);

  var _emitter2 = _interopRequireDefault(_emitter);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  var _clone = __webpack_require__(37);

  var _clone2 = _interopRequireDefault(_clone);

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Editor = function () {
    function Editor(scroll, emitter) {
      _classCallCheck(this, Editor);

      this.scroll = scroll;
      this.emitter = emitter;
      this.emitter.on(_emitter2.default.events.SCROLL_UPDATE, this.update, this);
      this.delta = this.getDelta();
      this.enable();
    }

    _createClass(Editor, [{
      key: 'applyDelta',
      value: function applyDelta(delta) {
        var _this = this;

        var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

        var consumeNextNewline = false;
        delta.ops.reduce(function (index, op) {
          if (typeof op.delete === 'number') {
            _this.scroll.deleteAt(index, op.delete);
            return index;
          }
          var length = op.retain || op.insert.length || 1;
          var attributes = op.attributes || {};
          if (op.insert != null) {
            var _handleOldEmbed = handleOldEmbed(op, attributes);

            var _handleOldEmbed2 = _slicedToArray(_handleOldEmbed, 2);

            op = _handleOldEmbed2[0];
            attributes = _handleOldEmbed2[1];

            if (typeof op.insert === 'string') {
              var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
              length = text.length;
              if (text.endsWith('\n') && consumeNextNewline) {
                consumeNextNewline = false;
                text = text.slice(0, -1);
              }
              if (index >= _this.scroll.length() && !text.endsWith('\n')) {
                consumeNextNewline = true;
              }
              _this.scroll.insertAt(index, text);

              var _scroll$line = _this.scroll.line(index);

              var _scroll$line2 = _slicedToArray(_scroll$line, 2);

              var line = _scroll$line2[0];
              var offset = _scroll$line2[1];

              var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
              if (line instanceof _block2.default) {
                var _line$descendant = line.descendant(_parchment2.default.Leaf, offset);

                var _line$descendant2 = _slicedToArray(_line$descendant, 1);

                var leaf = _line$descendant2[0];

                formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
              }
              attributes = _op2.default.attributes.diff(formats, attributes) || {};
            } else if (_typeof(op.insert) === 'object') {
              var key = Object.keys(op.insert)[0]; // There should only be one key
              if (key != null) {
                _this.scroll.insertAt(index, key, op.insert[key]);
                // Block embeds themselves already represent newline
                if (_parchment2.default.query(key, _parchment2.default.Scope.BLOCK) != null) {
                  consumeNextNewline = true;
                }
              }
            }
          }
          Object.keys(attributes).forEach(function (name) {
            _this.scroll.formatAt(index, length, name, attributes[name]);
          });
          return index + length;
        }, 0);
        this.update(source);
      }
    }, {
      key: 'deleteText',
      value: function deleteText(index, length) {
        var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

        this.scroll.deleteAt(index, length);
        this.update(source);
      }
    }, {
      key: 'enable',
      value: function enable() {
        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        this.scroll.domNode.setAttribute('contenteditable', enabled);
      }
    }, {
      key: 'formatLine',
      value: function formatLine(index, length) {
        var _this2 = this;

        var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

        this.scroll.update();
        Object.keys(formats).forEach(function (format) {
          _this2.scroll.lines(index, Math.max(length, 1)).forEach(function (line) {
            line.format(format, formats[format]);
          });
        });
        this.scroll.optimize();
        this.update(source);
      }
    }, {
      key: 'formatText',
      value: function formatText(index, length) {
        var _this3 = this;

        var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

        Object.keys(formats).forEach(function (format) {
          _this3.scroll.formatAt(index, length, format, formats[format]);
        });
        this.update(source);
      }
    }, {
      key: 'getContents',
      value: function getContents(index, length) {
        return this.delta.slice(index, index + length);
      }
    }, {
      key: 'getDelta',
      value: function getDelta() {
        return this.scroll.lines().reduce(function (delta, line) {
          return delta.concat(line.delta());
        }, new _delta2.default());
      }
    }, {
      key: 'getFormat',
      value: function getFormat(index) {
        var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var lines = [],
            leaves = [];
        if (length === 0) {
          this.scroll.path(index).forEach(function (path) {
            var _path = _slicedToArray(path, 2);

            var blot = _path[0];
            var offset = _path[1];

            if (blot instanceof _block2.default) {
              lines.push(blot);
            } else if (blot instanceof _parchment2.default.Leaf) {
              leaves.push(blot);
            }
          });
        } else {
          lines = this.scroll.lines(index, length);
          leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
        }
        var formatsArr = [lines, leaves].map(function (blots) {
          if (blots.length === 0) return {};
          var formats = (0, _block.bubbleFormats)(blots.shift());
          while (Object.keys(formats).length > 0) {
            var blot = blots.shift();
            if (blot == null) return formats;
            formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
          }
          return formats;
        });
        return _extend2.default.apply(_extend2.default, formatsArr);
      }
    }, {
      key: 'getText',
      value: function getText(index, length) {
        return this.getContents(index, length).ops.map(function (op) {
          return typeof op.insert === 'string' ? op.insert : '';
        }).join('');
      }
    }, {
      key: 'insertEmbed',
      value: function insertEmbed(index, embed, value) {
        var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

        this.scroll.insertAt(index, embed, value);
        this.update(source);
      }
    }, {
      key: 'insertText',
      value: function insertText(index, text) {
        var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

        text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        this.scroll.insertAt(index, text);
        this.formatText(index, text.length, formats, source);
      }
    }, {
      key: 'isBlank',
      value: function isBlank() {
        if (this.scroll.children.length == 0) return true;
        if (this.scroll.children.length > 1) return false;
        var child = this.scroll.children.head;
        return child.length() <= 1 && Object.keys(child.formats()).length == 0;
      }
    }, {
      key: 'removeFormat',
      value: function removeFormat(index, length) {
        var text = this.getText(index, length);

        var _scroll$line3 = this.scroll.line(index + length);

        var _scroll$line4 = _slicedToArray(_scroll$line3, 2);

        var line = _scroll$line4[0];
        var offset = _scroll$line4[1];

        var suffixLength = 0,
            suffix = new _delta2.default();
        if (line != null) {
          suffixLength = line.length() - offset;
          suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
        }
        var contents = this.getContents(index, length + suffixLength);
        var diff = contents.diff(new _delta2.default().insert(text).concat(suffix));
        var delta = new _delta2.default().retain(index).concat(diff);
        this.applyDelta(delta);
      }
    }, {
      key: 'update',
      value: function update() {
        var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

        var oldDelta = this.delta;
        this.delta = this.getDelta();
        var change = oldDelta.diff(this.delta);
        if (change.length() > 0) {
          this.emitter.emit(_emitter2.default.events.TEXT_CHANGE, change, oldDelta, source);
        }
      }
    }]);

    return Editor;
  }();

  function combineFormats(formats, combined) {
    return Object.keys(combined).reduce(function (merged, name) {
      if (formats[name] == null) return merged;
      if (combined[name] === formats[name]) {
        merged[name] = combined[name];
      } else if (Array.isArray(combined[name])) {
        if (combined[name].indexOf(formats[name]) < 0) {
          merged[name] = combined[name].concat([formats[name]]);
        }
      } else {
        merged[name] = [combined[name], formats[name]];
      }
      return merged;
    }, {});
  }

  function handleOldEmbed(op, attributes) {
    if (op.insert === 1) {
      attributes = (0, _clone2.default)(attributes);
      op = {
        insert: { image: attributes.image },
        attributes: attributes
      };
      delete attributes['image'];
    }
    return [op, attributes];
  }

  exports.default = Editor;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _eventemitter = __webpack_require__(30);

  var _eventemitter2 = _interopRequireDefault(_eventemitter);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var debug = (0, _logger2.default)('quill:events');

  var Emitter = function (_EventEmitter) {
    _inherits(Emitter, _EventEmitter);

    function Emitter() {
      _classCallCheck(this, Emitter);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Emitter).call(this));

      _this.on('error', debug.error);
      return _this;
    }

    _createClass(Emitter, [{
      key: 'emit',
      value: function emit() {
        debug.log.apply(debug, arguments);
        _get(Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
      }
    }]);

    return Emitter;
  }(_eventemitter2.default);

  Emitter.events = {
    READY: 'ready',
    SCROLL_OPTIMIZE: 'scroll-optimize',
    SCROLL_BEFORE_UPDATE: 'scroll-before-update',
    SCROLL_UPDATE: 'scroll-update',
    SELECTION_CHANGE: 'selection-change',
    TEXT_CHANGE: 'text-change'
  };
  Emitter.sources = {
    API: 'api',
    SILENT: 'silent',
    USER: 'user'
  };

  exports.default = Emitter;

/***/ },
/* 30 */
/***/ function(module, exports) {

  'use strict';

  var has = Object.prototype.hasOwnProperty;

  //
  // We store our EE objects in a plain object whose properties are event names.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // `~` to make sure that the built-in object properties are not overridden or
  // used as an attack vector.
  // We also assume that `Object.create(null)` is available when the event name
  // is an ES6 Symbol.
  //
  var prefix = typeof Object.create !== 'function' ? '~' : false;

  /**
   * Representation of a single EventEmitter function.
   *
   * @param {Function} fn Event handler to be called.
   * @param {Mixed} context Context for function execution.
   * @param {Boolean} [once=false] Only emit once
   * @api private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Minimal EventEmitter interface that is molded against the Node.js
   * EventEmitter interface.
   *
   * @constructor
   * @api public
   */
  function EventEmitter() {} /* Nothing to set */

  /**
   * Hold the assigned EventEmitters by name.
   *
   * @type {Object}
   * @private
   */
  EventEmitter.prototype._events = undefined;

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @api public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var events = this._events,
        names = [],
        name;

    if (!events) return names;

    for (name in events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return a list of assigned event listeners.
   *
   * @param {String} event The events that should be listed.
   * @param {Boolean} exists We only need to know if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event,
        available = this._events && this._events[evt];

    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];

    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }

    return ee;
  };

  /**
   * Emit an event to all registered event listeners.
   *
   * @param {String} event The name of the event.
   * @returns {Boolean} Indication if we've emitted an event.
   * @api public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events || !this._events[evt]) return false;

    var listeners = this._events[evt],
        len = arguments.length,
        args,
        i;

    if ('function' === typeof listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
          j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Register a new EventListener for the given event.
   *
   * @param {String} event Name of the event.
   * @param {Function} fn Callback function.
   * @param {Mixed} [context=this] The context of the function.
   * @api public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this),
        evt = prefix ? prefix + event : event;

    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;else {
      if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
    }

    return this;
  };

  /**
   * Add an EventListener that's only called once.
   *
   * @param {String} event Name of the event.
   * @param {Function} fn Callback function.
   * @param {Mixed} [context=this] The context of the function.
   * @api public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true),
        evt = prefix ? prefix + event : event;

    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;else {
      if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
    }

    return this;
  };

  /**
   * Remove event listeners.
   *
   * @param {String} event The event we want to remove.
   * @param {Function} fn The listener that we need to find.
   * @param {Mixed} context Only remove listeners matching this context.
   * @param {Boolean} once Only remove once listeners.
   * @api public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events || !this._events[evt]) return this;

    var listeners = this._events[evt],
        events = [];

    if (fn) {
      if (listeners.fn) {
        if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
          events.push(listeners);
        }
      } else {
        for (var i = 0, length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) {
      this._events[evt] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[evt];
    }

    return this;
  };

  /**
   * Remove all listeners or only the listeners for the specified event.
   *
   * @param {String} event The event want to remove all listeners for.
   * @api public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    if (!this._events) return this;

    if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // This function doesn't apply anymore.
  //
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Expose the module.
  //
  if ('undefined' !== typeof module) {
    module.exports = EventEmitter;
  }

/***/ },
/* 31 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var levels = ['error', 'warn', 'log', 'info'];
  var level = 'warn';

  function debug(method) {
    if (levels.indexOf(method) <= levels.indexOf(level)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      console[method].apply(console, args);
    }
  }

  function namespace(ns) {
    return levels.reduce(function (logger, method) {
      logger[method] = debug.bind(console, method, ns);
      return logger;
    }, {});
  }

  debug.level = namespace.level = function (newLevel) {
    level = newLevel;
  };

  exports.default = namespace;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _break = __webpack_require__(33);

  var _break2 = _interopRequireDefault(_break);

  var _embed = __webpack_require__(34);

  var _embed2 = _interopRequireDefault(_embed);

  var _inline = __webpack_require__(35);

  var _inline2 = _interopRequireDefault(_inline);

  var _text = __webpack_require__(36);

  var _text2 = _interopRequireDefault(_text);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var NEWLINE_LENGTH = 1;

  var BlockEmbed = function (_Embed) {
    _inherits(BlockEmbed, _Embed);

    function BlockEmbed() {
      _classCallCheck(this, BlockEmbed);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(BlockEmbed).apply(this, arguments));
    }

    _createClass(BlockEmbed, [{
      key: 'attach',
      value: function attach() {
        _get(Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
        this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
      }
    }, {
      key: 'delta',
      value: function delta() {
        return new _delta2.default().insert(this.value(), this.formats()).insert('\n', this.attributes.values());
      }
    }, {
      key: 'formatAt',
      value: function formatAt(index, length, format, value) {
        if (index + length === this.length()) {
          var attribute = _parchment2.default.query(format, _parchment2.default.Scope.ATTRIBUTE);
          if (attribute != null) {
            this.attributes.attribute(attribute, value);
          }
          if (length <= 1) return;
        }
        this.format(format, value);
      }
    }, {
      key: 'insertAt',
      value: function insertAt(index, value, def) {
        if (typeof value === 'string' && value.startsWith('\n')) {
          var block = _parchment2.default.create('block');
          this.parent.insertBefore(block, index === 0 ? this : this.next);
          block.insertAt(0, value.slice(1));
        }
      }
    }, {
      key: 'length',
      value: function length() {
        return _get(Object.getPrototypeOf(BlockEmbed.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
    }]);

    return BlockEmbed;
  }(_embed2.default);

  BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
  // It is important for cursor behavior BlockEmbeds use tags that are block level elements

  var Block = function (_Parchment$Block) {
    _inherits(Block, _Parchment$Block);

    function Block() {
      _classCallCheck(this, Block);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Block).apply(this, arguments));
    }

    _createClass(Block, [{
      key: 'delta',
      value: function delta() {
        return this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _delta2.default()).insert('\n', bubbleFormats(this));
      }
    }, {
      key: 'formatAt',
      value: function formatAt(index, length, name, value) {
        if (length <= 0) return;
        if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          if (index + length === this.length()) {
            this.format(name, value);
          }
        } else {
          _get(Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
        }
      }
    }, {
      key: 'insertAt',
      value: function insertAt(index, value, def) {
        if (def != null) return _get(Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
        if (value.length === 0) return;
        var lines = value.split('\n');
        var text = lines.shift();
        if (text.length > 0) {
          if (index < this.length() - 1 || this.children.tail == null) {
            _get(Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
          } else {
            this.children.tail.insertAt(this.children.tail.length(), text);
          }
        }
        if (lines.length > 0) {
          var next = this.split(index + text.length, true);
          next.insertAt(0, lines.join('\n'));
        }
      }
    }, {
      key: 'insertBefore',
      value: function insertBefore(blot, ref) {
        var head = this.children.head;
        _get(Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
        if (head instanceof _break2.default) {
          head.remove();
        }
      }
    }, {
      key: 'length',
      value: function length() {
        return _get(Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
    }, {
      key: 'path',
      value: function path(index) {
        return _get(Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
      }
    }, {
      key: 'split',
      value: function split(index) {
        var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
          var clone = this.clone();
          if (index === 0) {
            this.parent.insertBefore(clone, this);
            return this;
          } else {
            this.parent.insertBefore(clone, this.next);
            return clone;
          }
        } else {
          return _get(Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        }
      }
    }]);

    return Block;
  }(_parchment2.default.Block);

  Block.blotName = 'block';
  Block.tagName = 'P';
  Block.defaultChild = 'break';
  Block.allowedChildren = [_inline2.default, _embed2.default, _text2.default];

  function bubbleFormats(blot) {
    var formats = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (blot == null) return formats;
    if (typeof blot.formats === 'function') {
      formats = (0, _extend2.default)(formats, blot.formats());
    }
    if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
      return formats;
    }
    return bubbleFormats(blot.parent, formats);
  }

  exports.bubbleFormats = bubbleFormats;
  exports.BlockEmbed = BlockEmbed;
  exports.default = Block;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _embed = __webpack_require__(34);

  var _embed2 = _interopRequireDefault(_embed);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Break = function (_Embed) {
    _inherits(Break, _Embed);

    function Break() {
      _classCallCheck(this, Break);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Break).apply(this, arguments));
    }

    _createClass(Break, [{
      key: 'insertInto',
      value: function insertInto(parent, ref) {
        if (parent.children.length === 0) {
          _get(Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
        }
      }
    }, {
      key: 'length',
      value: function length() {
        return 0;
      }
    }, {
      key: 'value',
      value: function value() {
        return '';
      }
    }], [{
      key: 'value',
      value: function value(domNode) {
        return undefined;
      }
    }]);

    return Break;
  }(_embed2.default);

  Break.blotName = 'break';
  Break.tagName = 'BR';

  exports.default = Break;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Embed = function (_Parchment$Embed) {
    _inherits(Embed, _Parchment$Embed);

    function Embed() {
      _classCallCheck(this, Embed);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Embed).apply(this, arguments));
    }

    return Embed;
  }(_parchment2.default.Embed);

  exports.default = Embed;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _embed = __webpack_require__(34);

  var _embed2 = _interopRequireDefault(_embed);

  var _text = __webpack_require__(36);

  var _text2 = _interopRequireDefault(_text);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Inline = function (_Parchment$Inline) {
    _inherits(Inline, _Parchment$Inline);

    function Inline() {
      _classCallCheck(this, Inline);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Inline).apply(this, arguments));
    }

    _createClass(Inline, [{
      key: 'formatAt',
      value: function formatAt(index, length, name, value) {
        if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
          var blot = this.isolate(index, length);
          blot.wrap(name, value);
        } else {
          _get(Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
        }
      }
    }], [{
      key: 'compare',
      value: function compare(self, other) {
        return Inline.order.indexOf(self) - Inline.order.indexOf(other);
      }
    }]);

    return Inline;
  }(_parchment2.default.Inline);

  Inline.allowedChildren = [Inline, _embed2.default, _text2.default];
  // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
  Inline.order = ['cursor', 'inline', // Must be lower
  'code', 'underline', 'strike', 'italic', 'bold', 'script', 'link' // Must be higher
  ];

  exports.default = Inline;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TextBlot = function (_Parchment$Text) {
    _inherits(TextBlot, _Parchment$Text);

    function TextBlot() {
      _classCallCheck(this, TextBlot);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TextBlot).apply(this, arguments));
    }

    return TextBlot;
  }(_parchment2.default.Text);

  exports.default = TextBlot;

/***/ },
/* 37 */
/***/ function(module, exports) {

  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var clone = function () {
    'use strict';

    /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
    */

    function clone(parent, circular, depth, prototype) {
      var filter;
      if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
        depth = circular.depth;
        prototype = circular.prototype;
        filter = circular.filter;
        circular = circular.circular;
      }
      // maintain two arrays for circular references, where corresponding parents
      // and children have the same index
      var allParents = [];
      var allChildren = [];

      var useBuffer = typeof Buffer != 'undefined';

      if (typeof circular == 'undefined') circular = true;

      if (typeof depth == 'undefined') depth = Infinity;

      // recurse this function so we don't reset allParents and allChildren
      function _clone(parent, depth) {
        // cloning null always returns null
        if (parent === null) return null;

        if (depth == 0) return parent;

        var child;
        var proto;
        if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
          return parent;
        }

        if (clone.__isArray(parent)) {
          child = [];
        } else if (clone.__isRegExp(parent)) {
          child = new RegExp(parent.source, __getRegExpFlags(parent));
          if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (clone.__isDate(parent)) {
          child = new Date(parent.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent)) {
          child = new Buffer(parent.length);
          parent.copy(child);
          return child;
        } else {
          if (typeof prototype == 'undefined') {
            proto = Object.getPrototypeOf(parent);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }

        if (circular) {
          var index = allParents.indexOf(parent);

          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent);
          allChildren.push(child);
        }

        for (var i in parent) {
          var attrs;
          if (proto) {
            attrs = Object.getOwnPropertyDescriptor(proto, i);
          }

          if (attrs && attrs.set == null) {
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        }

        return child;
      }

      return _clone(parent, depth);
    }

    /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
    clone.clonePrototype = function clonePrototype(parent) {
      if (parent === null) return null;

      var c = function c() {};
      c.prototype = parent;
      return new c();
    };

    // private utility functions

    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    };
    clone.__objToStr = __objToStr;

    function __isDate(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
    };
    clone.__isDate = __isDate;

    function __isArray(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
    };
    clone.__isArray = __isArray;

    function __isRegExp(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
    };
    clone.__isRegExp = __isRegExp;

    function __getRegExpFlags(re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    };
    clone.__getRegExpFlags = __getRegExpFlags;

    return clone;
  }();

  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = clone;
  }

/***/ },
/* 38 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Module = function Module(quill) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Module);

    this.quill = quill;
    this.options = options;
  };

  Module.DEFAULTS = {};

  exports.default = Module;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Range = undefined;

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _clone = __webpack_require__(37);

  var _clone2 = _interopRequireDefault(_clone);

  var _deepEqual = __webpack_require__(23);

  var _deepEqual2 = _interopRequireDefault(_deepEqual);

  var _break = __webpack_require__(33);

  var _break2 = _interopRequireDefault(_break);

  var _emitter = __webpack_require__(29);

  var _emitter2 = _interopRequireDefault(_emitter);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var debug = (0, _logger2.default)('quill:selection');

  var Range = function Range(index) {
    var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, Range);

    this.index = index;
    this.length = length;
  };

  var Selection = function () {
    function Selection(scroll, emitter) {
      var _this = this;

      _classCallCheck(this, Selection);

      this.emitter = emitter;
      this.scroll = scroll;
      this.root = this.scroll.domNode;
      this.cursor = _parchment2.default.create('cursor', this);
      // savedRange is last non-null range
      this.lastRange = this.savedRange = new Range(0, 0);
      ['keyup', 'mouseup', 'touchend', 'touchleave', 'focus', 'blur'].forEach(function (eventName) {
        _this.root.addEventListener(eventName, function () {
          // When range used to be a selection and user click within the selection,
          // the range now being a cursor has not updated yet without setTimeout
          setTimeout(_this.update.bind(_this, _emitter2.default.sources.USER), 100);
        });
      });
      this.emitter.on(_emitter2.default.events.TEXT_CHANGE, function (delta) {
        if (delta.length() > 0) {
          setTimeout(_this.update.bind(_this, _emitter2.default.sources.SILENT), 1);
        }
      });
      this.emitter.on(_emitter2.default.events.SCROLL_BEFORE_UPDATE, function () {
        var native = _this.getNativeRange();
        if (native == null) return;
        // TODO unclear if this has negative side effects
        _this.emitter.once(_emitter2.default.events.SCROLL_UPDATE, function () {
          try {
            // Check crash condition in FF https://bugzilla.mozilla.org/show_bug.cgi?id=1270235
            if (native.start.node.parentNode == null || native.end.node.parentNode == null) return;
            _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
          } catch (ignored) {}
        });
      });
      this.update(_emitter2.default.sources.SILENT);
    }

    _createClass(Selection, [{
      key: 'focus',
      value: function focus() {
        if (this.hasFocus()) return;
        this.root.focus();
        this.setRange(this.savedRange);
      }
    }, {
      key: 'format',
      value: function format(_format, value) {
        this.scroll.update();
        var nativeRange = this.getNativeRange();
        if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
        if (nativeRange.start.node !== this.cursor.textNode) {
          var blot = _parchment2.default.find(nativeRange.start.node, false);
          if (blot == null) return;
          // TODO Give blot ability to not split
          if (blot instanceof _parchment2.default.Leaf) {
            var after = blot.split(nativeRange.start.offset);
            blot.parent.insertBefore(this.cursor, after);
          } else {
            blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
          }
          this.cursor.attach();
        }
        this.cursor.format(_format, value);
        this.scroll.optimize();
        this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
        this.update();
      }
    }, {
      key: 'getBounds',
      value: function getBounds(index) {
        var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var bounds = void 0;var node = void 0;
        var _scroll$leaf = this.scroll.leaf(index);

        var _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2);

        var leaf = _scroll$leaf2[0];
        var offset = _scroll$leaf2[1];

        if (leaf == null) return null;

        var _leaf$position = leaf.position(offset, true);

        var _leaf$position2 = _slicedToArray(_leaf$position, 2);

        node = _leaf$position2[0];
        offset = _leaf$position2[1];

        var range = document.createRange();
        if (length > 0) {
          range.setStart(node, offset);

          var _scroll$leaf3 = this.scroll.leaf(index + length);

          var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

          leaf = _scroll$leaf4[0];
          offset = _scroll$leaf4[1];

          if (leaf == null) return null;

          var _leaf$position3 = leaf.position(offset, true);

          var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

          node = _leaf$position4[0];
          offset = _leaf$position4[1];

          range.setEnd(node, offset);
          bounds = range.getBoundingClientRect();
        } else {
          var side = 'left';
          if (node instanceof Text) {
            if (offset < node.data.length) {
              range.setStart(node, offset);
              range.setEnd(node, offset + 1);
            } else {
              range.setStart(node, offset - 1);
              range.setEnd(node, offset);
              side = 'right';
            }
            var rect = range.getBoundingClientRect();
          } else {
            if (leaf instanceof _break2.default) {
              var rect = leaf.parent.domNode.getBoundingClientRect();
            } else {
              var rect = leaf.domNode.getBoundingClientRect();
            }
            if (offset > 0) side = 'right';
          }
          bounds = {
            height: rect.height,
            left: rect[side],
            width: 0,
            top: rect.top
          };
        }
        var containerBounds = this.root.parentNode.getBoundingClientRect();
        return {
          left: bounds.left - containerBounds.left,
          right: bounds.left + bounds.width - containerBounds.left,
          top: bounds.top - containerBounds.top,
          bottom: bounds.top + bounds.height - containerBounds.top,
          height: bounds.height,
          width: bounds.width
        };
      }
    }, {
      key: 'getNativeRange',
      value: function getNativeRange() {
        var selection = document.getSelection();
        if (selection == null || selection.rangeCount <= 0) return null;
        var nativeRange = selection.getRangeAt(0);
        if (nativeRange == null) return null;
        if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
          return null;
        }
        var range = {
          start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
          end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
          native: nativeRange
        };
        [range.start, range.end].forEach(function (position) {
          var node = position.node,
              offset = position.offset;
          while (!(node instanceof Text) && node.childNodes.length > 0) {
            if (node.childNodes.length > offset) {
              node = node.childNodes[offset];
              offset = 0;
            } else if (node.childNodes.length === offset) {
              node = node.lastChild;
              offset = node instanceof Text ? node.data.length : node.childNodes.length;
            } else {
              break;
            }
          }
          position.node = node, position.offset = offset;
        });
        return range;
      }
    }, {
      key: 'getRange',
      value: function getRange() {
        var _this2 = this;

        if (!this.hasFocus()) return [null, null];
        var range = this.getNativeRange();
        if (range == null) return [null, null];
        var positions = [[range.start.node, range.start.offset]];
        if (!range.native.collapsed) {
          positions.push([range.end.node, range.end.offset]);
        }
        var indexes = positions.map(function (position) {
          var _position = _slicedToArray(position, 2);

          var node = _position[0];
          var offset = _position[1];

          var blot = _parchment2.default.find(node, true);
          var index = blot.offset(_this2.scroll);
          if (offset === 0) {
            return index;
          } else if (blot instanceof _parchment2.default.Container) {
            return index + blot.length();
          } else {
            return index + blot.index(node, offset);
          }
        });
        var start = Math.min.apply(Math, _toConsumableArray(indexes)),
            end = Math.max.apply(Math, _toConsumableArray(indexes));
        return [new Range(start, end - start), range];
      }
    }, {
      key: 'hasFocus',
      value: function hasFocus() {
        return document.activeElement === this.root;
      }
    }, {
      key: 'scrollIntoView',
      value: function scrollIntoView() {
        var range = arguments.length <= 0 || arguments[0] === undefined ? this.lastRange : arguments[0];

        if (range == null) return;
        var bounds = this.getBounds(range.index, range.length);
        if (this.root.offsetHeight < bounds.bottom) {
          var _scroll$line = this.scroll.line(range.index + range.length);

          var _scroll$line2 = _slicedToArray(_scroll$line, 2);

          var line = _scroll$line2[0];
          var offset = _scroll$line2[1];

          this.root.scrollTop = line.domNode.offsetTop + line.domNode.offsetHeight;
        } else if (bounds.top < 0) {
          var _scroll$line3 = this.scroll.line(range.index);

          var _scroll$line4 = _slicedToArray(_scroll$line3, 2);

          var _line = _scroll$line4[0];
          var _offset = _scroll$line4[1];

          this.root.scrollTop = _line.domNode.offsetTop;
        }
      }
    }, {
      key: 'setNativeRange',
      value: function setNativeRange(startNode, startOffset) {
        var endNode = arguments.length <= 2 || arguments[2] === undefined ? startNode : arguments[2];
        var endOffset = arguments.length <= 3 || arguments[3] === undefined ? startOffset : arguments[3];

        debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
        var selection = document.getSelection();
        if (selection == null) return;
        if (startNode != null) {
          if (!this.hasFocus()) this.root.focus();
          var nativeRange = this.getNativeRange();
          if (nativeRange == null || startNode !== nativeRange.start.node || startOffset !== nativeRange.start.offset || endNode !== nativeRange.end.node || endOffset !== nativeRange.end.offset) {
            var range = document.createRange();
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        } else {
          selection.removeAllRanges();
          this.root.blur();
          document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
        }
      }
    }, {
      key: 'setRange',
      value: function setRange(range) {
        var _this3 = this;

        var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

        debug.info('setRange', range);
        if (range != null) {
          (function () {
            var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
            var args = [];
            indexes.forEach(function (index, i) {
              var node = void 0;
              var _scroll$leaf5 = _this3.scroll.leaf(index);

              var _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2);

              var leaf = _scroll$leaf6[0];
              var offset = _scroll$leaf6[1];

              var _leaf$position5 = leaf.position(offset, i !== 0);

              var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

              node = _leaf$position6[0];
              offset = _leaf$position6[1];

              args.push(node, offset);
            });
            _this3.setNativeRange.apply(_this3, args);
          })();
        } else {
          this.setNativeRange(null);
        }
        this.update(source);
      }
    }, {
      key: 'update',
      value: function update() {
        var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

        var nativeRange = void 0,
            oldRange = this.lastRange;

        var _getRange = this.getRange();

        var _getRange2 = _slicedToArray(_getRange, 2);

        this.lastRange = _getRange2[0];
        nativeRange = _getRange2[1];

        if (this.lastRange != null) {
          this.savedRange = this.lastRange;
        }
        if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
          if (nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
            this.cursor.restore();
          }
          if (source === _emitter2.default.sources.SILENT) return;
          this.emitter.emit(_emitter2.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), source);
        }
      }
    }]);

    return Selection;
  }();

  function contains(parent, descendant) {
    try {
      // Firefox inserts inaccessible nodes around video elements
      descendant.parentNode;
    } catch (e) {
      return false;
    }
    // IE11 has bug with Text nodes
    // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
    if (descendant instanceof Text) {
      descendant = descendant.parentNode;
    }
    return parent.contains(descendant);
  }

  exports.Range = Range;
  exports.default = Selection;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _emitter = __webpack_require__(29);

  var _emitter2 = _interopRequireDefault(_emitter);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var debug = (0, _logger2.default)('[quill:theme]');

  var Theme = function () {
    function Theme(quill, options) {
      var _this = this;

      _classCallCheck(this, Theme);

      this.quill = quill;
      this.options = (0, _extend2.default)({}, this.constructor.DEFAULTS, options);
      this.options.modules = Object.keys(this.options.modules).reduce(function (modules, name) {
        var value = _this.options.modules[name];
        // allow new Quill('#editor', { modules: { myModule: true }});
        modules[name] = value === true ? {} : value;
        return modules;
      }, {});
      this.modules = {};
      this.quill.once(_emitter2.default.events.READY, this.init.bind(this));
    }

    _createClass(Theme, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        Object.keys(this.options.modules).forEach(function (name) {
          if (_this2.modules[name] == null) {
            _this2.addModule(name);
          }
        });
      }
    }, {
      key: 'addModule',
      value: function addModule(name) {
        var moduleClass = this.quill.constructor.import('modules/' + name);
        if (moduleClass == null) {
          return debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
        }
        var userOptions = this.options.modules[name] || {};
        if ((typeof userOptions === 'undefined' ? 'undefined' : _typeof(userOptions)) === 'object' && userOptions.constructor === Object) {
          var themeOptions = (this.constructor.DEFAULTS.modules || {})[name];
          userOptions = (0, _extend2.default)({}, moduleClass.DEFAULTS || {}, themeOptions, userOptions);
        }
        this.modules[name] = new moduleClass(this.quill, userOptions);
        return this.modules[name];
      }
    }]);

    return Theme;
  }();

  Theme.DEFAULTS = {
    modules: {}
  };
  Theme.themes = {
    'default': Theme
  };

  exports.default = Theme;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Container = function (_Parchment$Container) {
    _inherits(Container, _Parchment$Container);

    function Container() {
      _classCallCheck(this, Container);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
    }

    return Container;
  }(_parchment2.default.Container);

  Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

  exports.default = Container;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _embed = __webpack_require__(34);

  var _embed2 = _interopRequireDefault(_embed);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Cursor = function (_Embed) {
    _inherits(Cursor, _Embed);

    _createClass(Cursor, null, [{
      key: 'value',
      value: function value(domNode) {
        return undefined;
      }
    }]);

    function Cursor(domNode, selection) {
      _classCallCheck(this, Cursor);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cursor).call(this, domNode));

      _this.selection = selection;
      _this.textNode = document.createTextNode(Cursor.CONTENTS);
      _this.domNode.appendChild(_this.textNode);
      _this._length = 0;
      return _this;
    }

    _createClass(Cursor, [{
      key: 'format',
      value: function format(name, value) {
        if (this._length !== 0) {
          return _get(Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
        }
        var target = this,
            index = 0;
        this._length = Cursor.CONTENTS.length;
        while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
          index += target.offset(target.parent);
          target = target.parent;
        }
        if (target != null) {
          target.formatAt(index, Cursor.CONTENTS.length, name, value);
        }
        this._length = 0;
      }
    }, {
      key: 'index',
      value: function index(node, offset) {
        if (node === this.textNode) return 0;
        return _get(Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
      }
    }, {
      key: 'length',
      value: function length() {
        return this._length;
      }
    }, {
      key: 'position',
      value: function position(index) {
        return [this.textNode, 1];
      }
    }, {
      key: 'remove',
      value: function remove() {
        _get(Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
        this.parent = null;
      }
    }, {
      key: 'restore',
      value: function restore() {
        if (this.parent == null) return;
        var textNode = this.textNode;
        var range = this.selection.getNativeRange();
        if (this.textNode.data !== Cursor.CONTENTS) {
          var native = this.selection.getNativeRange();
          this.textNode.data = this.textNode.data.split(Cursor.CONTENTS).join('');
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
        this.remove();
        if (range != null && range.start.node === textNode && range.end.node === textNode) {
          this.selection.setNativeRange(textNode, Math.max(0, range.start.offset - 1), textNode, Math.max(0, range.end.offset - 1));
        }
      }
    }, {
      key: 'update',
      value: function update(mutations) {
        var _this2 = this;

        mutations.forEach(function (mutation) {
          if (mutation.type === 'characterData' && mutation.target === _this2.textNode) {
            _this2.restore();
          }
        });
      }
    }, {
      key: 'value',
      value: function value() {
        return '';
      }
    }]);

    return Cursor;
  }(_embed2.default);

  Cursor.blotName = 'cursor';
  Cursor.className = 'ql-cursor';
  Cursor.tagName = 'span';
  Cursor.CONTENTS = '﻿'; // Zero width no break space

  exports.default = Cursor;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _emitter = __webpack_require__(29);

  var _emitter2 = _interopRequireDefault(_emitter);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  var _container = __webpack_require__(41);

  var _container2 = _interopRequireDefault(_container);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var debug = (0, _logger2.default)('quill:scroll');

  function isLine(blot) {
    return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
  }

  var Scroll = function (_Parchment$Scroll) {
    _inherits(Scroll, _Parchment$Scroll);

    function Scroll(domNode, config) {
      _classCallCheck(this, Scroll);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scroll).call(this, domNode));

      _this.emitter = config.emitter;
      if (Array.isArray(config.whitelist)) {
        _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
          whitelist[format] = true;
          return whitelist;
        }, {});
      }
      _this.optimize();
      return _this;
    }

    _createClass(Scroll, [{
      key: 'deleteAt',
      value: function deleteAt(index, length) {
        var _line = this.line(index);

        var _line2 = _slicedToArray(_line, 2);

        var first = _line2[0];
        var firstOffset = _line2[1];

        var _line3 = this.line(index + length);

        var _line4 = _slicedToArray(_line3, 2);

        var last = _line4[0];
        var lastOffset = _line4[1];

        _get(Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
        if (last != null && first !== last && firstOffset > 0) {
          var lastChild = first.children.tail;
          last.moveChildren(first);
          last.remove();
        }
        this.optimize();
      }
    }, {
      key: 'formatAt',
      value: function formatAt(index, length, format, value) {
        if (this.whitelist != null && !this.whitelist[format]) return;
        _get(Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      }
    }, {
      key: 'insertAt',
      value: function insertAt(index, value, def) {
        if (def != null && this.whitelist != null && !this.whitelist[value]) return;
        if (index >= this.length()) {
          if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
            var blot = _parchment2.default.create(this.statics.defaultChild);
            this.appendChild(blot);
            if (def == null && value.endsWith('\n')) {
              value = value.slice(0, -1);
            }
            blot.insertAt(0, value, def);
          } else {
            var embed = _parchment2.default.create(value, def);
            this.appendChild(embed);
          }
        } else {
          _get(Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
        }
      }
    }, {
      key: 'insertBefore',
      value: function insertBefore(blot, ref) {
        if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
          var wrapper = _parchment2.default.create(this.statics.defaultChild);
          wrapper.appendChild(blot);
          blot = wrapper;
        }
        _get(Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
      }
    }, {
      key: 'leaf',
      value: function leaf(index) {
        return this.path(index).pop() || [null, -1];
      }
    }, {
      key: 'line',
      value: function line(index) {
        return this.descendant(isLine, index);
      }
    }, {
      key: 'lines',
      value: function lines(index, length) {
        return this.descendants(isLine, index, length);
      }
    }, {
      key: 'optimize',
      value: function optimize() {
        var mutations = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _get(Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations);
        if (mutations.length > 0) {
          this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations);
        }
      }
    }, {
      key: 'path',
      value: function path(index) {
        return _get(Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
      }
    }, {
      key: 'update',
      value: function update(mutations) {
        var source = _emitter2.default.sources.USER;
        if (typeof mutations === 'string') {
          source = mutations;
        }
        if (!Array.isArray(mutations)) {
          mutations = this.observer.takeRecords();
        }
        if (mutations.length > 0) {
          this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
        }
        _get(Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
        if (mutations.length > 0) {
          this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
        }
      }
    }]);

    return Scroll;
  }(_parchment2.default.Scroll);

  Scroll.blotName = 'scroll';
  Scroll.className = 'ql-editor';
  Scroll.tagName = 'DIV';
  Scroll.defaultChild = 'block';
  Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

  exports.default = Scroll;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _quill = __webpack_require__(19);

  var _quill2 = _interopRequireDefault(_quill);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  var _module = __webpack_require__(38);

  var _module2 = _interopRequireDefault(_module);

  var _block = __webpack_require__(32);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var debug = (0, _logger2.default)('quill:clipboard');

  var Clipboard = function (_Module) {
    _inherits(Clipboard, _Module);

    function Clipboard(quill, options) {
      _classCallCheck(this, Clipboard);

      if (options.matchers !== Clipboard.DEFAULTS.matchers) {
        options.matchers = Clipboard.DEFAULTS.matchers.concat(options.matchers);
      }

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clipboard).call(this, quill, options));

      _this.quill.root.addEventListener('copy', _this.onCopy.bind(_this));
      _this.quill.root.addEventListener('cut', _this.onCut.bind(_this));
      _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
      _this.container = _this.quill.addContainer('ql-clipboard');
      _this.container.setAttribute('contenteditable', true);
      _this.container.setAttribute('tabindex', -1);
      _this.matchers = [];
      _this.options.matchers.forEach(function (pair) {
        _this.addMatcher.apply(_this, _toConsumableArray(pair));
      });
      return _this;
    }

    _createClass(Clipboard, [{
      key: 'addMatcher',
      value: function addMatcher(selector, matcher) {
        this.matchers.push([selector, matcher]);
      }
    }, {
      key: 'convert',
      value: function convert(html) {
        var _this2 = this;

        var DOM_KEY = '__ql-matcher';
        if (typeof html === 'string') {
          this.container.innerHTML = html;
        }
        this.matchers.forEach(function (pair) {
          var _pair = _slicedToArray(pair, 2);

          var selector = _pair[0];
          var matcher = _pair[1];

          if (typeof selector === 'string') {
            [].forEach.call(_this2.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
          }
        });
        var traverse = function traverse(node) {
          // Post-order
          return [].reduce.call(node.childNodes || [], function (delta, childNode) {
            var childrenDelta = traverse(childNode);
            childrenDelta = _this2.matchers.reduce(function (childrenDelta, pair) {
              var _pair2 = _slicedToArray(pair, 2);

              var type = _pair2[0];
              var matcher = _pair2[1];

              if (type === true || childNode.nodeType === type) {
                childrenDelta = matcher(childNode, childrenDelta);
              }
              return childrenDelta;
            }, childrenDelta);
            childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
              return matcher(childNode, childrenDelta);
            }, childrenDelta);
            return delta.concat(childrenDelta);
          }, new _delta2.default());
        };
        var delta = traverse(this.container);
        // Remove trailing newline
        if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
          delta = delta.compose(new _delta2.default().retain(delta.length() - 1).delete(1));
        }
        debug.info('convert', this.container.innerHTML, delta);
        this.container.innerHTML = '';
        return delta;
      }
    }, {
      key: 'onCopy',
      value: function onCopy(e) {
        var range = this.quill.getSelection();
        if (range == null || range.length === 0 || e.defaultPrevented) return;
        var clipboard = e.clipboardData || window.clipboardData;
        clipboard.setData('text', this.quill.getText(range));
        if (e.clipboardData) {
          // IE11 does not let us set non-text data
          clipboard.setData('application/json', JSON.stringify(this.quill.getContents(range)));
        }
        e.preventDefault();
      }
    }, {
      key: 'onCut',
      value: function onCut(e) {
        if (e.defaultPrevented) return;
        this.onCopy(e);
        var range = this.quill.getSelection();
        this.quill.deleteText(range, _quill2.default.sources.USER);
        this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
      }
    }, {
      key: 'onPaste',
      value: function onPaste(e) {
        var _this3 = this;

        if (e.defaultPrevented) return;
        var range = this.quill.getSelection();
        var clipboard = e.clipboardData || window.clipboardData;
        var delta = new _delta2.default().retain(range.index).delete(range.length);
        var done = function done(delta) {
          _this3.quill.updateContents(delta, _quill2.default.sources.USER);
          // range.length contributes to delta.length()
          _this3.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
          _this3.quill.selection.scrollIntoView();
        };
        var intercept = function intercept(delta, callback) {
          _this3.container.focus();
          setTimeout(function () {
            var html = _this3.container.innerHTML;
            delta = delta.concat(_this3.convert());
            callback(delta);
          }, 1);
        };
        // Firefox types is an iterable, not array
        // IE11 types can be null
        if ([].indexOf.call(clipboard.types || [], 'application/json') > -1) {
          try {
            var pasteJSON = JSON.parse(clipboard.getData('application/json'));
            done(delta.concat(pasteJSON));
          } catch (err) {
            intercept(delta, done);
          }
          e.preventDefault();
        } else {
          intercept(delta, done);
        }
      }
    }]);

    return Clipboard;
  }(_module2.default);

  Clipboard.DEFAULTS = {
    matchers: [[Node.TEXT_NODE, matchText], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')]]
  };

  function computeStyle(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return {};
    var DOM_KEY = '__ql-computed-style';
    return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
  }

  function deltaEndsWith(delta, text) {
    var endText = "";
    for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
      var op = delta.ops[i];
      if (typeof op.insert !== 'string') break;
      endText = op.insert + endText;
    }
    return endText.slice(-1 * text.length) === text;
  }

  function isLine(node) {
    if (node.childNodes.length === 0) return false; // Exclude embed blocks
    var style = computeStyle(node);
    return ['block', 'list-item'].indexOf(style.display) > -1;
  }

  function matchAlias(format, node, delta) {
    return delta.compose(new _delta2.default().retain(delta.length(), _defineProperty({}, format, true)));
  }

  function matchAttributor(node, delta) {
    var attributes = _parchment2.default.Attributor.Attribute.keys(node);
    var classes = _parchment2.default.Attributor.Class.keys(node);
    var styles = _parchment2.default.Attributor.Style.keys(node);
    var formats = {};
    attributes.concat(classes).concat(styles).forEach(function (name) {
      var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
      if (attr != null) {
        formats[attr.attrName] = attr.value(node);
      }
    });
    if (Object.keys(formats).length > 0) {
      delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
    }
    return delta;
  }

  function matchBlot(node, delta) {
    var match = _parchment2.default.query(node);
    if (match == null) return delta;
    if (match.prototype instanceof _parchment2.default.Embed) {
      var embed = {};
      var value = match.value(node);
      if (value != null) {
        embed[match.blotName] = value;
        delta.insert(embed, match.formats(node));
        if (match.prototype instanceof _block.BlockEmbed) {
          var newlineDelta = matchAttributor(node, new _delta2.default().insert('\n'));
          delta = delta.concat(newlineDelta);
        }
      }
    } else if (typeof match.formats === 'function') {
      var formats = _defineProperty({}, match.blotName, match.formats(node));
      delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
    }
    return delta;
  }

  function matchNewline(node, delta) {
    if (!isLine(node)) return delta;
    if (computeStyle(node).whiteSpace.startsWith('pre') || !deltaEndsWith(delta, '\n')) {
      delta.insert('\n');
    }
    return delta;
  }

  function matchSpacing(node, delta) {
    if (node.nextElementSibling != null && node.nextElementSibling.offsetTop > node.offsetTop + node.offsetHeight * 1.4 && !deltaEndsWith(delta, '\n\n')) {
      delta.insert('\n');
    }
    return delta;
  }

  function matchText(node, delta) {
    var text = node.data;
    if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
      var replacer = function replacer(collapse, match) {
        match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
        return match.length < 1 && collapse ? ' ' : match;
      };

      text = text.replace(/\s\s+/g, replacer.bind(replacer, true));
      if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
        text = text.replace(/^\s+/, replacer.bind(replacer, false));
      }
      if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
        text = text.replace(/\s+$/, replacer.bind(replacer, false));
      }
    }
    return delta.insert(text);
  }

  exports.default = Clipboard;
  exports.matchAttributor = matchAttributor;
  exports.matchBlot = matchBlot;
  exports.matchNewline = matchNewline;
  exports.matchSpacing = matchSpacing;
  exports.matchText = matchText;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLastChangeIndex = exports.default = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _quill = __webpack_require__(19);

  var _quill2 = _interopRequireDefault(_quill);

  var _module = __webpack_require__(38);

  var _module2 = _interopRequireDefault(_module);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var History = function (_Module) {
    _inherits(History, _Module);

    function History(quill, options) {
      _classCallCheck(this, History);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(History).call(this, quill, options));

      _this.lastRecorded = 0;
      _this.ignoreChange = false;
      _this.clear();
      _this.quill.on(_quill2.default.events.TEXT_CHANGE, function (delta, oldDelta, source) {
        if (_this.ignoreChange) return;
        if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
          _this.record(delta, oldDelta);
        } else {
          _this.transform(delta);
        }
      });
      _this.quill.keyboard.addBinding({ key: 'Z', metaKey: true }, _this.undo.bind(_this));
      _this.quill.keyboard.addBinding({ key: 'Z', metaKey: true, shiftKey: true }, _this.redo.bind(_this));
      return _this;
    }

    _createClass(History, [{
      key: 'change',
      value: function change(source, dest) {
        if (this.stack[source].length === 0) return;
        var delta = this.stack[source].pop();
        this.lastRecorded = 0;
        this.ignoreChange = true;
        this.quill.updateContents(delta[source], _quill2.default.sources.USER);
        this.ignoreChange = false;
        var index = getLastChangeIndex(delta[source]);
        this.quill.setSelection(index);
        this.quill.selection.scrollIntoView();
        this.stack[dest].push(delta);
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.stack = { undo: [], redo: [] };
      }
    }, {
      key: 'record',
      value: function record(changeDelta, oldDelta) {
        if (changeDelta.ops.length === 0) return;
        this.stack.redo = [];
        var undoDelta = this.quill.getContents().diff(oldDelta);
        var timestamp = Date.now();
        if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
          var delta = this.stack.undo.pop();
          undoDelta = undoDelta.compose(delta.undo);
          changeDelta = delta.redo.compose(changeDelta);
        } else {
          this.lastRecorded = timestamp;
        }
        this.stack.undo.push({
          redo: changeDelta,
          undo: undoDelta
        });
        if (this.stack.undo.length > this.options.maxStack) {
          this.stack.undo.unshift();
        }
      }
    }, {
      key: 'redo',
      value: function redo() {
        this.change('redo', 'undo');
      }
    }, {
      key: 'transform',
      value: function transform(delta) {
        this.stack.undo.forEach(function (change) {
          change.undo = delta.transform(change.undo, true);
          change.redo = delta.transform(change.redo, true);
        });
        this.stack.redo.forEach(function (change) {
          change.undo = delta.transform(change.undo, true);
          change.redo = delta.transform(change.redo, true);
        });
      }
    }, {
      key: 'undo',
      value: function undo() {
        this.change('undo', 'redo');
      }
    }]);

    return History;
  }(_module2.default);

  History.DEFAULTS = {
    delay: 1000,
    maxStack: 100,
    userOnly: false
  };

  function endsWithNewlineChange(delta) {
    var lastOp = delta.ops[delta.ops.length - 1];
    if (lastOp == null) return false;
    if (lastOp.insert != null) {
      return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
    }
    if (lastOp.attributes != null) {
      return Object.keys(lastOp.attributes).some(function (attr) {
        return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
      });
    }
    return false;
  }

  function getLastChangeIndex(delta) {
    var deleteLength = delta.ops.reduce(function (length, op) {
      length += op.delete || 0;
      return length;
    }, 0);
    var changeIndex = delta.length() - deleteLength;
    if (endsWithNewlineChange(delta)) {
      changeIndex -= 1;
    }
    return changeIndex;
  }

  exports.default = History;
  exports.getLastChangeIndex = getLastChangeIndex;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _clone = __webpack_require__(37);

  var _clone2 = _interopRequireDefault(_clone);

  var _deepEqual = __webpack_require__(23);

  var _deepEqual2 = _interopRequireDefault(_deepEqual);

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _quill = __webpack_require__(19);

  var _quill2 = _interopRequireDefault(_quill);

  var _logger = __webpack_require__(31);

  var _logger2 = _interopRequireDefault(_logger);

  var _module = __webpack_require__(38);

  var _module2 = _interopRequireDefault(_module);

  var _selection = __webpack_require__(39);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var debug = (0, _logger2.default)('quill:keyboard');

  var Keyboard = function (_Module) {
    _inherits(Keyboard, _Module);

    _createClass(Keyboard, null, [{
      key: 'match',
      value: function match(evt, binding) {
        binding = normalize(binding);
        var metaKey = /Mac/i.test(navigator.platform) ? evt.metaKey : evt.metaKey || evt.ctrlKey;
        if (!!binding.metaKey !== metaKey && binding.metaKey !== null) return false;
        if (!!binding.shiftKey !== evt.shiftKey && binding.shiftKey !== null) return false;
        if (!!binding.altKey !== evt.altKey && binding.altKey !== null) return false;
        return binding.key === (evt.which || evt.keyCode);
      }
    }]);

    function Keyboard(quill, options) {
      _classCallCheck(this, Keyboard);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).call(this, quill, options));

      _this.options.bindings = (0, _extend2.default)({}, Keyboard.DEFAULTS.bindings, options.bindings);
      _this.bindings = {};
      Object.keys(_this.options.bindings).forEach(function (name) {
        if (_this.options.bindings[name]) {
          var _this$options$binding = _slicedToArray(_this.options.bindings[name], 3);

          var key = _this$options$binding[0];
          var context = _this$options$binding[1];
          var handler = _this$options$binding[2];

          _this.addBinding(key, context, handler);
        }
      });
      _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
      _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, altKey: null }, function () {});
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^$/ }, function (range) {
        if (range.index === 0) return;
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
        this.quill.setSelection(range.index - 1, _quill2.default.sources.SILENT);
        this.quill.selection.scrollIntoView();
      });
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^$/ }, function (range) {
        if (range.index >= this.quill.getLength() - 1) return;
        this.quill.deleteText(range.index, 1, _quill2.default.sources.USER);
        this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
      });
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDelete);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDelete);
      _this.listen();
      return _this;
    }

    _createClass(Keyboard, [{
      key: 'addBinding',
      value: function addBinding(binding, context, handler) {
        binding = normalize(binding);
        if (binding == null) {
          return debug.warn('Attempted to add invalid keyboard binding', binding);
        }
        if (typeof context === 'function') {
          handler = context;
          context = {};
        }
        this.bindings[binding.key] = this.bindings[binding.key] || [];
        this.bindings[binding.key].push([binding, context, handler]);
      }
    }, {
      key: 'listen',
      value: function listen() {
        var _this2 = this;

        this.quill.root.addEventListener('keydown', function (evt) {
          if (evt.defaultPrevented) return;
          var which = evt.which || evt.keyCode;
          var bindings = (_this2.bindings[which] || []).filter(function (tuple) {
            return Keyboard.match(evt, tuple[0]);
          });
          if (bindings.length === 0) return;
          var range = _this2.quill.getSelection();
          if (range == null) return; // implies we do not have focus

          var _quill$scroll$line = _this2.quill.scroll.line(range.index);

          var _quill$scroll$line2 = _slicedToArray(_quill$scroll$line, 2);

          var line = _quill$scroll$line2[0];
          var offset = _quill$scroll$line2[1];

          var _quill$scroll$leaf = _this2.quill.scroll.leaf(range.index);

          var _quill$scroll$leaf2 = _slicedToArray(_quill$scroll$leaf, 2);

          var leafStart = _quill$scroll$leaf2[0];
          var offsetStart = _quill$scroll$leaf2[1];

          var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.scroll.leaf(range.index + range.length);

          var _ref2 = _slicedToArray(_ref, 2);

          var leafEnd = _ref2[0];
          var offsetEnd = _ref2[1];

          var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
          var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
          var curContext = {
            collapsed: range.length === 0,
            empty: range.length === 0 && line.length() <= 1,
            format: _this2.quill.getFormat(range),
            offset: offset,
            prefix: prefixText,
            suffix: suffixText
          };
          var prevented = bindings.some(function (tuple) {
            var _tuple = _slicedToArray(tuple, 3);

            var key = _tuple[0];
            var context = _tuple[1];
            var handler = _tuple[2];

            if (context.collapsed != null && context.collapsed !== curContext.collapsed) return false;
            if (context.empty != null && context.empty !== curContext.empty) return false;
            if (context.offset != null && context.offset !== curContext.offset) return false;
            if (Array.isArray(context.format)) {
              // any format is present
              if (context.format.every(function (name) {
                return curContext.format[name] == null;
              })) {
                return false;
              }
            } else if (_typeof(context.format) === 'object') {
              // all formats must match
              if (!Object.keys(context.format).every(function (name) {
                if (context.format[name] === true) return curContext.format[name] != null;
                if (context.format[name] === false) return curContext.format[name] == null;
                return (0, _deepEqual2.default)(context.format[name], curContext.format[name]);
              })) {
                return false;
              }
            }
            if (context.prefix != null && !context.prefix.test(curContext.prefix)) return false;
            if (context.suffix != null && !context.suffix.test(curContext.suffix)) return false;
            return handler.call(_this2, range, curContext) !== true;
          });
          if (prevented) {
            evt.preventDefault();
          }
        });
      }
    }]);

    return Keyboard;
  }(_module2.default);

  Keyboard.keys = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  Keyboard.DEFAULTS = {
    bindings: {
      'add bold': makeFormatHandler('bold', true),
      'add italic': makeFormatHandler('italic', true),
      'add underline': makeFormatHandler('underline', true),
      'remove bold': makeFormatHandler('bold', false),
      'remove italic': makeFormatHandler('italic', false),
      'remove underline': makeFormatHandler('underline', false),
      'indent': [
      // highlight tab or tab at beginning of list, indent or blockquote
      { key: Keyboard.keys.TAB }, { format: ['blockquote', 'indent', 'list'] }, function (range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }],
      'outdent': [{ key: Keyboard.keys.TAB, shiftKey: true }, { format: ['blockquote', 'indent', 'list'] },
      // highlight tab or tab at beginning of list, indent or blockquote
      function (range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }],
      'outdent backspace': [{ key: Keyboard.keys.BACKSPACE }, { collapsed: true, format: ['blockquote', 'indent', 'list'], offset: 0 }, function (range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.blockquote != null) {
          this.quill.format('blockquote', false, _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }],
      'tab': [{ key: Keyboard.keys.TAB, shiftKey: null }, { collapsed: true }, function (range) {
        this.quill.insertText(range.index, '\t', _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }],
      'enter list': [{ key: Keyboard.keys.ENTER }, { collapsed: true, format: ['list'], empty: true }, function (range) {
        this.quill.format('list', false);
      }],
      'enter header': [{ key: Keyboard.keys.ENTER }, { collapsed: true, format: ['header'], suffix: /^$/ }, function (range) {
        this.quill.scroll.insertAt(range.index, '\n');
        this.quill.formatText(range.index + 1, 1, 'header', false, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.selection.scrollIntoView();
      }],
      'create list': [{ key: ' ' }, { collapsed: true, format: { list: false }, prefix: /^(1\.|-)$/ }, function (range, context) {
        var length = context.prefix.length;
        this.quill.scroll.deleteAt(range.index - length, length);
        this.quill.formatLine(range.index - length, 1, 'list', length === 1 ? 'bullet' : 'ordered', _quill2.default.sources.USER);
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }]
    }
  };

  function handleEnter(range) {
    if (range.length > 0) {
      this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
    }
    this.quill.insertText(range.index, '\n', _quill2.default.sources.USER);
    this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
    this.quill.selection.scrollIntoView();
  }

  function handleDelete(range) {
    this.quill.deleteText(range, _quill2.default.sources.USER);
    this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
    this.quill.selection.scrollIntoView();
  }

  function makeFormatHandler(format, value) {
    var key = { key: format[0].toUpperCase(), metaKey: true };
    var context = {
      format: _defineProperty({}, format, !value)
    };
    var handler = function handler(range) {
      this.quill.format(format, value, _quill2.default.sources.USER);
      return false;
    };
    return [key, context, handler];
  }

  function normalize(binding) {
    switch (typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) {
      case 'string':
        if (Keyboard.keys[binding.toUpperCase()] != null) {
          binding = { key: Keyboard.keys[binding.toUpperCase()] };
        } else if (binding.length === 1) {
          binding = { key: binding.toUpperCase().charCodeAt(0) };
        } else {
          return null;
        }
        break;
      case 'number':
        binding = { key: binding };
        break;
      case 'object':
        binding = (0, _clone2.default)(binding, false);
        break;
      default:
        return null;
    }
    if (typeof binding.key === 'string') {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    }
    return binding;
  }

  exports.default = Keyboard;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AlignStyle = exports.AlignClass = undefined;

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var config = {
    scope: _parchment2.default.Scope.BLOCK,
    whitelist: ['right', 'center', 'justify']
  };

  var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
  var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

  exports.AlignClass = AlignClass;
  exports.AlignStyle = AlignStyle;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DirectionStyle = exports.DirectionClass = undefined;

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var config = {
    scope: _parchment2.default.Scope.BLOCK,
    whitelist: ['rtl']
  };

  var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
  var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

  exports.DirectionClass = DirectionClass;
  exports.DirectionStyle = DirectionStyle;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.IndentClass = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var IdentAttributor = function (_Parchment$Attributor) {
    _inherits(IdentAttributor, _Parchment$Attributor);

    function IdentAttributor() {
      _classCallCheck(this, IdentAttributor);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(IdentAttributor).apply(this, arguments));
    }

    _createClass(IdentAttributor, [{
      key: 'add',
      value: function add(node, value) {
        if (value === '+1' || value === '-1') {
          var indent = parseInt(this.value(node) || 0);
          value = value === '+1' ? indent + 1 : indent - 1;
        }
        if (value === 0) {
          this.remove(node);
          return true;
        } else {
          return _get(Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
        }
      }
    }]);

    return IdentAttributor;
  }(_parchment2.default.Attributor.Class);

  var IndentClass = new IdentAttributor('indent', 'ql-indent', {
    scope: _parchment2.default.Scope.BLOCK,
    whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
  });

  exports.IndentClass = IndentClass;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Blockquote = function (_Block) {
    _inherits(Blockquote, _Block);

    function Blockquote() {
      _classCallCheck(this, Blockquote);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Blockquote).apply(this, arguments));
    }

    return Blockquote;
  }(_block2.default);

  Blockquote.blotName = 'blockquote';
  Blockquote.tagName = 'blockquote';

  exports.default = Blockquote;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Header = function (_Block) {
    _inherits(Header, _Block);

    function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
      key: 'optimize',
      value: function optimize() {
        _get(Object.getPrototypeOf(Header.prototype), 'optimize', this).call(this);
        var text = this.domNode.textContent.toLowerCase();
        var id = text.replace(/[^a-z0-9]+/g, '-').replace(/^\-/, '').replace(/\-$/, '');
        if (this.domNode.id !== id) {
          if (id.length === 0) {
            this.domNode.removeAttribute('id');
          } else {
            this.domNode.id = id;
          }
        }
      }
    }], [{
      key: 'formats',
      value: function formats(domNode) {
        return this.tagName.indexOf(domNode.tagName) + 1;
      }
    }]);

    return Header;
  }(_block2.default);

  Header.blotName = 'header';
  Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  exports.default = Header;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.ListItem = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _extend = __webpack_require__(26);

  var _extend2 = _interopRequireDefault(_extend);

  var _delta = __webpack_require__(21);

  var _delta2 = _interopRequireDefault(_delta);

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _block = __webpack_require__(32);

  var _block2 = _interopRequireDefault(_block);

  var _container = __webpack_require__(41);

  var _container2 = _interopRequireDefault(_container);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ListItem = function (_Block) {
    _inherits(ListItem, _Block);

    function ListItem() {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
    }

    _createClass(ListItem, [{
      key: 'format',
      value: function format(name, value) {
        if (name === List.blotName && !value) {
          this.replaceWith(_parchment2.default.create(this.statics.scope));
        } else {
          _get(Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
        }
      }
    }, {
      key: 'replaceWith',
      value: function replaceWith(name, value) {
        this.parent.isolate(this.offset(this.parent), this.length());
        if (name === List.blotName) {
          this.parent.replaceWith(name, value);
          return this;
        } else {
          this.parent.unwrap();
          return _get(Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
        }
      }
    }], [{
      key: 'formats',
      value: function formats(domNode) {
        return domNode.tagName === ListItem.tagName ? undefined : _get(Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
      }
    }]);

    return ListItem;
  }(_block2.default);

  ListItem.blotName = 'list-item';
  ListItem.tagName = 'LI';

  var List = function (_Container) {
    _inherits(List, _Container);

    function List() {
      _classCallCheck(this, List);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
    }

    _createClass(List, [{
      key: 'format',
      value: function format(name, value) {
        if (this.children.length > 0) {
          this.children.tail.format(name, value);
        }
      }
    }, {
      key: 'formats',
      value: function formats() {
        // We don't inherit from FormatBlot
        return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
      }
    }, {
      key: 'optimize',
      value: function optimize() {
        _get(Object.getPrototypeOf(List.prototype), 'optimize', this).call(this);
        var next = this.next;
        if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName) {
          next.moveChildren(this);
          next.remove();
        }
      }
    }, {
      key: 'replace',
      value: function replace(target) {
        if (target.statics.blotName !== this.statics.blotName) {
          var item = _parchment2.default.create(this.statics.defaultChild);
          target.moveChildren(item);
          this.appendChild(item);
        }
        _get(Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
      }
    }], [{
      key: 'create',
      value: function create(value) {
        if (value === 'ordered') {
          value = 'OL';
        } else if (value === 'bullet') {
          value = 'UL';
        }
        return _get(Object.getPrototypeOf(List), 'create', this).call(this, value);
      }
    }, {
      key: 'formats',
      value: function formats(domNode) {
        if (domNode.tagName === 'OL') return 'ordered';
        if (domNode.tagName === 'UL') return 'bullet';
        return undefined;
      }
    }]);

    return List;
  }(_container2.default);

  List.blotName = 'list';
  List.scope = _parchment2.default.Scope.BLOCK_BLOT;
  List.tagName = ['OL', 'UL'];
  List.defaultChild = 'list-item';
  List.allowedChildren = [ListItem];

  exports.ListItem = ListItem;
  exports.default = List;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BackgroundStyle = exports.BackgroundClass = undefined;

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  var _color = __webpack_require__(54);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
    scope: _parchment2.default.Scope.INLINE
  });
  var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
    scope: _parchment2.default.Scope.INLINE
  });

  exports.BackgroundClass = BackgroundClass;
  exports.BackgroundStyle = BackgroundStyle;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ColorAttributor = function (_Parchment$Attributor) {
    _inherits(ColorAttributor, _Parchment$Attributor);

    function ColorAttributor() {
      _classCallCheck(this, ColorAttributor);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ColorAttributor).apply(this, arguments));
    }

    _createClass(ColorAttributor, [{
      key: 'value',
      value: function value(domNode) {
        var value = _get(Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
        if (!value.startsWith('rgb(')) return value;
        value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
        return '#' + value.split(',').map(function (component) {
          return ('00' + parseInt(component).toString(16)).slice(-2);
        }).join('');
      }
    }]);

    return ColorAttributor;
  }(_parchment2.default.Attributor.Style);

  var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
    scope: _parchment2.default.Scope.INLINE
  });
  var ColorStyle = new ColorAttributor('color', 'color', {
    scope: _parchment2.default.Scope.INLINE
  });

  exports.ColorAttributor = ColorAttributor;
  exports.ColorClass = ColorClass;
  exports.ColorStyle = ColorStyle;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FontClass = exports.FontStyle = undefined;

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var config = {
    scope: _parchment2.default.Scope.INLINE,
    whitelist: ['serif', 'monospace']
  };

  var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);
  var FontStyle = new _parchment2.default.Attributor.Style('font', 'font-family', config);

  exports.FontStyle = FontStyle;
  exports.FontClass = FontClass;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SizeStyle = exports.SizeClass = undefined;

  var _parchment = __webpack_require__(3);

  var _parchment2 = _interopRequireDefault(_parchment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
    scope: _parchment2.default.Scope.INLINE,
    whitelist: ['small', 'large', 'huge']
  });
  var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
    scope: _parchment2.default.Scope.INLINE,
    whitelist: ['10px', '18px', '32px']
  });

  exports.SizeClass = SizeClass;
  exports.SizeStyle = SizeStyle;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _inline = __webpack_require__(35);

  var _inline2 = _interopRequireDefault(_inline);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable