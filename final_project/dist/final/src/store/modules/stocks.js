'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stocks = require('../../data/stocks');

var _stocks2 = _interopRequireDefault(_stocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  stocks: []

};

var getters = {
  stocks: function stocks(state) {
    return state.stocks;
  }

  // Can't Async
};var mutations = {
  'SET_STOCKS': function SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS': function RND_STOCKS(state) {
    state.stocks.forEach(function (stock) {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

// Can Async
var actions = {
  buyStock: function buyStock(_ref, order) {
    var commit = _ref.commit;

    commit('BUY_STOCK', order);
  },
  initStocks: function initStocks(_ref2) {
    var commit = _ref2.commit;

    commit('SET_STOCKS', _stocks2.default);
  },
  randomizeStocks: function randomizeStocks(_ref3) {
    var commit = _ref3.commit;

    commit('RND_STOCKS');
  }
};

exports.default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
//# sourceMappingURL=stocks.js.map