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
  ]
})

export default router
