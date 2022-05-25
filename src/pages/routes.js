import { createRouter } from 'vue-router'

import Inicio from './Inicio.vue';
import Reserva from './Reserva.vue';
import Noticias from './Noticias.vue';
import Proyectos from './Proyectos.vue';
import Galeria from './Galeria.vue';
import Contacto from './Contacto.vue';

import PageNotFound from './PageNotFound.vue';

const routes = [
    {
        path: '/',
        component: Inicio,
        name:"inicio"
    },
    {
        path: '/inicio',
        component: Inicio,
        name: "inicio"
    },
    {
        path: '/reserva',
        component: Reserva,
        name:"reserva"
    },
    {
        path: '/noticias',
        component: Noticias,
        name:"noticias"
    },
    {
        path: '/proyectos',
        component: Proyectos,
        name:"proyectos"
    },
    {
        path: '/galeria',
        component: Galeria,
        name:"galeria"
    },
    {
        path: '/contacto',
        component: Contacto,
        name:"contacto"
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