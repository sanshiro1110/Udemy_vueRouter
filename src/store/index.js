import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  //vue.js全体で使えるグローバル変数のようなもの
  state: {
    message: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    count,
  }
});
