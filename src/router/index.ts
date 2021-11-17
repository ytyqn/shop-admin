import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRouter from './modules/product'
import settingRouter from './modules/setting'
import systemRouter from './modules/system'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import('../views/home/index.vue')
      },
      productRouter,
      settingRouter,
      systemRouter
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
