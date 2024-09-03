<template>
    <a
        :href=link
        class="block mt-4 text-xl sm:inline-block sm:mt-0 text-light-grey hover:text-main-green active:text-main-green mr-4"
    >
        {{title}}
    </a>
</template>

<script>
export default {
    name: "Navlink",
    props: {
        title: String,
        link: String
    }
};
</script>
