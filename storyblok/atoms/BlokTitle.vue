<template>
    <h2 :class="['title', blok.type? blok.type : '', blok.color? blok-color : '']"> {{blok.title}}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            },
        },
        mounted(){
            console.log("this. is blok", toRaw(this.blok));
            
        }
    }
</script>