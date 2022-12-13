<template>
    <p :class="['description', blok.textColor? blok.textColor: '']"> {{blok.description}}</p>
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
