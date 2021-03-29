interface State {
  list: Array<number>;
}

// 状态
const state = {
  list: [5, 4, 3],
};

// 同步行为
const mutations = {
  setList(state: State, payload: Array<number>): void {
    state.list = payload;
  },
};

// 异步行为，必须调用mutations中的方法
const actions = {};

// 获取状态
const getters = {};

export default {
  namespaced: true, // 通过 namespaced 把这个模块暴露出去
  state,
  mutations,
  actions,
  getters,
};
