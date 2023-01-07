<template>
    <article v-if="footerMenu.length > 0" class="footer inner-full flex-column">
        <!-- <BlokTitle v-if="footerTitle" :blok="footerTitle[0]"/>
        <div class="flex">
            <div v-for="column in footerColumn" :key="column._uid">
                <ul>
                    <template v-for="content in column.content" :key="content._uid">
                        <li v-if="content.component === 'menu_item'">
                            <LinkWrapper :link="content.link" classes="footer-link">{{content.title}}</LinkWrapper>
                        </li>
                        <li v-else>
                            <component :is="content.component" :blok="content"/>
                        </li>
                    </template>
                </ul>
            </div>
        </div> -->
        <!-- <NuxtLink v-if="headerLogo" to="/">
            <img :src="headerLogo.filename" alt="" width="30" height="30">
        </NuxtLink> -->
    </article>
</template>


<script setup>
import TitleBlok from '../atoms/BlokTitle.vue'
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const footerMenu = ref(null)
footerMenu.value = data.story.content.footer

const footerColumn = ref([])
footerColumn.value = data.story.content.footer.filter((x)=> x.component === "footerColumn");

const footerTitle = ref(null)
footerTitle.value = data.story.content.footer.filter((x)=> x.component === "blokTitle");



</script>

<style lang="scss">
.footer {
    ul {
        list-style-type: none;
        padding: 0;
        margin-right: $blok-margin * 2
    }

    li {
        padding-bottom: 7px;
    }

    .footer-link {
        color: $color-black !important;
        font-weight: bold;
    }
}
</style>
