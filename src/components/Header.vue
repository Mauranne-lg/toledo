<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="w-screen">
            <div
                class="h-jumbotron bg-toledo  bg-cover bg-center grid place-content-center"
            >
                <h1>{{ title }}</h1>
                <span class="subtitle">Toledo - {{subtitle}}</span>
            </div>
        </div>
</template>