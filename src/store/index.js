import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    historyID: 0,
    user: null,
    totalQuestion:0
  },
  getters: {},
  mutations: {
    getHistoryId(state, id) {
      state.historyID = id
    },
    getUserId(state, object) {
      state.user = object
    },
    getTotal(state, total) {
      state.totalQuestion = total
    }
  },
  actions: {}
});
export default store
