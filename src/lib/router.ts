import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Index from "@/pages/Index.vue";
import Example from "@/pages/Example.vue";

const routes: Array<RouteRecordRaw> = [
  {
    component: Index,
    path: "/",
    name: "index"
  },
  {
    component: Example,
    path: "/example",
    name: "example",
    meta: { title: "Examples" }
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const baseTitle = "Vue + TypeScript + Vite";

  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
