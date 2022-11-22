<template>
    <p :class="['description', blok.class]"> {{blok.description}}</p>
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

<style lang="scss">
    .description {
        font-family: helvetica;
        margin-top: 0;
    }
</style>