import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    // increaseScore(state) {
    //   state.score ++
    // },
    // decreaseScore(state) {
    //   state.score --
    // }
  },
  actions: {

  },
  getters: {
    // score(state) {
    //   return state.score
    // }
  },
  modules: {
  }
})
