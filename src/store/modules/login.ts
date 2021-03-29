// 状态
const state = {};

// 同步行为
const mutations = {
  stat() {},
};

// 异步行为，必须调用mutations中的方法
const actions = {};

// 获取状态
const getters = {};

export default {
  namespace: true, // 通过 namespace 把这个模块暴露出去
  state,
  mutations,
  actions,
  getters,
};
