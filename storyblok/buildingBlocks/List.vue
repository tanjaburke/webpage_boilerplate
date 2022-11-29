<template>
    <section class="list blok flex-col al-c js-c">
        <template  v-for="item in blok.content" :key="item._uid" >
            <component v-if="item" :is="item.component" :blok="item" :height="blok.itemsHeight"/>
        </template>
    </section>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            }
        },     mounted(){
                console.log("LIST", toRaw(this.blok));
                
            }
    };
</script>


