import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import createRouter from "./router";
import App from "./App.vue";
import "ant-design-vue/dist/antd.less";
import { applyComponents } from "@/index/component";

const app = createApp(App);
const router = createRouter(createWebHistory());

applyComponents(app)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon);
router.isReady().then(() => {
  app.mount("#app");
});
