import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectMain from "./pages/ProjectMain.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";
import PageContacts from "./pages/PageContacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "projects",
      component: ProjectMain,
    },
    {
      path: "/blog/:slug",
      name: "single-project",
      component: ProjectDetail,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: PageContacts,
    },
  ],
});

export { router };
