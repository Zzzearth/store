interface State {
  list: Array<Number>;
}

// 状态
const state = {
  list: [1, 2, 3],
};

// 同步行为
const mutations = {
  setList(state: State, payload: Array<Number>): void {
    console.log(payload);
    state.list = payload;
  },
};

// 异步行为，必须调用mutations中的方法
const actions = {};

// 获取状态
const getters = {
  getList(state: State): Array<Number> {
    return state.list;
  },
};

export default {
  namespaced: true, // 通过 namespaced 把这个模块暴露出去
  state,
  mutations,
  actions,
  getters,
};
