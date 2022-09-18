<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script lang="ts">
export default {
    data() {
        return {
            story: '',
        }
    },
    mounted() {
        this.getData();
       
    },
    methods: {
        async getData(){
            this.story = await useStoryblok('home', { version: 'draft', resolve_relations: 'navigation.reference' });
            console.log(toRaw(this.story));
            
        }
    }
}

</script>
