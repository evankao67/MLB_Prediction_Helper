import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'
import Game from '../views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
