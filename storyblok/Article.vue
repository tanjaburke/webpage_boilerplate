<template>
    <section class="blok flex-col al-c js-c">
        {{article.content.title }}
    </section>
</template>
  <script>
export default {
    props: {
        article: {
            type: Object,
            required: true,
        }
    }
    
  }
</script>