<template>
    <section class="flex-col al-c js-c w-100">
        <p class="quote">{{ blok.quote }}</p>
        <p class="byWho">{{ blok.byWho }}</p>
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

<style lang="postcss" scoped>
.quote {
    font-size: 20px;
    width: 50%;
}

.by-who {
    font-style: italic;
    font-size: 13px;
}
</style>