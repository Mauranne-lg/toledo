<script setup>
import Header from "../components/Header.vue";
</script>

<template>
    <section class="galeria">
        <Header title="Galeria" subtitle="Galeria" />
        <div class="flex flex-wrap gap-2 w-2/3 mx-auto my-10 justify-center">
            <a class="tag" v-for="tag in tags" :key="tag">{{ tag }}</a>
        </div>
        <div
            class="grid sm:w-2/3 my-6 mx-2 sm:mx-auto grid-cols-1 grid-rows-flow sm:grid-rows-4 sm:grid-cols-4 gap-6 place-items-center"
        >
            <img
                v-for="image in images"
                :key="image"
                src="https://picsum.photos/200/200"
                alt=""
            />
        </div>
    </section>
</template>

<script>
export default {
    name: "Galeria",
    components: Header,
    mounted() {},
    data() {
        return {
            images: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            tags: [
                "todas",
                "flora y fauna",
                "aves",
                "hongos",
                "insectos",
                "pasos",
            ],
        };
    },
    methods: {
        importAll(r) {
            r.keys().forEach((key) =>
                this.images.push({ pathLong: r(key), pathShort: key })
            );
        },
    },
};
</script>

<style></style>
,
