import { createRouter, RouterHistory } from "vue-router";

const routes = [
  { path: "/user", component: () => import("../components/HelloWorld.vue") },
];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  });
}
