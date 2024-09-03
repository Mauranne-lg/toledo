<template>
  <section class="inicio">
    <Jumbotron title="Galeria" subtitle="Disfrutar de la naturaleza" />
    <div class="container w-screen flex flex-col sm:flex-row m-auto">
      <div class="m-10">
        <h2>GALERIA</h2>
      </div>
    </div>
  </section>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";

export default {
  name: "Galeria",
  components: {
    Jumbotron
  },
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

h3 {
 &:after {
    left: 55px;
}
}
</style>
