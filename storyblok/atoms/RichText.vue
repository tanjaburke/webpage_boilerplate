<template>
    <section class="inner-down col-white">
        <RichTextRenderer :document="blok.text"></RichTextRenderer>
    </section>
</template>

  <script>
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
    }
}
</script>

<style lang="scss">
    .rich-text {
        a {
            color: white;
        }

        @media only screen and (max-width: $phone-max) {
            width: 95%;
        }
    }
</style>
