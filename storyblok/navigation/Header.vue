<template>
        <article class="header inner animation-slide-down" :style="{'background-color': setBackgroundColor ? setBackgroundColor : ''}">
            <a v-if="headerLogo && headerLogo.filename" to="/" :style="{'color': color}">
                <img :src="headerLogo.filename" alt="" width="30" height="30">
            </a>
            <div class="header-logo flex-col">
                <a v-if="headerTitle" href="/" :style="{'color': color}">
                    <p class="small-header header-title" :style="{'color': color}">{{ headerTitle }}</p>
                </a>
                <p class="header-subtitle" :style="{'color': color}">Filosof, højskolelærer og skribent</p>
            </div>
            <Navigation v-if="headerMenu && ready && !mobile" :blok="headerMenu" :color="color"/>
            <button class="hamburger-menu" v-if="headerMenu && mobile" @click="openMenu"><HamburgerMenu/></button>
            <ModalFull v-if="menuIsOpen" :blok="headerMenu" @closeMenu="closeMenu"/>
        </article>
</template>


<script setup>
import Navigation from './Navigation.vue';
import HamburgerMenu from '../../assets/icons/HamburgerMenu.vue';
import ModalFull from './../buildingBlocks/ModalFull.vue';

import { useWindowWidth } from '../../composables/windowWidth';
import { useGlobalVariables } from '../../composables/globalVariables'

const { headerMenu,
        headerLogo,
        headerTitle } = await useGlobalVariables();
const { mobile, ready } = useWindowWidth();
const menuIsOpen =ref(false)
const route = useRoute()
const color = route.params.slug && route.params.slug === "kontakt" ? '#333' : 'white';

function openMenu(){
    menuIsOpen.value = true;
}

function closeMenu(){
    menuIsOpen.value = false
}

</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: -70px;
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
