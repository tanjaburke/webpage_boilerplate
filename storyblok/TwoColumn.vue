<template>
  <section class="blok container">
      <article class="column flex-col">
           <RichTextRenderer :document="blok.firstColumn"></RichTextRenderer>
      </article>
      <article class="column flex-col">
            <RichTextRenderer :document="blok.secondColumn"></RichTextRenderer>
      </article>
  </section>
</template>

<script lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
export default {
    props: {
        blok: {
            type: Object,
            required: true
        }
    },
    components: {
        RichTextRenderer
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