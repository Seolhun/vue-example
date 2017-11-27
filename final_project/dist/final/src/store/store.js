'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _stocks = require('./modules/stocks');

var _stocks2 = _interopRequireDefault(_stocks);

var _portfolio = require('./modules/portfolio');

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  modules: {
    stocks: _stocks2.default,
    portfolio: _portfolio2.default
  }
});
//# sourceMappingURL=store.js.map