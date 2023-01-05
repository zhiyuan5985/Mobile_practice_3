import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../views/layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
