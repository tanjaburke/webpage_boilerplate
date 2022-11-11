<template>
  <section class="blok container">
      <article class="column flex-col">
           <RichText :textBlock="blok.firstColumn"></RichText>
      </article>
      <article class="column flex-col">
            <RichText :textBlock="blok.secondColumn"></RichText>
      </article>
  </section>
</template>

<script lang="ts">
import RichText from './RichText.vue';
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
    components: {
        RichText
    },
    data() {
        return {
        myInnerHTML: "",
        };
    },

};
</script>

<style lang="scss">
    .column {
        word-break: break-all;
        &:nth-child(1) {
            margin-right: 50px;
        }
    }

</style>