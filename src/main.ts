import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setRem } from "@/utils/fns";
import { ElButton, ElForm, ElDatePicker, ElIcon } from "element-plus";

const app = createApp(App);

// 使用 ElButton
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElDatePicker.name, ElDatePicker);
app.component(ElIcon.name, ElIcon);

app
  .use(store)
  .use(router)
  .mount("#app");

window.addEventListener("load", setRem);
window.addEventListener("resize", setRem);
