<script setup>
// This starter template is using Vue 3
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// SFCs

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <form>
    <label>{{ $t('message') }}</label>
    <select class="border border-main-green rounded-full" v-model="locale">
      <option value="es" selected>Spanish version</option>
      <option value="fr">French version</option>
      <option value="eng">English version</option>
    </select>
  </form>
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
@charset "utf-8";
@import "scss/app.scss";
</style>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "App",
    setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t, locale }
  }
};
</script>

<i18n>
{
  "fr": {
    "message": "Bonjour",
  },
  "es": {
    "message": "Buenas",
  }
}
</i18n>