<template>
    <img :src="blok.image.filename" :alt="blok.image.alt">
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            }
        }
    }
</script>