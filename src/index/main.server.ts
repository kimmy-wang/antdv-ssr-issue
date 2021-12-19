import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import createRouter from "./router";
import { applyComponents } from "@/index/component";

export default function () {
  const app = createSSRApp(App);
  const router = createRouter(createMemoryHistory());

  applyComponents(app)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
    router,
  };
}
