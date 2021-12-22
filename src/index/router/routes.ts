import { createRouter, Router, RouterHistory } from "vue-router";
import { Component } from "vue";
import { MenuDataItem } from "@/index/router/typing";

export const routes: MenuDataItem[] = [
  {
    path: "/test",
    name: "test",
    meta: { title: "Test" },
    component: (): Component =>
      import(/* webpackChunkName: "test" */ "@/index/views/test.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    meta: { title: "Test2" },
    component: (): Component =>
      import(/* webpackChunkName: "test2" */ "@/index/views/test2.vue"),
  },
];

export default (history: RouterHistory): Router => {
  return createRouter({
    history,
    routes,
  });
};
