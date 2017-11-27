'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  template: '<App/>',
  components: { App: _App2.default }
});
//# sourceMappingURL=main.js.map