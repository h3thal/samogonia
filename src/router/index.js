import { createRouter, createWebHistory } from 'vue-router'
import AccountingPage from '../views/Accounting'

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/accounting', component: AccountingPage }
  ] // short for `routes: routes`
})
export default router
