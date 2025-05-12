import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import HistoryView from '@/views/HistoryView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/detail/:id', name: 'Detail', component: DetailView },
  { path: '/history', name: 'History', component: HistoryView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
