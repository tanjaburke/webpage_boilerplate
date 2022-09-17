<template>
    <section class="blok flex-col al-c js-c">
        <template v-if="blok.card">
            <div class="flex card" v-for="item in blok.items" :key="item._uid">
                <component :is="item.component" :blok="item"/>
            </div>
        </template>
        <template v-else>
            <div v-for="item in blok.items" :key="item._uid">
                <component :is="item.component" :blok="item"/>
            </div>
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
    },
};
</script>
