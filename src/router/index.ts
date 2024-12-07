import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ("@/views/contentview/home.vue"),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import ("@/views/contentview/project.vue"),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import ("@/views/contentview/blog.vue"),
    },
    {
      path: '/text',
      name: 'text',
      component: () => import ("@/views/contentview/project-centent/mes-kutangguo.vue"),
    },
  ],
})

export default router
