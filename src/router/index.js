import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Principal from '../components/principal/Principal.vue'
import Ingredientes from '../components/ingredientes/Ingredientes.vue'
import Ticket from '../components/ticket/Ticket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal
    },
    {
      path: '/ingredientes',
      name: 'Ingredientes',
      component: Ingredientes
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
