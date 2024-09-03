<template>
    <div class="bg-main-blue">
    <ul class="flex items-center text-white text-sm h-12">
      <li class="px-3"><i class="fa-solid mr-2 fa-phone --fa-white"></i>+506-2787-5510</li>
      <li class="px-3"><i class="fa-solid mr-2 fa-envelope --fa-white"></i>info-toledo@hacienda.org</li>
    </ul>
  </div>
  <nav class="min-h-2 sm:h-28 flex items-center justify-center bg-white flex-wrap sm:px-6 p-2 sm:py-0" role="navigation" aria-label="main navigation">
    <div class="w-full flex justify-between items-center sm:w-auto text-main-green">
      <div
        class="space-y-1 border h-8 border-main-green rounded p-2 m-2 sm:hidden"
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

    <div id="navbar" :class="isNavbarOpen ? '' : 'hidden'"
      class="h-full w-full block sm:flex sm:items-center sm:w-auto">
      <div class="sm:flex-grow sm:py-6">
        <Navlink title="Inicio" link="/" />
        <Navlink title="Proyectos" link="/proyectos" />
        <Navlink title="Galeria" link="/galeria" />
      </div>
      <div class="h-full w-28 sm:w-normal sm:mt-0 bg-main-green text-xl place-content-center">
        <a
          href="#"
          class="sm:h-20 ml-4 text-white text-center"
          >Contacto</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import Navlink from "../components/Navlink.vue"

export default {
  name: "Navbar",
  components: {
    Navlink
  },
  data() {
    return {
      isNavbarOpen: false,
    };
  }
};
</script>