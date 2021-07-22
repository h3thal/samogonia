import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ] // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.mount('#app')
