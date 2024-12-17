import { ROUTES } from '@/constants/routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/emberek' },
        {
          path: '/emberek',
          // elnevezem hogy tudjak hivatkozni rá
          name: ROUTES.PEOPLE_LIST,
          component: () => import('@/views/PeopleList.vue')
        },
        { 
          path: '/emberek/:id',
          // ezt is, bár egyelőre ez nem kell
          name: ROUTES.CONTACT_VIEW,
          component: () => import('@/views/ContactView.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
