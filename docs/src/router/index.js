import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('@/views/GettingStarted.vue')
    },
    {
      path: '/gen',
      name: 'gen',
      component: () => import('@/views/API.vue')
    },
    {
      path: '/pug',
      name: 'pug',
      component: () => import('@/views/Pug.vue')
    },
    {
      path: '/sheetworkers',
      name: 'sheetworkers',
      component: () => import('@/views/Sheetworker.vue')
    },
    {
      path: '/scss',
      name: 'scss',
      component: () => import('@/views/Style.vue')
    }
  ]
});

export default router
