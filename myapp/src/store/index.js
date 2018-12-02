import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stored = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    countWithSuffix(state) {
      return `${state.count} 回`
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
}

export default new Vuex.Store({
  modules: {    
    stored
  }
})