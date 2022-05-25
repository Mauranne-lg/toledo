<script setup>
import Header from "../components/Header.vue";
</script>

<template>
    <section class="inicio">
        <Header title="Inicio" subtitle="Inicio" />
        <div class="container w-4/5 flex flex-col sm:flex-row m-auto">
            <div class="m-10">
                <h2>RESERVA EL TOLEDO</h2>
                <p>
                    El Refugio Nacional de Vida Silvestre Hacienda Barú está
                    situado en el Pacífico Sur de Costa Rica, colindando con la
                    desembocadura del Río Barú. Posee 330 hectáreas de áreas
                    protegidas, incluyendo tres kilómetros de playa y un
                    kilómetro bordeando el Río Barú. La reserva contiene una
                    variada y atractiva topografía que llega hasta los 300
                    metros sobre el nivel del mar y hospeda varios ecosistemas
                    incluyendo: bosque tropical húmedo de tipo primario y
                    secundario, humedales, manglares y costa.
                </p>
                <p>
                    En 2017 se terminó la construcción del Centro de
                    Investigación Biológica Hacienda Barú (Centro Biológico). El
                    Centro Biológico permite a sus huéspedes, en su mayoría
                    investigadores y grupos de estudiantes, alojarse con
                    comodidad y seguridad mientras realizan sus investigaciones,
                    estudios o talleres. Además, tienen acceso gratuito a la red
                    de senderos dentro de la Reserva Nacional de Vida Silvestre
                    Hacienda Barú. (RNVS)
                </p>
                <p>
                    Las tarifas son muy accesibles, esto con el interés
                    principal de apoyar la investigación y la promoción de
                    conocimientos que propicien el mejoramiento del manejo de
                    los ecosistemas de la región. El personal local de trato
                    sencillo pero amable le hará sentirse cómodo desde el primer
                    momento.
                </p>
            </div>
            <div class="m-10 flex flex-col">
                <h2>¿CÓMO LLEGAR?</h2>
                <p>
                    Hacienda Barú está ubicada sobre la carretera Costanera Sur
                    (ruta 34), la cual es pavimentada y recorre gran parte del
                    Litoral Pacífico, a 800 metros noroeste del puente sobre el
                    Río Barú o de la intersección con carretera de Dominical a
                    San Isidro de Pérez Zeledón.
                </p>
                <iframe
                    class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28821.066689954994!2d-85.42081648578637!3d10.041636077738358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fa51d42a61be3%3A0x2b5b93a7e157a6db!2sReserva%20El%20Toledo!5e0!3m2!1sfr!2scr!4v1652900832081!5m2!1sfr!2scr"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div class="w-screen">
            <div
                class="h-fit sm:h-96 bg-mission-inicio bg-cover bg-center flex flex-col justify-center items-center gap-6 sm:gap-24 sm:flex-row"
            >
                <article class="h-100 w-80 p-6 sm:p-4">
                    <h2 class="text-white">Vision</h2>
                    <p class="text-white">
                        El RNVS se compromete con el manejo apropiado, cuidadoso
                        y disciplinado de las áreas naturales, además se
                        implementa una visión holística orientada a garantizar
                        la salud y la biodiversidad de sus ecosistemas, en
                        beneficio tanto de los visitantes y comunidad local,
                        como de sus propietarios.
                    </p>
                </article>
                <article class="h-100 w-80 p-6 sm:p-4">
                    <h2 class="text-white">Mission</h2>
                    <p class="text-white">
                        Promover el conocimiento y la investigación científica
                        de calidad para el beneficio del mismo RNVS, así como de
                        otros esfuerzos de conservación en la zona. Buscando
                        obtener un impacto positivo sobre la preservación de los
                        ecosistemas de la región e involucrando activamented a
                        científicos, estudiantes, empleados así como a la
                        comunidad.
                    </p>
                </article>
            </div>
        </div>
        <div
            class="container p-12 space-y-7 grid place-content-center place-items-center"
        >
            <h3 class="underlined-title text-light-grey">¿Estás interesado?</h3>
            <p class="text-4xl font-bold font-serif">Únase a nosotros</p>
            <p>
                Para más información sobre el refugio y la estación de
                investigación biológica, contáctenos.
            </p>
            <button class="green-pill-button">Contactenos</button>
        </div>
        <div class="w-screen">
            <div
                class="h-fit sm:h-96 bg-history bg-cover bg-center flex flex-col justify-center items-center sm:items-center gap-6 p-6"
            >
                <h2 class="text-white">Historia</h2>
                <div class="flex flex-col sm:flex-row">
                    <p class="flex-1 text-white m-6">
                        Antes de 1987 Hacienda Barú estuvo dedicado a la
                        ganadería y silvicultura o áreas de repasto. Los
                        propietarios anteriores siempre tuvieron cuidado de
                        mantener intacto la mayoría del bosque primario y los
                        manglares en la propiedad.
                    </p>
                    <p class="flex-1 text-white m-6">
                        Fue en 1995 que el presidente Jose María Figueres firmó
                        un decreto de ley que convierte a Hacienda Barú en
                        Refugio Nacional de Vida Silvestre “Categoria Mixta.” Es
                        mixta porque el refugio incluye áreas que pertenecen al
                        estado (manglares y la Zona Marítima Terrestre) y el
                        resto del refugio son tierras privadas.
                    </p>
                    <p class="flex-1 text-white m-6">
                        En 2006 se segregó la parte dedicada al turismo
                        (haciendabaru.com), incluyendo las cabinas y el área
                        recreativa.
                        <br />
                        En el año 2017 se terminó de construir el Centro
                        Biológico que promueve la investigación científica
                        dentro del Refugio y áreas cercanas.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Inicio",
    components: Header,
};
</script>

<style lang="scss" scoped>
.map {
    width: 300px;
    height: 350px;

    @media screen and (min-width: 600px) {
        width: 450px;
        height: 350px;
    }
}

.underlined-title {
    &:after {
        left: 55px;
    }
}
</style>
