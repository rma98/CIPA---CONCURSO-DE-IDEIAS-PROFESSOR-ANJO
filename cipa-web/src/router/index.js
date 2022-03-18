import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import cadastro from '../components/cadastro.vue'
import login from '../components/Login.vue'
import inscricaoProjeto from '../components/inscricaoProjeto.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: cadastro
  },
  {
    path: '/inscricaoProjeto',
    name: 'inscricaoProjeto',
    component: inscricaoProjeto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
