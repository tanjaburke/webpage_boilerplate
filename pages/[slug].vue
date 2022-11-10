<template>
  <div>Hello</div>
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
        console.log("fetching this.story in slug.vue ");
        this.story = await useStoryblok(this.$route.params.slug, { version: 'draft', resolve_relations: 'navigation.reference' });
        console.log('in slug this.story.content', toRaw(this.story.content));
        console.log('in slug this.story', toRaw(this.story));
      }
    }
  }
</script>