import { createRouter } from 'vue-router'
import Inicio from './Inicio.vue';
import Gallery from './Gallery.vue';
import PageNotFound from './PageNotFound.vue';

const routes = [
    {
        path: '/',
        component: Inicio,
        name:"inicio"
    },
    {
        path: '/galeria',
        component: Gallery,
        name:"gallery"
    },
    {   path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound
    },
]


export default function (history) {
    return createRouter({
        history,
        routes
    })
}