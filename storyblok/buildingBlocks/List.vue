<template>
    <section :class="`list ${blok.backgroundColor}`">
        <div class="inner flex-col al-c js-c"> 
        <template  v-for="item in blok.content" :key="item._uid" >
            <component v-if="item" :is="item.component" :blok="item" :height="blok.imageHeight" :width="blok.imageWidth" :bgColor="blok.cardBackgroundColor" :textColor="blok.textColor" :headerType="blok.headerType" :lineClamp="blok.lineClamp" parent="list"/>
        </template>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        props: {
            blok: {
                type: Object,
                required: true
            }
        }
    };
</script>


