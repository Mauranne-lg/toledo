<script setup>
import NavbarLink from "../components/NavbarLink.vue";
</script>

<template>
    <div class="bg-main-blue w-screen">
        <ul class="flex items-center text-white text-sm h-12 lg:ml-6">
            <li class="px-2">
                <i class="fa-solid mr-2 fa-phone --fa-white"></i>
                <a href="tel:+506 8347-5194" class="text-white"
                    >+506 8347-5194</a
                >
            </li>
            <li class="px-2">
                <i class="fa-solid mr-2 fa-envelope --fa-white"></i>
                <a href="mailto:info@reservaeltoledo.com" class="text-white"
                    >info@reservaeltoledo.com</a
                >
            </li>
        </ul>
    </div>
    <nav
        class="w-screen min-h-2 lg:h-20 flex items-center justify-between bg-white flex-wrap lg:px-6 p-2 lg:py-0"
        role="navigation"
        aria-label="main navigation"
    >
        <div
            class="w-full flex justify-between items-center lg:w-auto text-main-green"
        >
            <img class="w-24" src="../assets/logo-no-bg.png" id="logo" alt="" />
            <div
                class="space-y-1 border h-8 border-main-green rounded p-2 m-2 lg:hidden"
                role="button"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
                @click="isNavbarOpen = !isNavbarOpen"
            >
                <div class="w-5 h-0.5 bg-main-green"></div>
                <div class="w-5 h-0.5 bg-main-green"></div>
                <div class="w-5 h-0.5 bg-main-green"></div>
            </div>
        </div>

        <div
            id="navbar"
            :class="isNavbarOpen ? '' : 'hidden'"
            class="h-full w-full block lg:flex lg:items-center lg:w-auto pl-3 lg:pl-0"
        >
            <div class="text-sm lg:flex-grow">
                <NavbarLink v-for="navlink in navlinks" :route="navlink.route" :title="navlink.title"/>
            </div>
            <div
                class="h-full mt-4 w-24 lg:w-normal lg:mt-0 bg-main-green flex place-items-center"
            >
                <router-link
                    to="/reserva#reservar"
                    class="text-sm px-4 lg:h-20 flex place-items-center py-2 text-white"
                >
                    Reservar
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    components: "NavbarLink",
    data() {
        return {
            isNavbarOpen: false,
            navlinks: [{route:'', title:'inicio'},{route:'reserva', title:'reserva'}, {route:'noticias', title:'noticias'}, {route:'proyectos', title:'proyectos'}, {route:'galeria', title:'galeria'}, {route:'contacto', title:'contacto'}]
        };
    },
};
</script>
