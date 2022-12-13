<template>
    <h2 :class="['title', blok.type? blok.type : '', blok.color? blok.color : '']">{{blok.title}}</h2>
</template>

  <script>
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            },
        }
    }
    
</script>
