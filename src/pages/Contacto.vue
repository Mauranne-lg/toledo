<script setup>
import Header from "../components/Header.vue";

</script>

<template>
  <section class="contacto">
    <Header title="Contacto" subtitle="Contacto" />
    <div
      class="sm:mx-32 sm:my-12 flex flex-col sm:flex-row gap-4 items-center items-center sm:items-stretch">
      <div class="flex-2 flex flex-col gap-6">
        <div class="bg-secondary-grey p-6 shadow group hover:bg-main-green ">
          <h2 class="underlined-title group-hover:text-white">Dirección</h2>
          <p class="group-hover:text-white">Provincia de Puntarenas, Savegre</p>
        </div>
        <div class="bg-secondary-grey p-6 shadow group hover:bg-main-green">
          <h2 class="underlined-title group-hover:text-white">Teléfono</h2>
          <a href="tel:+506 8347-5194"
            class="text-light-grey group-hover:text-white">+506 8347-5194</a>
        </div>
        <div class="bg-secondary-grey p-6 shadow group hover:bg-main-green">
          <h2 class="underlined-title group-hover:text-white">Correo Electrónic</h2>
          <a href="mailto:info@reservaeltoledo.com"
            class="text-light-grey group-hover:text-white">info@reservaeltoledo.com</a>
        </div>
      </div>
      <iframe title="Toledo dirrecion" class="flex-1 map shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44447.020268610846!2d-85.43045959255913!3d10.049937121336944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fa51d42a61be3%3A0x2b5b93a7e157a6db!2sReserva%20El%20Toledo!5e0!3m2!1sfr!2scr!4v1657835974340!5m2!1sfr!2scr" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="w-screen">
      <div class="h-fit sm:px-24 py-16 flex flex-col justify-center items-center">
        <h3 class="text-5xl font-bold text-light-grey text-center font-serif mb-6">
          Formulario de
          contacto</h3>
        <p v-if="showForm">
          Para más información sobre el refugio y la estación de investigación
          biológica,
          por favor no dude en contactarnos.
        </p>
        <form class="w-2/3 mt-12" id="contact-form" v-if="showForm"
          @submit.prevent="isLoading = true; submitForm()">
          <input type="hidden" name="contact_number">
          <div class="flex flex-col flex-grow-1 sm:flex-row gap-3 justify-between">
            <label class="block">
              <span class="block text-sm font-medium text-light-grey">Nombre*</span>
              <!-- Using form state modifers, the classes can be identical for every input -->
              <input type="text" name="user_name"
                class="mt-1 block px-3 py-2 border border-lighter-grey rounded-full text-sm shadow-sm focus:outline-none focus:border-main-green"
                required />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-light-grey">Correo
                electronico*</span>
              <!-- Using form state modifers, the classes can be identical for every input -->
              <input type="email" name="user_email"
                class="mt-1 block px-3 py-2 border border-lighter-grey rounded-full text-sm shadow-sm focus:outline-none focus:border-main-green"
                required />
            </label>
          </div>
          <label class="block mt-3">
            <span class="block text-sm font-medium text-light-grey">Mensaje*</span>
            <textarea name="message" cols="10" rows="10"
              class="mt-1 block w-full h-32 px-3 py-2 bg-white border border-lighter-grey rounded-xl text-sm shadow-sm focus:outline-none focus:border-main-green"
              required></textarea>
          </label>
          <div class="w-full flex justify-center mt-4">
            <input class="sm:w-1/3 w-full mx-auto green-pill-button" type="submit"
              :value="[!isLoading ? 'Enviar' : 'Procesando...']">
          </div>
        </form>
        <p class="text-xl px-12 text-center text-light-grey">
          {{ mailFeedback }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacto",
  components: Header,
  data() {
    return{
      showForm:true,
      mailFeedback:'',
      isLoading:false,
    }
  },
  mounted(){
    emailjs.init('W8Gbgq2rz3THHJx70');
  },
  methods:{
    submitForm () {
      const form = document.getElementById('contact-form');
      // generate a five digit number for the contact_number variable
      form.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_vs5lrxl', 'contact_form', form)
        .then(() => {
          this.showForm = false;
          this.mailFeedback = "Gracias por su mensaje ! 😃 Le respondemos rápidamente.";
          console.log('SUCCESS!');
        })
        .catch((error)=> {
          this.mailFeedback = "Lo sentimos, hubo un problema 😞 ¡Inténtalo de nuevo!";
          console.log('FAILED...', error);
        });
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.map {
  width: 300px;

  @media screen and (min-width: 600px) {
    width: 616px;
  }
}
</style>
