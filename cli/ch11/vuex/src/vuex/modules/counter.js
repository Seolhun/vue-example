import * as alias from '../alias'

const state = {
  value: 0
}

const getters = {
  [alias.DOUBLE_COUNTER]: state => {
    return state.value * 2
  },
  [alias.CLICK_COUNTER]: state => {
    return state.value + ' clicks'
  }
};

const mutations = {
  increment: (state, payload) => {
    state.value += payload
  },
  decrement: (state, payload) => {
    state.value -= payload
  }
};

const actions = {
  // Sameple before use {getter}
  // increment: context => {
  //   context.commit('increment')
  // },
  increment: ({commit}, payload) => {
    commit('increment', payload)
  },
  decrement:
    ({commit}, payload) => {
      commit('decrement', payload)
    },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration)
  },
  asyncDecrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
