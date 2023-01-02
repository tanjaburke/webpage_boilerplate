<template>
    <article class="header inner sticky-top" :style="{'background-color': setBackgroundColor}">
        <a v-if="headerLogo.filename" to="/">
            <img :src="headerLogo.filename" alt="" width="30" height="30">
        </a>
        <div class="header-logo flex-col">
            <a v-if="headerTitle" href="/">
                <p class="small-header header-title">{{ headerTitle }}</p>
            </a>
            <p class="header-subtitle">Filosof, højskolelærer og skribent</p>
        </div>
        <Navigation v-if="headerMenu && !mobile" :blok="headerMenu"/>
        <button class="hamburger-menu" v-if="headerMenu && mobile" @click="openMenu"><img src="../../assets/icons/hamburger-menu.png" alt=""></button>
        <ModalFull v-if="menuIsOpen" :blok="headerMenu" @closeMenu="closeMenu"/>
    </article>
</template>


<script setup>
import Navigation from './Navigation.vue';
import ModalFull from './../buildingBlocks/ModalFull.vue';

import { useWindowWidth } from '../../composables/windowWidth';

const { mobile} = useWindowWidth();
const menuIsOpen =ref(false)
const route = useRoute()
const setBackgroundColor = route.params.slug && route.params.slug !== "home" ? '#202020' : {};
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = ref(null)
const headerLogo = ref(null)
const headerTitle = ref(null)
headerMenu.value = data.story.content.navigation
headerLogo.value = data.story.content.headerLogo
headerTitle.value = data.story.content.headerTitle

function openMenu(){
    menuIsOpen.value = true;
}

function closeMenu(){
    menuIsOpen.value = false
}

// console.log("Mobile",mobile.value);
// console.log(toRaw(data));
// console.log(toRaw(route.params));
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    z-index: 100;
}

.header-logo {
    height: 50px;
}

.header-title,
.header-subtitle {
    color: white;
    mix-blend-mode: exclusion;
    position: relative;
    z-index: 100;
}

.header-title {
    margin-top: $tiny-margin;
}

.hamburger-menu {
    height: 30px;
    width: 30px;
    background-color: unset;
    border: none;

    img {
        height: 100%;
        widows: 100&;
    }
}
</style>
