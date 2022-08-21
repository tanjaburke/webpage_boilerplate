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
            this.story = await useStoryblok('home', { version: 'draft' });
        }
    }
}



</script>
 
<template>
hellojhilhl
h
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>