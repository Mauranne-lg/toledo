<script setup>
defineProps({
    route: String,
});
</script>

<template>
    <router-link
        :to="'/'+ route"
        class="block mt-4 lg:inline-block lg:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-7 text-lg capitalize"
    >
        {{ route }}
    </router-link>
</template>
