import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import NewOrderView from '@/views/NewOrderView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPageView
  },
  {
    path: '/nuevo-pedido',
    name: 'newOrder',
    component: NewOrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
