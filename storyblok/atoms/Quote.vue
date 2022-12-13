<template>
    <section :class="['blok', 'quote-section', 'flex-col',  'al-c', 'js-c', blok.backgroundColor]">
        <article class="quote-article">
            <p :class="['quote', blok.textColor]">{{ blok.quote }}</p>
            <p :class="['author', blok.textColor]" v-if="blok.author.length > 0">- {{ blok.author}}</p>
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

    @media only screen and (max-width: $phone-max) {
        width: 100%;
        min-width: unset;
    }
}

.quote {
    font-size: 25px;
    font-style: italic;
    margin: 0;
}

.author {
    font-size: 15px;
}
</style>