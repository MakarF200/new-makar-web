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
    {
      path: "/project-content/:type",
      name: "project-content",
      component: () =>
        import(
          "@/components/component-vue/project-component/project-component.vue"
        ),
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
    {
      path: "/freelance/web-design-content/:type",
      name: "freelance-web-design-content",
      component: () =>
        import(
          "@/views/contentview/freelance/web-design-content/web-price-detail.vue"
        ),
    },
    // 简历路由
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/contentview/resume/resume.vue"),
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
    {
      path: "/testtwo",
      name: "testtwo",
      component: () => import("@/views/contentview/freelance/text.vue"),
    },
    {
      path: "/testthree",
      name: "testthree",
      component: () =>
        import(
          "@/components/component-vue/project-component/project-component.vue"
        ),
    },
    {
      path: "/navigation-test",
      name: "navigation-test",
      component: () => import("@/components/component-vue/navigation-bar.vue"),
    },
  ],
});

export default router;
