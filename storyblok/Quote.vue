<template>
    <section class="blok quote-section flex-col al-c js-c">
        <article class="quote article">
            <p class="quote">{{ blok.quote }}</p>
            <p class="by-who">- {{ blok.byWho }}</p>
        </article>
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

<style lang="scss">
.quote-section {
    position: relative;
}

.quote-article {
    width: 40vw;
    min-width: 400px;
}

.quote {
    font-size: 25px;
    font-style: italic;
    margin: 0;
}

.by-who {
    font-size: 15px;
}
</style>