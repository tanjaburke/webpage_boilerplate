<template>
    <p :class="['description', blok.textColor? blok.textColor: '']"> {{blok.description}}</p>
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
        margin-top: 0;
    }
</style>