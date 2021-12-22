import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "ant-design-vue/dist/antd.less";
import { applyComponents } from "@/index/component";
import applyRouter from "./router/router-guards";

const app = createApp(App);

applyComponents(app)
  .use(applyRouter(router))
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon);
router.isReady().then(() => {
  app.mount("#app");
});
