'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('@/components/Home.vue');

var _Home2 = _interopRequireDefault(_Home);

var _Portfolio = require('@/components/portfolio/Portfolio.vue');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Stocks = require('@/components/stocks/Stocks.vue');

var _Stocks2 = _interopRequireDefault(_Stocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Home',
    component: _Home2.default
  }, {
    path: '/stocks',
    name: 'Stocks',
    component: _Stocks2.default
  }, {
    path: '/portfolio',
    name: 'Portfolio',
    component: _Portfolio2.default
  }],
  mode: 'history'
});
//# sourceMappingURL=index.js.map