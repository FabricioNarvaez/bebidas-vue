import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../views/InicioView.vue')
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: () => import('../views/FavoritosView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
export { router };