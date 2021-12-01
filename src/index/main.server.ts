import { createSSRApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vant from "vant";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "vant/lib/index.css";

export default function () {
  const app = createSSRApp(App);

  app.use(Vant);
  app.use(Antd);
  app.component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
  };
}
