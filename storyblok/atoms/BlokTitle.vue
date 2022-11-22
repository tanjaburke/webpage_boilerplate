<template>
    <h2 :class="['title', blok.type, blok.color]"> {{blok.title}}</h2>
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