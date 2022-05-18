<script setup>
// This starter template is using Vue 3
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// SFCs

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
@charset "utf-8";
@import "scss/app.scss";
</style>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
};

</script>
