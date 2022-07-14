<script setup>
import Header from "../components/Header.vue";
</script>

<template>
    <section class="reserva">
        <Header title="Reserva" subtitle="Reserva" />
        <div class="w-4/5 m-auto p-6 py-12">
            <p>
                Este Centro Biológico comenzó a operar en el 2012. Su
                objetivo principal es mejorar la conservación y restauración
                de los ecosistemas de Refugio Nacional de Vida Silvestre
                Hacienda Barú y áreas aledañas. Se busca promover la
                ampliación de conocimientos científicos sobre la vida
                silvestre y el entorno social con una visión a largo plazo
                mientras que proporciona no sólo facilidades de hospedaje
                sino también otras valiosas experiencias tanto a
                investigadores como estudiantes de materias afines.
            </p>
        </div>
        <div class="w-screen">
            <div
                class="h-fit p-6 sm:p-0 sm:h-96 bg-mission-toledo bg-cover bg-center flex flex-col justify-center items-center gap-6 sm:gap-24 sm:flex-row">
                <article
                    class="h-72 sm:w-80 p-6 sm:p-4 bg-main-blue opacity-[.85] hover:opacity-100 transition ease-in-out">
                    <h2 class="underlined-title text-white">Vision</h2>
                    <p class="text-white">
                        El RNVS se compromete con el manejo apropiado, cuidadoso
                        y disciplinado de las áreas naturales, además se
                        implementa una visión holística orientada a garantizar
                        la salud y la biodiversidad de sus ecosistemas, en
                        beneficio tanto de los visitantes y comunidad local.
                    </p>
                </article>
                <article
                    class="h-72 sm:w-80 p-6 sm:p-4 bg-main-green opacity-[.85] hover:opacity-100 transition ease-in-out">
                    <h2 class="underlined-title text-white">Mission</h2>
                    <p class="text-white">
                        Promover el conocimiento y la investigación científica
                        de calidad para el beneficio del mismo RNVS, así como de
                        otros esfuerzos de conservación en la zona. Buscando
                        obtener un impacto positivo sobre la preservación de los
                        ecosistemas de la región.
                    </p>
                </article>
            </div>
        </div>
        <div class="w-screen" id="reservar">
            <div
                class="h-fit sm:px-24 py-16 bg-gradient-to-b from-main-green to-main-blue opacity-75 flex flex-col justify-center items-center">
                <h3 class="text-5xl font-serif text-white mb-6">Reservar</h3>
                <form id="reserva-form" v-if="showForm"
                    @submit.prevent="isLoading = true; submitForm()">
                    <input type="hidden" name="contact_number">
                    <div class="flex flex-col sm:flex-row gap-3">
                        <label class="block">
                            <span
                                class="block text-sm font-medium text-white">Nombre*</span>
                            <!-- Using form state modifers, the classes can be identical for every input -->
                            <input type="text" name="user_name"
                                class="mt-1 block w-full px-3 py-2 bg-white border rounded-full text-sm shadow-sm focus:outline-none focus:border-main-green border-white"
                                required />
                        </label>
                        <label class="block">
                            <span class="block text-sm font-medium text-white">Correo
                                electronico*</span>
                            <!-- Using form state modifers, the classes can be identical for every input -->
                            <input type="email" name="user_email"
                                class="mt-1 block w-full px-3 py-2 bg-white border rounded-full text-sm shadow-sm focus:outline-none focus:border-main-green border-white"
                                required />
                        </label>
                    </div>
                    <label class="block mt-3">
                        <span
                            class="block text-sm font-medium text-white">Commentarios*</span>
                        <!-- Using form state modifers, the classes can be identical for every input -->
                        <textarea cols="30" rows="10" name="message"
                            class="mt-1 block w-full px-3 py-2 bg-white border rounded-xl text-sm shadow-sm focus:outline-none focus:border-main-green border-white"
                            required></textarea>
                    </label>
                    <div class="w-full flex justify-center mt-4">
                        <input class="sm:w-1/3 w-full mx-auto transparent-pill-button"
                            type="submit"
                            :value="[!isLoading ? 'Enviar sollicitud' : 'Procesando...']">
                    </div>
                </form>
                <p class="text-xl text-white px-12 text-center">
                    {{ mailFeedback }}</p>
            </div>
        </div>
        <div class="w-screen flex flex-col sm:flex-row gap-6 p-12">
            <div class="flex flex-col flex-1">
                <p class="">
                    El Centro Biológico de Hacienda Barú brinda a sus huéspedes
                    hospedaje y alimentación a precios sumamente accesibles. Es
                    una instalación sólida con un atractivo diseño y agradable
                    infraestructura que ofrece condiciones adecuadas para el
                    clima tropical de la zona. El centro biológico permite a los
                    estudiantes o científicos alojarse con la comodidad y
                    seguridad necesaria mientras realizan sus investigaciones,
                    estudios o talleres.
                </p>
                <p class="">
                    Cuenta con dos edificaciones, en total ocho habitaciones con
                    capacidad máxima para 40 personas. Las camas en su mayoría
                    son camarotes y los baños estilo unisexo son amplios y
                    cómodos. El laboratorio y los dormitorios cuentan con
                    espaciosos corredores cubiertos que brindan protección
                    contra la intemperie y a la vez ofrecen un espacio para
                    relajación y encuentros.
                </p>
            </div>
            <div class="carousel flex-1 border border-solid">
                <div class="inner">
                    <div class="card" v-for="card in cards" :key="card">
                        {{ card }}
                    </div>
                </div>
                <button class="carousel-button">prev</button>
                <button class="carousel-button">next</button>
            </div>
        </div>
        <div class="w-screen flex flex-col sm:flex-row gap-6 p-12">
            <div class="flex flex-col flex-1">
                <h3 class="underlined-title text-light-grey">
                    El Centro Biológico cuenta con
                </h3>
                <ul class="ml-4 text-light-grey">
                    <li>- Un laboratorio de 392 m2</li>
                    <li>- Un aula con capacidad de 30 personas</li>
                    <li>- Un comedor para 40 personas</li>
                    <li>- Acceso a la red de senderos del RNVS</li>
                    <li>- Wifi, Parqueo y seguridad</li>
                </ul>
            </div>
            <div class="flex-1">
                <div class="mb-12">
                    <h3 class="underlined-title text-light-grey">
                        Tarifas para nacionales (2022)
                    </h3>
                    <table class="border-collapse table-auto mb-4">
                        <tbody>
                            <tr>
                                <td>Hospedaje en Dormitorio</td>
                                <td>¢9.200 / noche por persona</td>
                            </tr>
                            <tr>
                                <td>Hospedaje en Tienda de Campaña</td>
                                <td>¢5.200 / noche por persona</td>
                            </tr>
                            <tr>
                                <td>Cada comida</td>
                                <td>¢4.200 / comida por persona</td>
                            </tr>
                            <tr>
                                <td>
                                    Uso del laboratorio y senderos 1 día<br />
                                    (solo si no están hospedados)
                                </td>
                                <td>¢50.000 / día</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Las tarifas no incluyen 13% de Impuestos.</p>
                    <p>
                        * Las tarifas están válidas hasta el 31 de diciembre del
                        2020. Para más información o por descuentos para grupos
                        de más de 15 personas, contáctenos:
                        <a href="mailto:info@reservaeltoledo.com"
                            class="text-main-green">info@reservaeltoledo.com</a>
                    </p>
                </div>
                <div>
                    <h3 class="underlined-title text-light-grey">
                        Rates for non-Costa Ricans:
                    </h3>
                    <table class="border-collapse table-auto mb-4">
                        <tbody>
                            <tr>
                                <td>Lodging</td>
                                <td>$40.00</td>
                            </tr>
                            <tr>
                                <td>Lodging in tent</td>
                                <td>$13.00</td>
                            </tr>
                            <tr>
                                <td>Food per meal</td>
                                <td>$7.50</td>
                            </tr>
                            <tr>
                                <td>
                                    Use of Lab, classroom &amp; trails – 1
                                    day<br />
                                    (*solo si no están hospedados)
                                </td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Rates do not include 13% tax.</p>
                    <p>
                        * Rates valid through 12/31/20. For more information and
                        for group rates (over 15 people) please contact us at:
                        <a href="mailto:info@reservaeltoledo.com"
                            class="text-main-green">info@reservaeltoledo.com</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Reserva",
    components: Header,
    data() {
        return {
            cards: [1, 2, 3, 4, 5, 6, 7, 8],
            hash: this.$route.hash,
            showForm: true,
            mailFeedback: '',
            isLoading: false,
        };
    },
    mounted() {
        emailjs.init('W8Gbgq2rz3THHJx70');
        var section=this.$router.currentRoute.value.hash.replace("#", "");
        if (section)
            this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
    },
    methods: {
        submitForm() {
            const form = document.getElementById('reserva-form');
            // generate a five digit number for the contact_number variable
            form.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_vs5lrxl', 'contact_form', form)
                .then(() => {
                    this.showForm = false;
                    this.mailFeedback = "Gracias por su mensaje ! 😃 Le respondemos rápidamente.";
                    console.log('SUCCESS!');
                })
                .catch((error) => {
                    this.mailFeedback = "Lo sentimos, hubo un problema 😞 ¡Inténtalo de nuevo!";
                    console.log('FAILED...', error);
                });
            this.isLoading = false;
        }
    }
};
</script>

<style lang="scss" scoped>
h2.underlined-title {
    &:after {
        top: 40px;
        background: white;
    }
}

.carousel {
    width: 170px; /* ❶ */
    overflow: hidden; /* ❷ */
}

.inner {
    white-space: nowrap; /* ❸ */
}

.card {
    width: 40px;
    margin-right: 10px;
    display: inline-flex;

    /* optional */
    height: 40px;
    background-color: #39b1bd;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
}

/* optional */
.carousel-button {
    margin-right: 5px;
    margin-top: 10px;
}
</style>
