<template>
    <div class="bg-main-blue w-screen">
    <ul class="flex items-center text-white text-sm h-12">
      <li class="px-3"><i class="fa-solid mr-2 fa-phone --fa-white"></i>+506-2787-0010</li>
      <li class="px-3"><i class="fa-solid mr-2 fa-envelope --fa-white"></i>info@haciendabaru.org</li>
    </ul>
  </div>
  <nav class="w-screen min-h-2 sm:h-28 flex items-center justify-between bg-white flex-wrap sm:px-6 p-2 sm:py-0" role="navigation" aria-label="main navigation">
    <div class="w-full flex justify-between items-center sm:w-auto text-main-green">
      <img class="w-24" src="../assets/logo.jpg" alt="">
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
      <div class="text-sm sm:flex-grow sm:py-6">
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Inicio
        </a>
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Reserva El Toledo
        </a>
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Noticias
        </a>
                <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Proyectos
        </a>
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Especies
        </a>
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Galeria
        </a>
        <a
          href="#"
          class="block mt-4 sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
        >
          Contacto
        </a>
      </div>
      <div class="h-full mt-4 w-24 sm:w-normal sm:mt-0 bg-main-green flex place-items-center">
        <a
          href="#"
          class="text-sm px-4 sm:h-20 flex place-items-center py-2 text-white"
          >Reservar</a
        >
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavbarOpen: false,
    };
  },
};
</script>

<style>

</style>