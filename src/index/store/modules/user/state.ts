import type { UserState } from "./typing";

export const state: UserState = {
  allowRouters: [],
};

export const initState: UserState = Object.assign({}, state);
