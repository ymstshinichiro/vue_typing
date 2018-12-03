import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const stored = {
  namespaced: true,
  state: {
    count: 0,
    typingData: null,
  },
  getters: {
    countWithSuffix(state) {
      return `${state.count} 回`
    },
    gettypingData: (state, getters) => () => {
      return this.state.typingData.answer;
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    getTypingsData(state, res) {
      state.typingData = res.data;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    getTypingsDataAction({ commit }) {
      axios.get('http://localhost:3000/typings?=1')
        .then((res) => {
          commit('getTypingsData', res);
        });
    },
  }
}

export default new Vuex.Store({
  modules: {    
    stored
  }
})