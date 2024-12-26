import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/home",
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
      path: "/ant",
      name: "ant",
      component: () =>
        import("@/views/contentview/project-content/mes-kutangguo.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () =>
        import("@/views/contentview/project-content/md-to-html.vue"),
    },
    {
      path: "/fourwheeled",
      name: "fourwheeled",
      component: () =>
        import("@/views/contentview/project-content/Four-wheeled.vue"),
    },
  ],
});

export default router;
