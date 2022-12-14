import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import NewOrderView from '@/views/NewOrderView.vue'
import OrderListUserView from '@/views/OrderListUserView.vue'
import OrderListAdminView from '@/views/OrderListAdminView.vue'

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
  },
  {
    path: '/pedidos',
    name: 'orders',
    component: OrderListUserView
  },
  {
    path: '/pedidos/admin',
    name: 'adminOrders',
    component: OrderListAdminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
