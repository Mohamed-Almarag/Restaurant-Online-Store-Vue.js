import Vue from "vue";
import Vuex from "vuex";

import foods from "@/store/FoodsModule/index.js";
import blogs from "@/store/BlogsModule/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    foods,
    blogs,
  },
});
