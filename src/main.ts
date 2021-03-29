import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton, ElForm } from "element-plus";

const app = createApp(App);

// 使用 ElButton
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);

app
  .use(store)
  .use(router)
  .mount("#app");
