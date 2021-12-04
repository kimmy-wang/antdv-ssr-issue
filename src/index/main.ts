import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import createRouter from "./router";
import Vant from "vant";
import Antd from "ant-design-vue/lib/breadcrumb";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "vant/lib/index.css";

const app = createApp(App);
const router = createRouter(createWebHistory("/home/"));

app.use(router);
app.use(Vant);
app.use(Antd);
app.component("font-awesome-icon", FontAwesomeIcon);
router.isReady().then(() => {
  app.mount("#app");
});
