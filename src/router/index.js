import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Crew from '@/pages/Crew.vue'
import Destination from '@/pages/Destination.vue'
import Technology from '@/pages/Technology.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/crew', name: 'crew', component: Crew },
  { path: '/destination', name: 'destination', component: Destination },
  { path: '/technology', name: 'technology', component: Technology }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
