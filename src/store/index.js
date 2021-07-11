import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    historyID: 9
  },
  getters: {},
  mutations: {
    getHistoryId(state, id) {
      state.historyID = id
    }
  },
  actions: {}
});
export default store
