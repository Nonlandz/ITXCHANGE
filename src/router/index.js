import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },

    {
      path: '/forgotpass',
      name: 'forgot',
      component: () => import('../views/forgotpass.vue')
    },

    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router
