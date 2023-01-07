<template>
        <div v-if="blok.images.length===1" 
            class="image-center-cropped hero-image flex al-e inner inner-down js-s" 
            :style="{ 'background-image': `url(${mobile ? blok.images[0].phoneImage.filename : blok.images[0].desktopImage.filename})` }"
            >
                <p class="photographer animation-appear-faded">{{mobile ? blok.images[0].phoneImage.title : blok.images[0].desktopImage.title}}</p>
            </div>
        <swiper v-else
            class="w-100 my-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            :autoplay='{
            "delay": 5000,
            "disableOnInteraction": false
            }'
            parallax
            grabCursor
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >
            <swiper-slide v-for="(image, index) in blok.images" :key="index">
                <div class="image-center-cropped hero-image" :style="{ 'background-image': `url(${mobile ? image.phoneImage.filename : image.desktopImage.filename})` }"></div>
            </swiper-slide>
        </swiper>
        <div v-if="blok.images.length>1" class="swiper-button-next"></div>
        <div v-if="blok.images.length>1" class="swiper-button-prev"></div>
</template>
 
<script setup lang="ts">
 // import Swiper core and required modules
import { Navigation, A11y, Autoplay, EffectFade } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue'

//import conposables
import { useWindowWidth } from '../../composables/windowWidth';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

const props = defineProps(['blok'])

const { mobile, ready } = useWindowWidth();
    
const modules = [Navigation, Autoplay, A11y, EffectFade]

</script>

<style lang="scss">
    .hero-image {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        @media only screen and (max-width: $phone-max) {
            min-width: 100%;
            width: unset;
        }

    }

    .my-swiper {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 25px;
        color: #444;
        font-weight: bold;

        @media only screen and (max-width: $phone-max) {
            font-size: 20px;
        }
    }

    .swiper-button-next,
    .swiper-button-prev{
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;

        @media only screen and (max-width: $phone-max) {
            width: 40px;
            height: 40px;
        }
    }

    .photographer {
        font-size: 12px;
        font-weight: 200;
        color: white;
        position: absolute;
        bottom: 3%;
        opacity: 0;
    }
</style>