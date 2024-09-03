<template>
   <div class="w-screen">
      <div class="h-jumbotron bg-toledo bg-cover bg-top grid place-content-center text-center text-xl">
        <h1 class="shadow-xl">{{title}}</h1>
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "Jumbotron",
  props: {
    title: String,
    subtitle: String
  }
};
</script>
