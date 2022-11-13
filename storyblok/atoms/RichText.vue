<template>
    <RichTextRenderer :document="textBlock" :class="{}"></RichTextRenderer>
</template>

<script lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
export default {
    props: {
        textBlock: {
            type: Object,
            required: true
        }
    },
    components: {
        RichTextRenderer
    },
};
</script>

