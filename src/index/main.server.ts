import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import createRouter from "./router/routes";
import store from "./store";
import { applyComponents } from "@/index/component";

export default function () {
  const app = createSSRApp(App);
  const router = createRouter(createMemoryHistory());

  applyComponents(app)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
    router,
  };
}
