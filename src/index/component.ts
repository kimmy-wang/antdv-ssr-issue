import { App } from "vue";
import { Menu } from "ant-design-vue/lib";

export const applyComponents = (app: App): App => {
  return app.use(Menu);
};
