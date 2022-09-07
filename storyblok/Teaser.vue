<template>
  <div v-editable="blok" :class="`${blok.class}`">
    hellp
    <RichTextRenderer :document="blok.headline"></RichTextRenderer>
  </div>
</template>

<script lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
export default {
  props: ["blok"],
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
