import type { GetterTree } from "vuex";
import type { UserState } from "./typing";
import type { RootState } from "../../root-state";

export const getters: GetterTree<UserState, RootState> = {
  allowRouters: (state) => state.allowRouters,
};
