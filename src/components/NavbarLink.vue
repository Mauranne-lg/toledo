<script setup>
defineProps({
    route: String,
    title: String,
});
</script>

<template>
    <router-link
        :to="'/'+ route"
        class="block mt-4 lg:inline-block lg:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-7 text-lg capitalize"
    >
        {{ title }}
    </router-link>
</template>
