import type { ActionTree } from "vuex";
import type { RouteRecordRaw } from "vue-router";
import type { UserState } from "./typing";
import type { RootState } from "../../root-state";
import { SET_ROUTERS } from "./mutations";
import { routes } from "@/index/router/routes";

export const GENERATE_ROUTES = "GenerateRoutes";

export const actions: ActionTree<UserState, RootState> = {
  [GENERATE_ROUTES]({ commit, state }, router) {
    return new Promise<RouteRecordRaw[]>((resolve) => {
      // 修改这里可以进行接口返回的对象结构进行改变
      // 亦或是去掉 info.role 使用别的属性替代
      // 任何方案都可以，只需要将最后拼接构建好的路由数组使用
      // router.addRoute() 添加到当前运行时的路由中即可

      routes.forEach((route) => {
        router.addRoute(route);
      });
      commit(SET_ROUTERS, routes);
      resolve(routes);
    });
  },
};
