import Vue from 'vue'
import Vuex from 'vuex'
//modules
import characters from './modules/characters';
//plugins
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    characters
  },
  plugins: [createPersistedState()]
})
