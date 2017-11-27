'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  funds: 10000,
  stocks: []

  // Can't Async
};var mutations = {
  'BUY_STOCK': function BUY_STOCK(state, _ref) {
    var stockId = _ref.stockId,
        quantity = _ref.quantity,
        stockPrice = _ref.stockPrice;

    var record = state.stocks.find(function (element) {
      return element.id === stockId;
    });
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK': function SELL_STOCK(state, _ref2) {
    var stockId = _ref2.stockId,
        quantity = _ref2.quantity,
        stockPrice = _ref2.stockPrice;

    var record = state.stocks.find(function (element) {
      return element.id === stockId;
    });
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

// Can Async
var actions = {
  sellStock: function sellStock(_ref3, order) {
    var commit = _ref3.commit;

    commit('SELL_STOCK', order);
  }
};

var getters = {
  stockPortfolio: function stockPortfolio(state, getters) {
    return state.stocks.map(function (stock) {
      var record = getters.stocks.find(function (element) {
        return element.id === stock.id;
      });
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: function funds(state) {
    return state.funds;
  }
};

exports.default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
//# sourceMappingURL=portfolio.js.map