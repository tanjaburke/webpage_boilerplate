<template>
        <StoryblokComponent v-if="story && story.content" :blok="story.content" />
</template>

<script lang="ts">
export default {
    data() {
        return {
            story: Object,
            selected: Object,
            articles: Object,
            tags: [],
            selectedId: '',
        }
    },
    mounted() {
        this.getData();
       
    },
    methods: {
        async getData(){
            this.story = await useStoryblok('home', { version: 'draft', resolve_relations: 'navigation.reference' });
        }
    }
}
</script>
