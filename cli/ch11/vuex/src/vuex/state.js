import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import value from './modules/value'

//Separate files
// import * as state from './files/state'
// import * as getters from './files/getters'
// import * as mutations from './files/mutations'
// import * as actions from './files/actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // state,
  // getters,
  // mutations,
  // actions,
  modules: {
    counter,
    value
  }
})
