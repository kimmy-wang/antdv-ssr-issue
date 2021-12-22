import type { MutationTree } from "vuex";
import type { UserState } from "./typing";

export const SET_ROUTERS = "SET_ROUTERS";

export const mutations: MutationTree<UserState> = {
  [SET_ROUTERS]: (state, allowRoutes) => {
    state.allowRouters = allowRoutes;
  },
};
