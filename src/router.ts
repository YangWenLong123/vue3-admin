import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            name: 'Index',
            path: '/',
            component: () => import('./views/index.vue')
        }
    ]
})

export default router