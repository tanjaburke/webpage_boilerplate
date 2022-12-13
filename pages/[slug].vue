<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script>
  export default {
    data() {
        return {
            story: '',
        }
    },
    mounted(){
      this.fetchData()
 
    },
    methods: {
      async fetchData() {
        this.story = await useStoryblok(this.$route.params.slug, { version: 'draft', resolve_relations: 'navigation.reference' });
      }
    }
  }
</script>