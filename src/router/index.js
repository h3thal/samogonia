import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/accounting', component: () => import('@/views/Accounting.vue') },
    { path: '/history', component: () => import('@/views/History.vue') }
  ] // short for `routes: routes`
})
export default router
