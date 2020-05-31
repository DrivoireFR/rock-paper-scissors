import Vue from 'vue'
import VueRouter from 'vue-router'
import Match from '../views/Match.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Match',
    component: Match
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
]

const router = new VueRouter({
  routes
})

export default router
