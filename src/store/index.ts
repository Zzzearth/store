import { createStore } from "vuex";
import login from "./modules/login";
import register from "./modules/register";

// // 获取 modules 下的仓库，匹配ts或js后缀的文件
// const files = require.context("@/store/modules", false, /\.ts|js$/);
// let modules: Modules = {};

// files.keys().forEach((item: string) => {
//   let res = require(`@/store/modules${item.slice(1)}`);
//   // modules[res.default.name] = (res as Store).default;
//   console.log((res as Store).default.name);
// });

export default createStore({
  modules: {
    login,
    register,
  },
});
