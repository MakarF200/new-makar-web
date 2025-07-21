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
    // blog相关路由
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
    // 蚂蚁相关路由
    {
      path: "/ant",
      name: "ant",
      component: () =>
        import("@/views/contentview/ant-travel/about-ant-travel.vue"),
    },
    // project相关路由
    {
      path: "/project",
      name: "project",
      component: () => import("@/views/contentview/project.vue"),
    },
    {
      path: "/Four-wheeled",
      name: "Four-wheeled",
      component: () =>
        import("@/views/contentview/project-content/Four-wheeled.vue"),
    },
    {
      path: "/MES-system-in-company",
      name: "MES-system-in-company",
      component: () =>
        import("@/views/contentview/project-content/mes-kutangguo.vue"),
    },
    // freelance相关路由
    {
      path: "/freelance",
      name: "freelance",
      component: () => import("@/views/contentview/freelance/freelance.vue"),
    },
    {
      path: "/freelance/web-design",
      name: "freelance-web-design",
      component: () => import("@/views/contentview/freelance/web-design.vue"),
    },
    // 测试用路由
    {
      path: "/test",
      name: "test",
      component: () =>
        import("@/views/contentview/project-content/md-to-html/md-to-html.vue"),
    },
    {
      path: "/testone",
      name: "testone",
      component: () =>
        import(
          "@/views/contentview/project-content/md-to-html/html-display-view.vue"
        ),
    },
  ],
});

export default router;
