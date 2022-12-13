<template>
 <h1 class="blok">{{ blok.pageTitle }}</h1>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
};
</script>