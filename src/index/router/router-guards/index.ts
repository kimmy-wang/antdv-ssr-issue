import { Router } from "vue-router";
import store from "../../store";
import { GENERATE_ROUTES } from "../../store/modules/user/actions";

export default (router: Router): Router => {
  router.beforeEach(async (to) => {
    // check login user.role is null
    if (
      store.getters["user/allowRouters"] &&
      store.getters["user/allowRouters"].length > 0
    ) {
      return true;
    } else {
      const allowRouters = await store.dispatch(
        `user/${GENERATE_ROUTES}`,
        router
      );
      if (allowRouters) {
        return { ...to, replace: true };
      }
      return false;
    }
  });
  router.afterEach(() => {});
  return router;
};
