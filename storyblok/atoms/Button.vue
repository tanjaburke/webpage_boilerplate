<template>
    <button :class="['button', blok.backgroundColor, blok.textColor]"> {{blok.backgroundColor}} </button>
</template>

<script lang="ts">
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
}
</script>