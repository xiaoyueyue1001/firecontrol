import axios from "@/utils/axios";

export default {
  namespaced: true,
  state: {
    hello: ""
  },
  getters: {
    getHello: state => {
      return state.hello;
    }
  },
  mutations: {
    setHello(state, hello) {
      state.hello = hello;
    }
  },
  actions: {
    getHello(context, params) {
      return new Promise((resolve, reject) => {
        axios.post("/firecontrol/helloWorld", params).then(res => {
          context.commit("setHello",res.data)
          resolve(res)
        });
      })
    }
  }
};
