<template>
    <article class="header inner">
        <NuxtLink v-if="headerLogo" to="/">
            <img :src="headerLogo.filename" alt="" width="30" height="30">
        </NuxtLink>
        <Navigation v-if="headerMenu" :blok="headerMenu"/>
    </article>
</template>


<script setup>
import Navigation from './Navigation.vue';

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = ref(null)
const headerLogo = ref(null)
headerMenu.value = data.story.content.navigation
headerLogo.value = data.story.content.headerLogo
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}
</style>
