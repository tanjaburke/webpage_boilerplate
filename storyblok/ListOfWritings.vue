<template>
    <section class="flex-col al-c js-c w-100">
        <template v-for="item in blok.item" :key="item._uid">
            <component :is="item.component" :item="item"/>
        </template>
    </section>
</template>

<script lang="ts">
import AcademicArticle from './buildingBlocks/AcademicArticles.vue';

export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
    components: {
        AcademicArticle
    },
};
</script>

<style lang="postcss" scoped>

</style>