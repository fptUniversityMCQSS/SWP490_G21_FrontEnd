import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    historyID: 0,
    user: null
  },
  getters: {},
  mutations: {
    getHistoryId(state, id) {
      state.historyID = id
    },
    getUserId(state, object) {
      state.user = object
    }
  },
  actions: {}
});
export default store
