import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import DefaultView from '../views/DefaultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: 'Обо мне',
        type: 'profile',
      },
    },
    {
      path: '/documents',
      name: 'documents',
      component: DefaultView,
      meta: {
        title: 'Документы',
        type: 'profile',
      },
    },
    {
      path: '/objects',
      name: 'objects',
      component: DefaultView,
      meta: {
        title: 'Объекты',
        type: 'job',
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: DefaultView,
      meta: {
        title: 'Календарь работ',
        type: 'job',
      },
    },
    {
      path: '/responses',
      name: 'responses',
      component: DefaultView,
      meta: {
        title: 'Отклики',
        type: 'job',
      },
    },
  ],
})

export default router
