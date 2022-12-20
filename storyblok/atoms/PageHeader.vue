<template>
    <h2 :class="['animated-blok','title', 'page-header' , blok.color? blok.color : '']" :style="{'margin-bottom': blok.animation ? '10px' : '50px'}"> {{blok.title}}</h2>
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
