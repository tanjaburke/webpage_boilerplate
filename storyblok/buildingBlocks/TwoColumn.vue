<template>
  <section :class="`blok two-columns ${blok.backgroundColor}`">
        <article class="column flex-col">
            <template  v-for="blok in blok.firstColumn" :key="blok._uid" >
                <component v-if="blok" :is="blok.component" :blok="blok"/>
            </template>
        </article>
        <article class="column flex-col">
            <template  v-for="blok in blok.secondColumn" :key="blok._uid" >
                <component v-if="blok" :is="blok.component" :blok="blok"/>
            </template>
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
    }

};
</script>

<style lang="scss">
    .two-columns {
        display: flex;
        flex-direction: column;
        width: 100%;

        @media (min-width: 900px) {
            display: grid;
            grid-template-columns: repeat(2, 50%);
        }
    }

    .column {
        word-break: break-all;
        &:nth-child(1) {
            margin-right: 50px;
        }
    }

</style>