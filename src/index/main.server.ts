import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vant from "vant";
import Antd from "ant-design-vue/lib/breadcrumb";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "vant/lib/index.css";
import createRouter from "./router";

export default function () {
  const app = createSSRApp(App);
  const router = createRouter(createMemoryHistory("/home/"));

  app.use(router);
  app.use(Vant);
  app.use(Antd);
  app.component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
    router,
  };
}
