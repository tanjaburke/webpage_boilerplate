<template>
  <section :class="`blok two-columns inner-down ${blok.backgroundColor}`">
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

  <script>
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
        width: 90%;
        max-width: 1800px;

        @media (min-width: 900px) {
            display: grid;
            grid-template-columns: repeat(2, 50%);
        }

        .rich-text {

            @media only screen and (max-width: $phone-max) {
                padding-bottom: 20px !important;
            }
        }
    }

    .two-columns:first-child {
        margin-top: 45px;
    }

    .column {
        word-break: break-all;
        &:nth-child(1) {
            margin-right: 50px;
        }
    }

</style>