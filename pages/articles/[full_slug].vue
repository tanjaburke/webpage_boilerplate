<template>
    <article class="full-article flex-col" v-if="article.story && article.story.content">
        <h1>{{ article.story.content.title }}</h1>
        <DateString :date="article.story.published_at"></DateString>
        <RichText :textBlock="article.story.content.text"></RichText>
        <h3>SOURVES - lav om til data</h3>
        <template v-for="source in article.story.content.sources" :key="source._uid">
         <a target="_blank" v-if="source.link.linktype === 'url'" :href="source.link.url.includes('https') ? source.link.url : `https://${source.link.url}`">{{ source.title }}</a>
         <a target="_blank" v-else :href="source.link.url">{{ source.title }}</a>
        </template>
        
    </article>

</template>

<script lang="ts">
import RichText from '../../storyblok/atoms/RichText.vue';
import DateString from '../../storyblok/atoms/DateString.vue';
import ApiService from '../../services/apiService'
export default {
  components: { RichText },
    data() {
        return {
            article: Object
        }
    },
    mounted(){
        this.fetchArticle(this.$route.params.full_slug);
    },
    methods: {
        async fetchArticle(full_slug){
            this.article = await ApiService.getSpecificStory(`articles/${this.$route.params.full_slug}`)
            console.log("IN ARTICLE PAGE", toRaw(this.article.story));
            }
    }
}
</script>
