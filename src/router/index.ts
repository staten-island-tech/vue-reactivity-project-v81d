import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import DefinitionPage from "@/views/DefinitionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/definition/:word",
      component: DefinitionPage,
    },
  ],
});

export default router;
