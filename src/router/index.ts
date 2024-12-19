import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: App,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/contentview/home.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("@/views/contentview/project.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/contentview/blog.vue"),
    },
    {
      path: "/bcontent",
      name: "bcontent",
      component: () =>
        import("@/views/contentview/blog-content/blog-content.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () =>
        import("@/views/contentview/project-centent/mes-kutangguo.vue"),
    },
  ],
});

export default router;
