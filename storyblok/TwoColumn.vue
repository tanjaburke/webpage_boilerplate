<template>
  <section class="flex w-100">
      <article class="flex-col">
           <RichTextRenderer :document="blok.firstColumn"></RichTextRenderer>
      </article>
      <article class="flex-col">
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