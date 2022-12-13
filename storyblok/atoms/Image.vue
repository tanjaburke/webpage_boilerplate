<template>
    <img :src="blok.image.filename" :alt="blok.image.alt">
</template>

  <script>
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            }
        }
    }
</script>