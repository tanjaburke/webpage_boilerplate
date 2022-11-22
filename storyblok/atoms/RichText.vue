<template>
    <RichTextRenderer :document="blok" :class="{}"></RichTextRenderer>
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
};
</script>

