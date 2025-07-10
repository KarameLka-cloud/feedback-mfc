import { createRouter, createWebHistory } from 'vue-router'
import MfcComponent from '../components/MfcComponent.vue' // Import your component
import Home from '../components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/ostavit-otzyv-o-mfts',
            name: 'home',
            component: Home
        },
        {
            path: '/mfc/:id', // Dynamic route with id parameter
            name: 'mfc',
            component: MfcComponent
        }
    ]
})

export default router
