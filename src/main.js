import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    increaseScore(state) {
      state.score ++
    },
    decreaseScore(state) {
      state.score --
    }
  },
  actions: {

  },
  getters: {
  },
  modules: {
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
