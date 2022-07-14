<template>
    <footer class="w-screen drop-shadow-2xl">
        <div
            class="bg-whitesmoke flex flex-col gap-6 justify-around sm:flex-row p-6 sm:p-20"
        >
            <div class="flex flex-col flex-1 sm:pr-6">
                <img class="w-24 py-3" src="../assets/logo-no-bg.png" alt="" />
                <p class="sm:w-3/4 py-3">
                    La Hacienda Barú es un Refugio Nacional de Vida Silvestre de
                    800 acres (324 hectáreas), situado en la costa Pacífica sur
                    de Costa Rica.
                </p>
                <div class="py-3">
                    <a
                        href="https://www.facebook.com/reservaeltoledo"
                        target="_blank"
                        ><i
                            class="fa-brands fa-facebook fa-2xl --fa-green cursor-pointer"
                        ></i
                    ></a>
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <h3 class="underlined-title text-light-grey text-xl">
                    Desde galería
                </h3>
                <div
                    class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-2 gap-y-6 place-content-start"
                >
                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img1.jpg"
                        alt=""
                    />
                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img2.jpg"
                        alt=""
                    />

                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img3.jpg"
                        alt=""
                    />
                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img4.jpg"
                        alt=""
                    />
                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img3.jpg"
                        alt=""
                    />
                    <img
                        class="shadow border border-solid border-light-grey border-1"
                        src="../assets/img4.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div
            class="bg-secondary-green text-white justify-around flex items-center flex-col sm:flex-row"
        >
            <div class="text-center m-2 italic">
                2022 - Reserva El Toledo - Todos los derechos reservados
            </div>
            <div>
                <ul class="flex space-x-3 cursor-pointer">
                    <li class="hover:text-main-green">
                        <router-link :to="{ name: 'reserva' }"
                            >Reserva El Toledo
                        </router-link>
                    </li>
                    <li class="hover:text-main-green">
                        <router-link :to="{ name: 'proyectos' }"
                            >Proyectos
                        </router-link>
                    </li>
                    <li class="hover:text-main-green">
                        <router-link :to="{ name: 'reserva' }"
                            >Galéria
                        </router-link>
                    </li>
                    <li class="hover:text-main-green">
                        <router-link :to="{ name: 'contacto' }"
                            >Contacto
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style>
.grid img{
    height: 150px;
    width: 150px;
}
</style>
