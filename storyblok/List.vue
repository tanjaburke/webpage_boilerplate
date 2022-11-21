<template>
    <section class="blok flex-col al-c js-c">
            <div v-for="item in blok" :key="item._uid">
                <component v-if="item.content.type" :is="`${item.content.type.name}Card`" :item="item"/>
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
    },
};
</script>
